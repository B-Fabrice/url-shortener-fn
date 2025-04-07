import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Url Shortener - Login',
  description: 'A simple url shortener app'
}

export default function LoginLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children
}
