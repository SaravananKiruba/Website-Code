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
  Flex,
  Link,
} from '@chakra-ui/react';
import {
  FaStar,
  FaInstagram,
  FaPlay,
  FaGoogle,
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
      {/* Large Instagram logo as thumbnail placeholder */}
      <Icon
        as={FaInstagram}
        color="white"
        w={featured ? 14 : 9}
        h={featured ? 14 : 9}
        opacity={0.9}
        mb={featured ? 3 : 1.5}
      />

      {/* Play button badge bottom-right */}
      <Box position="absolute" bottom={3} right={3}>
        <Flex
          w={featured ? 10 : 7}
          h={featured ? 10 : 7}
          bg="whiteAlpha.300"
          rounded="full"
          align="center"
          justify="center"
          backdropFilter="blur(4px)"
          border="2px solid"
          borderColor="whiteAlpha.400"
        >
          <Icon as={FaPlay} color="white" w={featured ? 4 : 2.5} h={featured ? 4 : 2.5} ml={1} />
        </Flex>
      </Box>

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
      <Box 
        py={28}
        bgGradient="linear(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
      >
        <Container maxW="7xl">
          <VStack spacing={3} mb={12} textAlign="center">
            <Heading 
              fontSize={{ base: '2.5xl', sm: '4xl' }} 
              fontWeight="900" 
              color="white"
            >
              See Us in Action
            </Heading>
            <Text color="whiteAlpha.800" fontSize={{ base: 'md', md: 'lg' }} maxW="xl" fontWeight="500">
              Real stories from real clients — watch how Your Policy Saathi is changing lives.
            </Text>
            <Link
              href="https://www.instagram.com/your__policy__saathi"
              isExternal
              display="inline-flex"
              alignItems="center"
              gap={2}
              color="accent.400"
              fontWeight="700"
              fontSize="sm"
              _hover={{ color: 'accent.300', textDecoration: 'none' }}
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

          {/* Live Google Business location embed */}
          <Box
            rounded="2xl"
            overflow="hidden"
            boxShadow="xl"
            border="1px solid"
            borderColor="gray.200"
            mb={10}
            maxW="860px"
            mx="auto"
          >
            <iframe
              title="Your Policy Saathi on Google Maps"
              src="https://maps.google.com/maps?q=Your+Policy+Saathi,+25+Pallikooda+Street,+Madurai+625001&output=embed&hl=en&z=16"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
          <VStack spacing={2} mb={10} textAlign="center">
            <StarRating rating={5} />
            <Text fontWeight="semibold" color="brand.900" fontSize="lg">Rated 5.0 on Google</Text>
            <Text color="gray.500" fontSize="sm">Tap the button below to read all real reviews</Text>
          </VStack>

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
