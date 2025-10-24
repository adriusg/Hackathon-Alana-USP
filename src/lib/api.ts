import axios, { AxiosInstance, AxiosError } from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

class ApiClient {
  private client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: `${API_URL}/api/v1`,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // Request interceptor to add auth token
    this.client.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('access_token')
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    // Response interceptor to handle errors
    this.client.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        if (error.response?.status === 401) {
          // Try to refresh token
          const refreshToken = localStorage.getItem('refresh_token')
          if (refreshToken) {
            try {
              const { data } = await axios.post(`${API_URL}/api/v1/auth/refresh`, {
                refresh_token: refreshToken,
              })
              localStorage.setItem('access_token', data.access_token)
              localStorage.setItem('refresh_token', data.refresh_token)
              
              // Retry original request
              if (error.config) {
                error.config.headers.Authorization = `Bearer ${data.access_token}`
                return axios(error.config)
              }
            } catch (refreshError) {
              // Refresh failed: não desloga automaticamente; mantém sessão até usuário clicar em "Sair"
              return Promise.reject(error)
            }
          } else {
            // Sem refresh token: não redireciona automaticamente
            return Promise.reject(error)
          }
        }
        return Promise.reject(error)
      }
    )
  }

  // Auth endpoints
  async login(email: string, password: string, otpCode?: string) {
    const { data } = await this.client.post('/auth/login', {
      email,
      password,
      otp_code: otpCode,
    })
    localStorage.setItem('access_token', data.access_token)
    localStorage.setItem('refresh_token', data.refresh_token)
    return data
  }

  async registerSchool(schoolData: any) {
    const { data } = await this.client.post('/auth/register/school', schoolData)
    return data
  }

  async checkIdentifier(identifier: string) {
    const { data } = await this.client.post('/auth/check-identifier', { identifier })
    return data as { next: 'password' | 'register' }
  }

  async registerQuick(payload: { full_name: string; email?: string; phone?: string; school_id?: number; school_slug?: string; role: 'student'|'guardian'|'manager'; role_in_school?: string }) {
    const { data } = await this.client.post('/auth/register-quick', payload)
    if ((data as any)?.access_token && (data as any)?.refresh_token) {
      localStorage.setItem('access_token', (data as any).access_token)
      localStorage.setItem('refresh_token', (data as any).refresh_token)
    }
    return data
  }

  async tenantsSearch(query: string) {
    const { data } = await this.client.get('/tenants/search', { params: { q: query } })
    return data as { items: Array<{ id: number; slug: string; name: string; email_domain?: string; city?: string; state?: string }> }
  }

  async getAccessibilityPrefs() {
    const { data } = await this.client.get('/preferences/accessibility')
    return data as { ttsEnabled: boolean; fontSize: number; highContrast: boolean; alternativeFont: boolean; keyboardNavigation: boolean; focusVisible: boolean; reduceMotion: boolean }
  }

  async updateAccessibilityPrefs(prefs: { ttsEnabled: boolean; fontSize: number; highContrast: boolean; alternativeFont: boolean; keyboardNavigation: boolean; focusVisible: boolean; reduceMotion: boolean }) {
    const { data } = await this.client.patch('/preferences/accessibility', prefs)
    return data
  }

  async exportMyData() {
    const { data } = await this.client.get('/privacy/export')
    return data
  }

  async requestAccountDeletion() {
    const { data } = await this.client.post('/privacy/delete')
    return data
  }

  async forgotPassword(email: string) {
    const { data } = await this.client.post('/auth/forgot-password', { email })
    return data
  }

  async resetPassword(token: string, new_password: string, confirm_password: string) {
    const { data } = await this.client.post('/auth/reset-password', { token, new_password, confirm_password })
    return data
  }

  async verifyEmail(token: string) {
    const { data } = await this.client.post('/auth/verify-email', { token })
    return data
  }

  async logout() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
  }

  async getMe() {
    const { data } = await this.client.get('/auth/me')
    return data
  }

  // Notifications
  async getNotificationsSummary() {
    const { data } = await this.client.get('/notifications/summary')
    return data
  }

  async listNotifications(params?: { category?: string; unread_only?: boolean }) {
    const { data } = await this.client.get('/notifications', { params })
    return data
  }

  async markAllNotificationsRead() {
    const { data } = await this.client.post('/notifications/mark-all-read')
    return data
  }

  async markNotificationRead(notificationId: number) {
    const { data } = await this.client.patch(`/notifications/${notificationId}/read`)
    return data
  }

  async getNotificationPreferences() {
    const { data } = await this.client.get('/notifications/preferences')
    return data
  }

  async updateNotificationPreferences(payload: any) {
    const { data } = await this.client.patch('/notifications/preferences', payload)
    return data
  }

  // Events
  async listEvents(params?: { start?: string; end?: string; category?: string }) {
    const { data } = await this.client.get('/events', { params })
    return data
  }

  async getEvent(id: number) {
    const { data } = await this.client.get(`/events/${id}`)
    return data
  }

  async createEvent(payload: any) {
    const { data } = await this.client.post('/events', payload)
    return data
  }

  async updateEvent(id: number, payload: any) {
    const { data } = await this.client.patch(`/events/${id}`, payload)
    return data
  }

  async deleteEvent(id: number) {
    const { data } = await this.client.delete(`/events/${id}`)
    return data
  }

  async getMyRSVP(eventId: number) {
    try {
      const { data } = await this.client.get(`/events/${eventId}/rsvp`)
      return data
    } catch (err) {
      const e = err as AxiosError
      if (e.response?.status === 404) return null
      throw err
    }
  }

  async rsvpEvent(eventId: number, payload: { response: 'going'|'maybe'|'not_going'; guests_count?: number; dietary_restrictions?: string; accessibility_needs?: string; notes?: string; }) {
    const { data } = await this.client.post(`/events/${eventId}/rsvp`, payload)
    return data
  }

  // Questionnaires
  async listQuestionnaires(params?: { type?: string; active_only?: boolean }) {
    const { data } = await this.client.get('/questionnaires', { params })
    return data
  }

  async getQuestionnaire(id: number) {
    const { data } = await this.client.get(`/questionnaires/${id}`)
    return data
  }

  async listMyResponses(questionnaireId: number) {
    const { data } = await this.client.get(`/questionnaires/${questionnaireId}/my-responses`)
    return data
  }

  async createResponse(payload: { questionnaire_id: number; question_id: number; is_draft?: boolean; time_spent_seconds?: number; answer_text?: string | null; answer_value?: string | null; answer_number?: number | null; answer_json?: any; }) {
    const { data } = await this.client.post('/questionnaires/responses', payload)
    return data
  }

  // NLP
  async embedResponses(payload: { questionnaire_id?: number; only_missing?: boolean; limit?: number }) {
    const { data } = await this.client.post('/nlp/embed/responses', payload)
    return data
  }

  async runClustering(payload: { questionnaire_id?: number; algo?: 'kmeans'; k?: number }) {
    const { data } = await this.client.post('/nlp/cluster/run', payload)
    return data
  }

  async listClusters(params?: { questionnaire_id?: number; include_members?: boolean }) {
    const { data } = await this.client.get('/nlp/cluster', { params })
    return data
  }

  // Suggestions
  async generateSuggestions(payload: { audience: 'teachers'|'staff'|'students'|'mixed'; questionnaire_id?: number; cluster_ids?: number[]; count?: number; question?: string }) {
    const { data } = await this.client.post('/suggestions/generate', payload)
    return data
  }

  async listSuggestions(params?: { status_filter?: 'draft'|'approved'|'published'; questionnaire_id?: number }) {
    const { data } = await this.client.get('/suggestions', { params })
    return data
  }

  async updateSuggestionStatus(id: number, action: 'approve'|'publish'|'revert') {
    const { data } = await this.client.patch(`/suggestions/${id}`, { action })
    return data
  }

  async deleteSuggestion(id: number) {
    const { data } = await this.client.delete(`/suggestions/${id}`)
    return data
  }

  // Reports (gestão)
  async listReports(params?: { rtype?: string; status_filter?: string; start?: string; end?: string }) {
    const { data } = await this.client.get('/reports', { params })
    return data
  }

  // Attendance stats
  async getAttendanceStats(params?: { start?: string; end?: string }) {
    const { data } = await this.client.get('/events/stats/attendance', { params })
    return data
  }

  // Reports
  async createReport(payload: any) {
    const { data } = await this.client.post('/reports', payload)
    return data
  }

  async createAnonymousReport(payload: any, opts?: { schoolSlug?: string; schoolId?: number | string }) {
    // Use a fresh axios call to avoid request interceptors (no Authorization header)
    const headers: Record<string, string> = { 'Content-Type': 'application/json' }
    if (opts?.schoolSlug) headers['X-School-Slug'] = String(opts.schoolSlug)
    if (opts?.schoolId) headers['X-School-Id'] = String(opts.schoolId)
    const { data } = await axios.post(`${API_URL}/api/v1/reports/anonymous`, payload, {
      headers,
      withCredentials: false,
    })
    return data
  }

  async listMyReports() {
    const { data } = await this.client.get('/reports/my')
    return data
  }

  // Moderation
  async listPendingModeration() {
    const { data } = await this.client.get('/moderation/pending')
    return data
  }

  async approvePost(postId: number) {
    const { data } = await this.client.patch(`/moderation/posts/${postId}/approve`)
    return data
  }

  async rejectPost(postId: number, reason?: string) {
    const { data } = await this.client.patch(`/moderation/posts/${postId}/reject`, undefined, { params: reason ? { reason } : undefined })
    return data
  }

  // Messages
  async listThreads() {
    const { data } = await this.client.get('/messages/threads')
    return data
  }

  async createThread(payload: { subject: string; participant_ids?: number[] }) {
    const { data } = await this.client.post('/messages/threads', payload)
    return data
  }

  async getThread(threadId: number) {
    const { data } = await this.client.get(`/messages/threads/${threadId}`)
    return data
  }

  async postMessage(threadId: number, payload: { body: string; attachments?: any[] }) {
    const { data } = await this.client.post(`/messages/threads/${threadId}/messages`, payload)
    return data
  }

  // Report detail / timeline (gestão)
  async getReportById(reportId: number) {
    const { data } = await this.client.get(`/reports/id/${reportId}`)
    return data
  }

  async listReportEvents(reportId: number) {
    const { data } = await this.client.get(`/reports/id/${reportId}/events`)
    return data
  }

  async createReportEvent(reportId: number, payload: { event_type: string; description: string; is_visible_to_reporter?: boolean; extra_metadata?: any }) {
    const { data } = await this.client.post(`/reports/id/${reportId}/events`, payload)
    return data
  }

  async updateReportStatus(reportId: number, payload: { status: 'submitted'|'under_review'|'investigating'|'resolved'|'closed'; resolution?: string; actions_taken?: string; follow_up_required?: boolean; follow_up_date?: string }) {
    const { data } = await this.client.patch(`/reports/id/${reportId}`, payload)
    return data
  }

  // Generic HTTP methods
  async get<T = any>(url: string, config?: any): Promise<T> {
    const { data } = await this.client.get<T>(url, config)
    return data
  }

  async post<T = any>(url: string, body?: any, config?: any): Promise<T> {
    const { data } = await this.client.post<T>(url, body, config)
    return data
  }

  async put<T = any>(url: string, body?: any, config?: any): Promise<T> {
    const { data } = await this.client.put<T>(url, body, config)
    return data
  }

  async patch<T = any>(url: string, body?: any, config?: any): Promise<T> {
    const { data } = await this.client.patch<T>(url, body, config)
    return data
  }

  async delete<T = any>(url: string, config?: any): Promise<T> {
    const { data } = await this.client.delete<T>(url, config)
    return data
  }

  // Seed demo data for current user's school (manager/staff only)
  async seedDemo() {
    const { data } = await this.client.post('/seed/demo', {})
    return data
  }
}

export const apiClient = new ApiClient()
