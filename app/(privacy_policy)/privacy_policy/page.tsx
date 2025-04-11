'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Stack,
  UnorderedList,
  ListItem,
  OrderedList,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { FallInPlace } from '#components/motion/fall-in-place'

const PrivacyPolicy: NextPage = () => {
  return (
    <Box position="relative">
      <BackgroundGradient height="100%" zIndex="-3" />
      <Container maxW="container.lg" py={{ base: 20, lg: 32 }}>
        <Stack spacing={12}>
          <FallInPlace>
            <Heading fontSize={['3xl', null, '5xl']} lineHeight="short" textAlign="center">
              Privacy Policy
            </Heading>
          </FallInPlace>

          <VStack spacing={10} align="start">
            <Text color="muted">
              This Privacy Policy explains how Networth Technologies Pvt. Ltd. (hereinafter, "we", "us", or "Networth") collects, uses, discloses, and secures information from or about you (hereinafter, "you" and "your" or "End User"). You can learn more about Networth’s Offering on our Website.
            </Text>

            <Text color="muted">
              By accepting this Privacy Policy, or by accessing and/or using Networth’s Offering, you agree to be bound by this Privacy Policy. If you do not agree to (or cannot comply with) all of the terms set out under this Privacy Policy, you may not access or use Networth’s Offering. If you represent another Person, you hereby warrant that you have the authority, intention, and capacity to accept this Privacy Policy on behalf of such Person.
            </Text>

            <Text color="muted">
              You authorize Networth and the applicable Client to act on your behalf to obtain, store, transmit, process, use, and disclose the information collected from or about you in accordance with this Privacy Policy.
            </Text>

            <Text color="muted">Please read this Privacy Policy carefully:</Text>

            <Box>
              <Heading fontSize="xl" mb={2}>1. End User Agreement</Heading>
              <Text color="muted">
                This Privacy Policy forms a part of the end user agreement available at (https://networth.com/terms.pdf) and must be read with the End User Agreement. Any capitalized terms that are not expressly defined in this Privacy Policy will have the meanings attributed to them in the End User Agreement.
              </Text>
            </Box>

            <Box>
              <Heading fontSize="xl" mb={2}>2. Certain Defined Terms</Heading>
              <OrderedList color="muted">
                <ListItem>"Privacy Policy" means this privacy policy.</ListItem>
                <ListItem>"Minor" means an individual who is less than the minimum age prescribed under law to provide consent or to enter into contracts, provided that in no event will such age be less than 16 years.</ListItem>
                <ListItem>"Person" means any individual, partnership, limited liability partnership, limited liability company, body corporate, corporation, association, society, trust, or other entity or organization, whether or not a juridical person.</ListItem>
              </OrderedList>
            </Box>

            <Box>
              <Heading fontSize="xl" mb={2}>3. What Information We Collect</Heading>
              <OrderedList color="muted" spacing={3}>
                <ListItem>
                  <Text fontWeight="bold">Information provided to us by you:</Text>
                  <UnorderedList pl={4} mt={2}>
                    <ListItem>Identifiers and login information such as your username, password, or security token.</ListItem>
                    <ListItem>Your name, phone number, email address, physical address, one-time password (OTP).</ListItem>
                    <ListItem>Other details as may be necessary to provide any part of Networth’s Offering.</ListItem>
                  </UnorderedList>
                </ListItem>

                <ListItem>
                  <Text fontWeight="bold">Communication data:</Text>
                  <Text>Includes username, email, date of birth, phone number when contacting customer support or interacting with our platforms.</Text>
                </ListItem>

                <ListItem>
                  <Text fontWeight="bold">Additional data:</Text>
                  <Text>We collect other data you provide us if you grant specific permissions.</Text>
                </ListItem>

                <ListItem>
                  <Text fontWeight="bold">Acquired data:</Text>
                  <UnorderedList pl={4} mt={2}>
                    <ListItem>Identity details: full name, gender, contact information, profile details, and IDs.</ListItem>
                    <ListItem>Network info: connections/followers, demographic and analytical data.</ListItem>
                    <ListItem>Device data: IP address, browser/device info, time zone, and location.</ListItem>
                    <ListItem>Client-provided data: name, phone number, address, email, zip code.</ListItem>
                    <ListItem>Reputation metrics: follower counts, engagement stats, content metadata, feedback.</ListItem>
                    <ListItem>Location history, as tracked by platforms.</ListItem>
                  </UnorderedList>
                </ListItem>
              </OrderedList>
            </Box>

            <Box>
              <Heading fontSize="xl" mb={2}>4. Cookies and Tracking Technologies</Heading>
              <Text color="muted">
                We also use cookies and similar tracking technologies to collect information. For more details about our use of cookies, please refer to our Cookie Policy.
              </Text>
            </Box>
          </VStack>
        </Stack>
      </Container>
    </Box>
  )
}

export default PrivacyPolicy