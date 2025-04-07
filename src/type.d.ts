declare global {
  interface AppLink {
    href: string
    label: string
  }

  interface UserAuth {
    user?: {
      username: string
      email: string
      created_at: string
    },
    tokens?: {
      refresh: string
      access: string
    }
  }

  interface User {
    username?: string
    email?: string
    password?: string
  }

  interface ShortenLink {
    id: number
    original_url: string
    key: string
    created_at: string
    short_url: string
  }
}


export { }