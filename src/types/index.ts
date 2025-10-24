export interface User {
  id: number
  email: string
  full_name: string
  school_id: number
  roles: string[]
}

export interface LoginResponse {
  access_token: string
  refresh_token: string
  token_type: string
  expires_in: number
  user: User
}

export interface School {
  id: number
  slug: string
  name: string
  email_domain: string
}
