import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NetWorth - Earn up to 100% cashback on your purchases',
  keywords: 'NetWorth, cashback, rewards, shopping, influencer marketing',
  openGraph: {
    title: 'NetWorth - Social Banking Platform',
    description: 'Encash your influence with NetWorth - Earn up to 100% cashback on your purchases.',
    type: 'website'
  }
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
