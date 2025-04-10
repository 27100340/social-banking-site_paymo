'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Stack,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { FallInPlace } from '#components/motion/fall-in-place'

const PrivacyPolicy: NextPage = () => {
  return (
    <Box position="relative">
      {/* Background styling */}
      <BackgroundGradient height="100%" zIndex="-3" />

      <Container maxW="container.lg" py={{ base: 20, lg: 32 }}>
        <Stack spacing={12}>
          <FallInPlace>
            <Heading
              fontSize={['3xl', null, '5xl']}
              lineHeight="short"
              textAlign="center"
            >
              Privacy Policy
            </Heading>
          </FallInPlace>

          <VStack spacing={10} align="start">
            <Box>
              <Heading fontSize="xl" mb={2}>
                Introduction
              </Heading>
              <Text color="muted">
                WYLD is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your data.
              </Text>
            </Box>

            <Box>
              <Heading fontSize="xl" mb={2}>
                Information We Collect
              </Heading>
              <Text color="muted">
                We may collect personal information such as your name, email address, and social media handles. We also collect analytics data to improve your experience.
              </Text>
            </Box>

            <Box>
              <Heading fontSize="xl" mb={2}>
                How We Use Your Information
              </Heading>
              <Text color="muted">
                Your information is used to provide and enhance our services, analyze trends, and send you relevant updates. We never sell your personal data.
              </Text>
            </Box>

            <Box>
              <Heading fontSize="xl" mb={2}>
                Data Security
              </Heading>
              <Text color="muted">
                We implement strong security measures to protect your data. All sensitive information is encrypted during transmission and storage.
              </Text>
            </Box>

            <Box>
              <Heading fontSize="xl" mb={2}>
                Your Rights
              </Heading>
              <Text color="muted">
                You can request access to your data, update it, or ask us to delete it at any time. Reach out to our support team to exercise your rights.
              </Text>
            </Box>

            <Box>
              <Heading fontSize="xl" mb={2}>
                Changes to this Policy
              </Heading>
              <Text color="muted">
                We may update this policy occasionally. We encourage you to review it regularly to stay informed about how we are protecting your data.
              </Text>
            </Box>

            <Box>
              <Heading fontSize="xl" mb={2}>
                Contact Us
              </Heading>
              <Text color="muted">
                If you have any questions about this policy, please contact us at privacy@wyldcard.com.
              </Text>
            </Box>
          </VStack>
        </Stack>
      </Container>
    </Box>
  )
}

export default PrivacyPolicy
// This code defines a Privacy Policy page using React and Chakra UI.
// It includes sections on Introduction, Information We Collect, How We Use Your Information, Data Security, Your Rights, Changes to this Policy, and Contact Us.
// Each section contains a heading and a description, styled with Chakra UI components.
// The page is wrapped in a Box component with a background gradient and uses a Stack for layout.
// The FallInPlace component is used for animation effects on the headings.
// The page is exported as a Next.js page component.
// The Privacy Policy is designed to inform users about how their data is handled and to ensure transparency in data practices.
// The page is responsive and adjusts its layout based on the screen size.
// The content is structured to provide clear and concise information, making it easy for users to understand their rights and the company's practices regarding data privacy.
// The use of Chakra UI allows for a consistent design language and accessibility features.