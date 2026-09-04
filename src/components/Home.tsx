import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  Button,
  Stack,
  Link,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import {
  FaWhatsapp,
  FaPhone,
  FaCheckCircle,
  FaHeadset,
} from 'react-icons/fa';
import HomeSection from '../Images/Home Section.jpg';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const STATS = [
  { value: '10,000+', label: 'Happy Families' },
  { value: '15,000+', label: 'Policies Issued' },
  { value: '100+',    label: 'Advisors' },
  { value: '24/7',    label: 'Support' },
];

const TRUST = ['Claim Settlement Support', 'Policy Renewal Reminders', 'Zero Hidden Charges'];

interface HomeProps {
  id?: string;
}

const Home: React.FC<HomeProps> = ({ id }) => {
  return (
    <>
      {/* ── HERO ── */}
      <Box
        id={id}
        as="section"
        position="relative"
        minH={{ base: '100vh', md: '95vh' }}
        display="flex"
        flexDirection="column"
        overflow="hidden"
      >
        {/* Background image */}
        <Box
          position="absolute"
          inset={0}
          bgImage={`url(${HomeSection})`}
          bgSize="cover"
          bgPosition="center top"
          bgRepeat="no-repeat"
        />
        {/* Dark gradient overlay — stronger on left for text legibility */}
        <Box
          position="absolute"
          inset={0}
          background="linear-gradient(105deg, rgba(16,18,109,0.94) 0%, rgba(16,18,109,0.80) 50%, rgba(16,18,109,0.40) 100%)"
        />

        {/* Hero content */}
        <Container
          maxW="7xl"
          position="relative"
          zIndex={1}
          flex={1}
          display="flex"
          alignItems="center"
          py={{ base: 28, md: 36 }}
        >
          <Box maxW={{ base: 'full', md: '640px' }}>


            <Heading
              as="h1"
              fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
              fontWeight="900"
              color="white"
              lineHeight="1.1"
              mb={6}
              animation={`${fadeInUp} 0.7s 0.1s ease both`}
            >
              Protect What{' '}
              <Box as="span" color="accent.400">
                Matters Most
              </Box>{' '}
              to You
            </Heading>

            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="whiteAlpha.900"
              mb={10}
              lineHeight="1.8"
              maxW="520px"
              animation={`${fadeInUp} 0.7s 0.2s ease both`}
            >
              Expert insurance guidance for Life, Health, Vehicle & more.
              Trusted by 10,000+ families across India for over 20 years.
            </Text>

            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={4}
              flexWrap="wrap"
              mb={10}
              animation={`${fadeInUp} 0.7s 0.3s ease both`}
            >
              <Button
                as={Link}
                href="#book-a-call"
                size="lg"
                bg="accent.500"
                color="brand.900"
                px={8}
                rounded="full"
                fontWeight="bold"
                leftIcon={<Icon as={FaHeadset} />}
                _hover={{ bg: 'accent.400', transform: 'translateY(-3px)', boxShadow: '0 10px 30px rgba(246,196,69,0.45)', textDecoration: 'none' }}
                transition="all 0.3s"
              >
                Get a Free Quote
              </Button>
              <Button
                as={Link}
                href="tel:+919360533056"
                size="lg"
                bg="whiteAlpha.100"
                color="white"
                borderWidth={1}
                borderColor="whiteAlpha.500"
                px={8}
                rounded="full"
                fontWeight="bold"
                leftIcon={<Icon as={FaPhone} />}
                backdropFilter="blur(4px)"
                _hover={{ bg: 'whiteAlpha.200', transform: 'translateY(-3px)', textDecoration: 'none' }}
                transition="all 0.3s"
              >
                Book a Call
              </Button>
              <Button
                as={Link}
                href="https://wa.me/919360533056?text=Hello,%20I'm%20interested%20in%20LIC%20services"
                isExternal
                size="lg"
                bg="green.500"
                color="white"
                px={8}
                rounded="full"
                fontWeight="bold"
                leftIcon={<Icon as={FaWhatsapp} />}
                _hover={{ bg: 'green.400', transform: 'translateY(-3px)', boxShadow: 'lg', textDecoration: 'none' }}
                transition="all 0.3s"
              >
                WhatsApp Us
              </Button>
            </Stack>

            {/* Trust checkmarks */}
            <HStack spacing={5} flexWrap="wrap" animation={`${fadeInUp} 0.7s 0.4s ease both`}>
              {TRUST.map((item) => (
                <HStack key={item} spacing={2} color="whiteAlpha.800">
                  <Icon as={FaCheckCircle} color="accent.400" w={4} h={4} />
                  <Text fontSize="sm">{item}</Text>
                </HStack>
              ))}
            </HStack>
          </Box>
        </Container>

        {/* Stats bar pinned to bottom of hero */}
        <Box
          position="relative"
          zIndex={1}
          bg="rgba(0,0,0,0.55)"
          backdropFilter="blur(14px)"
          borderTop="1px solid"
          borderColor="whiteAlpha.100"
        >
          <Container maxW="7xl" py={{ base: 4, md: 5 }}>
            <SimpleGrid columns={{ base: 2, md: 4 }}>
              {STATS.map((stat, i) => (
                <VStack
                  key={stat.label}
                  spacing={0}
                  py={3}
                  px={4}
                  borderRight={i < STATS.length - 1 ? '1px solid' : 'none'}
                  borderColor="whiteAlpha.200"
                >
                  <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="900" color="accent.400" lineHeight="1">
                    {stat.value}
                  </Text>
                  <Text fontSize="2xs" color="whiteAlpha.700" fontWeight="semibold" letterSpacing="widest" textTransform="uppercase" mt={1}>
                    {stat.label}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Home;