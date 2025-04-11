import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication - WYLD',
  description: 'Login or sign up for WYLD - The World\'s 1st Social Currency Card',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}