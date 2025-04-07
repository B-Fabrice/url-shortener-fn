import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Url Shortener - Sign Up',
  description: 'A simple url shortener app'
}

export default function LoginLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children
}
