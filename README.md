# Frontend - Grupo Solar

Frontend da plataforma de educação inclusiva Grupo Solar, desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Início Rápido

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm start
```

## 📁 Estrutura

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Home page
│   ├── login/             # Página de login
│   ├── sobre/             # Página sobre
│   └── globals.css        # Estilos globais
│
├── components/
│   ├── providers/         # Context providers
│   │   ├── index.tsx     # All providers wrapper
│   │   ├── theme-provider.tsx
│   │   ├── query-provider.tsx
│   │   └── accessibility-provider.tsx
│   └── ui/               # Componentes UI base
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── label.tsx
│
└── lib/
    ├── utils.ts          # Helpers gerais
    └── api.ts            # Cliente HTTP
```

## 🎨 Design System

### Cores

Definidas em `src/app/globals.css`:
- **Primary**: Blue (#3B82F6)
- **Secondary**: Purple (#A855F7)
- **Success**: Green (#10B981)
- **Destructive**: Red (#EF4444)

### Componentes UI

Baseados em Radix UI + Tailwind CSS:
- Button (variants: default, outline, ghost, link)
- Card (Header, Content, Footer)
- Input (validação e acessibilidade)
- Label (ARIA compliant)

## ♿ Acessibilidade

Implementação WCAG 2.2 AA:

### Recursos Disponíveis
- **Skip Links** - Pular para conteúdo principal
- **Navegação por Teclado** - 100% acessível
- **Text-to-Speech** - Leitura de tela
- **Ajuste de Fonte** - 75% até 150%
- **Alto Contraste** - Modo de alto contraste
- **Fonte Alternativa** - OpenDyslexic para dislexia
- **Foco Visível** - Indicadores claros
- **Redução de Movimento** - Para sensibilidade

### Como Usar

```typescript
import { useAccessibility } from '@/components/providers/accessibility-provider'

function MyComponent() {
  const { 
    ttsEnabled, 
    fontSize, 
    highContrast,
    speak 
  } = useAccessibility()
  
  // Usar os recursos
  speak('Texto para ler')
}
```

## 🌐 API Client

Cliente HTTP configurado com interceptors:

```typescript
import { apiClient } from '@/lib/api'

// Login
const response = await apiClient.login(email, password)

// Requisições genéricas
const data = await apiClient.get('/endpoint')
await apiClient.post('/endpoint', { data })
```

## 🎭 Tema

Suporte a modo claro/escuro:

```typescript
import { useTheme } from 'next-themes'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>
  )
}
```

## 📱 Responsividade

Mobile-first design com breakpoints Tailwind:
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1400px

## 🧪 Testes

```bash
# Testes unitários
npm test

# Testes com watch
npm run test:watch

# Cobertura
npm run test:coverage

# Testes E2E
npm run test:e2e
```

## 📦 Build

```bash
# Build otimizado
npm run build

# Analisar bundle
npm run build -- --analyze
```

## 🔧 Configuração

### Variáveis de Ambiente

Crie `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### TypeScript

Configuração strict em `tsconfig.json`.

### ESLint

Regras de acessibilidade em `.eslintrc.json`.

## 📚 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [WCAG 2.2](https://www.w3.org/WAI/WCAG22/quickref/)

## 🐛 Debug

```bash
# Ver erros em tempo real
npm run dev

# TypeScript check
npm run type-check

# Lint
npm run lint
```

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Docker

```bash
docker build -t grupo-solar-frontend .
docker run -p 3000:3000 grupo-solar-frontend
```

## 📄 Licença

Copyright © 2024 Instituto ALANA & USP
