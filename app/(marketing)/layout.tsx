import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WYLD - The Worlds 1st Social Currency Card',
  description: 'Encash your influence with WYLD - Earn up to 100% cashback on your purchases.',
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
