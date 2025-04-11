'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiCheck,
  FiCopy,
  FiCreditCard,
  FiTrendingUp,
  FiPercent,
  FiUser,
} from 'react-icons/fi'
import * as React from 'react'
import { ButtonLink } from '#components/button-link/button-link'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import testimonials from '#data/testimonials'
import { Header } from '#components/layout/header' // Make sure this import exists

/**
 * Custom hook to track global scroll progress (from 0 to 1)
 */
const useScrollProgress = () => {
  const [progress, setProgress] = React.useState(0)
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const newProgress = docHeight > 0 ? scrollTop / docHeight : 0
      setProgress(newProgress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return progress
}

/**
 * Vertical lines that grow from bottom to top together as you scroll.
 */
const BackgroundVerticalLines: React.FC = () => {
  const scrollProgress = useScrollProgress()

  // Clamp scrollProgress between 0 and 1
  const clampedProgress = Math.max(0, Math.min(scrollProgress, 1))
  const scaleY = clampedProgress

  const numLines = 3
  const spacingPercent = 15 // increased spacing
  const startPos = 50 - ((numLines - 1) * spacingPercent) / 2

  const lines = Array.from({ length: numLines }, (_, index) => {
    const leftPos = startPos + index * spacingPercent
    return (
      <Box
        key={index}
        position="absolute"
        top="0"
        left={`${leftPos}%`}
        width="2px"
        bg="gray.200"
        opacity={0.1}
        height="100vh"
        transform={`scaleY(${scaleY})`}
        transformOrigin="top"
        transition="transform 0.3s ease-in-out"
        backdropFilter="blur(8px)"
      />
    )
  })

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100%"
      pointerEvents="none"
      zIndex="-999" // Much lower z-index to ensure it stays behind
      sx={{
        isolation: 'isolate', // Creates a new stacking context
      }}
    >
      {lines}
    </Box>
  )
}

/**
 * Calculates a hero text animation value based on global scroll progress.
 *
 * The effect:
 * - Fade in from 0 to 0.2 progress.
 * - Fully visible between 0.2 and 0.4.
 * - Fade out gradually after 0.4.
 */
const useHeroAnimation = () => {
  const scrollProgress = useScrollProgress()
  let alpha = 0
  if (scrollProgress < 0) {
    // Fade in
    alpha = scrollProgress / 0.1
  } else if (scrollProgress < 0.4) {
    // Fully visible
    alpha = 1
  } else {
    // Fade out: from progress 0.4 to 1
    alpha = 1 - (scrollProgress - 0.4) / 0.6
  }
  // Clamp value between 0 and 1
  alpha = Math.max(0, Math.min(alpha, 1))
  // Optionally, adjust scale along with opacity:
  const scale = 0.8 + alpha * 0.2
  return { alpha, scale }
}

const Home: NextPage = () => {
  return (
    <>
      <Header /> {/* Add this if not present */}
      <Box position="relative">
        {/* Background gradient and vertical animated lines */}
        <BackgroundGradient height="100%" zIndex="-3" />
        <BackgroundVerticalLines />

        <HeroSection />
        <HighlightsSection />
        <FeaturesSection />
        <TestimonialsSection />
      </Box>
    </>
  )
}

const HeroSection: React.FC = () => {
  const { alpha, scale } = useHeroAnimation()

  return (
    <Box position="relative" overflow="hidden">
      <Container maxW="container.xl" pt={{ base: 32, lg: 48 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                <Heading
                  style={{
                    transform: `scale(${scale})`,
                    opacity: alpha,
                    transition: 'transform 0.3s, opacity 0.3s',
                  }}
                  lineHeight="short"
                  fontSize={['3xl', null, '5xl']}
                >
                  WYLD – The World’s 1st Social Currency Card
                </Heading>
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                <Text
                  style={{
                    transform: `scale(${scale})`,
                    opacity: alpha,
                    transition: 'transform 0.3s, opacity 0.3s',
                  }}
                  fontSize="xl"
                >
                  Fuelled by Likes & Shares,
                  <Br />
                  encash your influence and earn up to{' '}
                  <Em>100% cashback</Em> on your purchases.
                  <Br />
                  Live the WYLD life.
                  <Br />
                </Text>
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup mt={8} spacing={6} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/privacy_policy">
                  Privacy Policy
                </ButtonLink>
                {/* ...other buttons... */}
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="400px"
            position="absolute"
            top="90px"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box 
                overflow="hidden" 
                height="30%" 
                borderRadius="xl" 
                style={{
                  transform: `scale(${scale}) translateY(${(1 - alpha) * 100}px)`,
                  opacity: alpha,
                  transition: 'transform 0.3s, opacity 0.3s'
                }}
              >
                <Image
                  src="/static/images/influencer-main.jpg"
                  width={800}
                  height={200}
                  alt="WYLD Social Currency Card in action"
                  quality="75"
                  priority
                  style={{ borderRadius: 'inherit' }}
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

const HighlightsSection = () => {
  const { onCopy, hasCopied } = useClipboard('Join the WYLD waitlist now!')
  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="1000+ Followers?">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            All you need is 1000+ Instagram followers to <Em>#GETWYLD</Em>.
            Turn your social influence into real cashback rewards.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                Join the
              </Text>{' '}
              <Text color="cyan.300" display="inline">
                waitlist
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy join command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Encash Your Influence">
        <Text color="muted" fontSize="lg">
          Shop your favorite brands with the WYLD card – give them a shout on
          Instagram and earn instant cashback.
        </Text>
      </HighlightsItem>
      <HighlightsItem
        position="relative"
        overflow="hidden"
        p="8"
        color="white"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex="-1"
        >
          <Image
        src="/static/images/lines.jpg"
        alt="Testimonial background"
        fill
        style={{ objectFit: 'cover' }}
          />
        </Box>
        <VStack spacing="4" align="flex-start">
          <Text fontSize="xl" fontWeight="bold">
        "WYLD transformed my social presence into real savings. It's the ultimate win‑win for influencers!"
          </Text>
          <VStack align="flex-start" spacing="1">
        <Text fontWeight="bold">Alex Influencer</Text>
        <Text fontSize="sm">Social Media Maven</Text>
          </VStack>
        </VStack>
      </HighlightsItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Join the WYLD Revolution"
      >
        <Text color="muted" fontSize="lg">
          More followers means more cashback – that’s the WYLD promise. Start your
          journey with the world’s first social currency card.
        </Text>
        <Wrap mt="8">
          {[
            'Influencers',
            'Instagrammers',
            'Shoppers',
            'Trendsetters',
            'Digital Creators',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      p={8}
      borderWidth="1px"
      rounded="xl"
      my={8}
      bg="primary.900"
      _dark={{ bg: 'gray.900' }}
    >
      <Features
        id="features"
        title={
          <Heading
            lineHeight="short"
            fontSize={['2xl', null, '4xl']}
            textAlign="left"
            as="p"
          >
            Why settle for ordinary? <Br /> Go WYLD!
          </Heading>
        }
        description={
          <>
            Discover the power of turning social influence into real rewards.
            <Br />
            With the WYLD card, every like and share brings you closer to 100%
            cashback.
          </>
        }
        align="left"
        columns={[1, 2, 3]}
        iconSize={4}
        features={[
          {
            title: 'Social Currency Card',
            icon: FiCreditCard,
            description:
              'The worlds first card that turns your social influence into real cash rewards.',
            variant: 'inline',
          },
          {
            title: 'Earn Cashback',
            icon: FiPercent,
            description:
              'Get up to 100% cashback on your purchases at over 200 partner brands.',
            variant: 'inline',
          },
          {
            title: 'Instant Rewards',
            icon: FiTrendingUp,
            description:
              'Watch your rewards grow as you share and engage on social media.',
            variant: 'inline',
          },
          {
            title: 'Join the Waitlist',
            icon: FiUser,
            description:
              'Exclusively for influencers, Instagrammers, and shoppers. Secure your early invite today.',
            variant: 'inline',
          },
        ]}
      />
    </Box>
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)
        return columns
      },
      [[], [], []]
    )
  }, [])
  return (
    <Box
      position="relative"
      overflow="hidden"
      p={8}
      borderWidth="1px"
      rounded="xl"
      my={8}
      bg="primary.900"
      _dark={{ bg: 'gray.900' }}
    >
      <Testimonials
        title="What People Are Saying"
        columns={[1, 2, 3]}
        innerWidth="container.xl"
      >
        <>
          {columns.map((column, i) => (
            <Stack key={i} spacing="8">
              {column.map((t, j) => (
                <Box key={j} p="4" borderWidth="1px" rounded="md">
                  <Text fontSize="lg" fontWeight="bold">
                    {t.name || 'Influencer'}
                  </Text>
                  <Text mt="2">{t.description || 'WYLD is amazing!'}</Text>
                </Box>
              ))}
            </Stack>
          ))}
        </>
      </Testimonials>
    </Box>
  )
}

export default Home
