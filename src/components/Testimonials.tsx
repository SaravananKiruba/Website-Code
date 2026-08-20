import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Button,
  Avatar,
  Flex,
  Link,
  Divider,
} from '@chakra-ui/react';
import {
  FaStar,
  FaInstagram,
  FaPlay,
  FaGoogle,
  FaQuoteLeft,
  FaExternalLinkAlt,
} from 'react-icons/fa';

const GOOGLE_REVIEW_URL = 'https://share.google/5PNOp4XmZDYlAkR1t';

interface Reel {
  url: string;
  label: string;
  sublabel?: string;
}

const SHOWCASE_REEL: Reel = {
  url: 'https://www.instagram.com/reel/Dbn0VAJTX3N/?igsh=enc5anVid3lsOWhm',
  label: 'Your Policy Saathi',
  sublabel: 'Watch Our Story',
};

const TESTIMONIAL_REELS: Reel[] = [
  {
    url: 'https://www.instagram.com/reel/Db-G-J_Tur8/?igsh=bHJ4ejJuazNudzlv',
    label: 'Client Story',
    sublabel: 'Watch Testimonial',
  },
  {
    url: 'https://www.instagram.com/reel/DbcRvnvzd2a/?igsh=dDNia2h6bDJ1Y2I=',
    label: 'Happy Customer',
    sublabel: 'Watch Testimonial',
  },
  {
    url: 'https://www.instagram.com/reel/Da7Ov6mTJC3/?igsh=NjlxdmRrdHBmYjgw',
    label: 'Success Story',
    sublabel: 'Watch Testimonial',
  },
];

interface Review {
  name: string;
  initials: string;
  rating: number;
  text: string;
  source?: string;
}

// Replace these with real customer reviews
const REVIEWS: Review[] = [
  {
    name: 'Rajesh Kumar',
    initials: 'RK',
    rating: 5,
    text: 'Got my LIC policy sorted in just two days! The team explained every option clearly and helped me choose the perfect plan for my family. Outstanding service.',
    source: 'Google',
  },
  {
    name: 'Priya Meenakshi',
    initials: 'PM',
    rating: 5,
    text: 'Excellent guidance on health insurance. They compared multiple plans and found one that perfectly fit my budget. Always available to answer questions.',
    source: 'Google',
  },
  {
    name: 'Karthik Selvam',
    initials: 'KS',
    rating: 5,
    text: 'Very professional service. They renewed my vehicle insurance without any hassle and even sent a reminder before the expiry date. Highly recommend!',
    source: 'Google',
  },
  {
    name: 'Deepa Nair',
    initials: 'DN',
    rating: 5,
    text: 'Your Policy Saathi helped my family get the right term insurance. The process was smooth and the team was always patient and helpful throughout.',
    source: 'Google',
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <HStack spacing={0.5}>
    {[...Array(5)].map((_, i) => (
      <Icon key={i} as={FaStar} color={i < rating ? '#f6c445' : 'gray.200'} w={3.5} h={3.5} />
    ))}
  </HStack>
);

interface ReelCardProps {
  reel: Reel;
  featured?: boolean;
}

const ReelCard: React.FC<ReelCardProps> = ({ reel, featured }) => (
  <Link href={reel.url} isExternal _hover={{ textDecoration: 'none' }} display="block" h="full">
    <Flex
      position="relative"
      overflow="hidden"
      rounded={featured ? '2xl' : 'xl'}
      cursor="pointer"
      h={featured ? { base: '240px', lg: '380px' } : { base: '160px', lg: '114px' }}
      background="linear-gradient(135deg, #833AB4 0%, #C13584 35%, #FD1D1D 65%, #F77737 100%)"
      flexDirection="column"
      align="center"
      justify="center"
      transition="all 0.3s"
      _hover={{ transform: 'scale(1.02)', filter: 'brightness(1.05)' }}
      border="2px solid"
      borderColor="whiteAlpha.200"
      userSelect="none"
    >
      {/* Instagram icon top-right */}
      <Box position="absolute" top={3} right={3}>
        <Icon as={FaInstagram} color="white" w={featured ? 6 : 5} h={featured ? 6 : 5} />
      </Box>

      {/* Play button */}
      <Flex
        w={featured ? 16 : 10}
        h={featured ? 16 : 10}
        bg="whiteAlpha.300"
        rounded="full"
        align="center"
        justify="center"
        backdropFilter="blur(4px)"
        mb={featured ? 4 : 2}
        flexShrink={0}
      >
        <Icon as={FaPlay} color="white" w={featured ? 6 : 3} h={featured ? 6 : 3} ml={1} />
      </Flex>

      <Text
        color="white"
        fontWeight="bold"
        fontSize={featured ? 'lg' : 'xs'}
        textAlign="center"
        px={3}
        lineHeight="1.2"
      >
        {reel.label}
      </Text>
      {featured && (
        <Text color="whiteAlpha.800" fontSize="sm" mt={1}>
          {reel.sublabel}
        </Text>
      )}
    </Flex>
  </Link>
);

interface TestimonialsProps {
  id: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ id }) => {
  return (
    <Box id={id} as="section">

      {/* ── Instagram Showcase ── */}
      <Box py={20} bg="gray.900">
        <Container maxW="7xl">
          <VStack spacing={3} mb={12} textAlign="center">
            <Heading fontSize={{ base: '3xl', sm: '4xl' }} fontWeight="bold" color="white">
              See Us in Action
            </Heading>
            <Text color="whiteAlpha.700" fontSize="lg" maxW="xl">
              Real stories from real clients — watch how Your Policy Saathi is changing lives.
            </Text>
            <Link
              href="https://www.instagram.com/your__policy__saathi"
              isExternal
              display="inline-flex"
              alignItems="center"
              gap={2}
              color="pink.300"
              fontWeight="semibold"
              fontSize="sm"
              _hover={{ color: 'pink.200', textDecoration: 'none' }}
            >
              <Icon as={FaInstagram} />
              @your__policy__saathi
              <Icon as={FaExternalLinkAlt} w={3} h={3} />
            </Link>
          </VStack>

          {/* Featured reel (left/top) + 3 testimonial reels (right/below) */}
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            gap={4}
            maxW="960px"
            mx="auto"
            align="stretch"
          >
            {/* Featured showcase */}
            <Box flexBasis={{ lg: '360px' }} flexShrink={0}>
              <ReelCard reel={SHOWCASE_REEL} featured />
            </Box>

            {/* 3 testimonial reels — stacked on desktop, 3-col on mobile/tablet */}
            <SimpleGrid
              flex={1}
              columns={{ base: 3, lg: 1 }}
              spacing={4}
              alignContent="stretch"
            >
              {TESTIMONIAL_REELS.map((reel) => (
                <ReelCard key={reel.url} reel={reel} />
              ))}
            </SimpleGrid>
          </Flex>
        </Container>
      </Box>

      {/* ── Customer Reviews ── */}
      <Box py={24} bg="gray.50">
        <Container maxW="7xl">
          <VStack spacing={4} mb={16} textAlign="center">
            <Heading fontSize={{ base: '3xl', sm: '4xl' }} fontWeight="bold" color="brand.900">
              What Our Customers Say
            </Heading>
            <Text color="gray.600" fontSize="xl" maxW="2xl">
              Trusted by families and individuals across Tamil Nadu for their insurance needs.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={14}>
            {REVIEWS.map((review) => (
              <Flex
                key={review.name}
                direction="column"
                bg="white"
                rounded="xl"
                p={6}
                boxShadow="lg"
                border="1px solid"
                borderColor="gray.100"
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
              >
                <Icon as={FaQuoteLeft} color="accent.400" w={6} h={6} mb={3} opacity={0.6} />

                <Text color="gray.600" fontSize="sm" flex={1} lineHeight="1.8" mb={5}>
                  "{review.text}"
                </Text>

                <Divider mb={4} />

                <HStack spacing={3}>
                  <Avatar name={review.name} size="sm" bg="brand.700" color="white" />
                  <Box>
                    <Text fontWeight="bold" color="brand.900" fontSize="sm" lineHeight="1.3">
                      {review.name}
                    </Text>
                    <StarRating rating={review.rating} />
                  </Box>
                </HStack>
              </Flex>
            ))}
          </SimpleGrid>

          {/* Google Review CTA */}
          <VStack spacing={5} textAlign="center">
            <Text color="gray.500" fontSize="sm" fontStyle="italic">
              Happy with our service? Let others know!
            </Text>
            <HStack spacing={4} flexWrap="wrap" justify="center">
              <Button
                as={Link}
                href={GOOGLE_REVIEW_URL}
                isExternal
                size="lg"
                bg="#4285F4"
                color="white"
                leftIcon={<Icon as={FaGoogle} />}
                _hover={{
                  bg: '#3367D6',
                  textDecoration: 'none',
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
                fontWeight="bold"
                transition="all 0.2s"
              >
                View Google Reviews
              </Button>
              <Button
                as={Link}
                href={GOOGLE_REVIEW_URL}
                isExternal
                size="lg"
                bg="accent.500"
                color="brand.900"
                leftIcon={<Icon as={FaStar} />}
                _hover={{
                  bg: 'accent.600',
                  textDecoration: 'none',
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
                fontWeight="bold"
                transition="all 0.2s"
              >
                Share Your Experience
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Testimonials;
