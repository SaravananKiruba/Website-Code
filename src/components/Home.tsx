import React, { useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  useColorModeValue,
  Button,
  Stack,
  Image,
  VStack,
  HStack,
  Link,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { FaShieldAlt, FaHeartbeat, FaHome, FaPhone, FaHeadset, FaUserClock, FaWhatsapp, FaInstagram } from 'react-icons/fa';

// Fix the image imports with the correct paths
import CompanyLogo from '../Images/Company_Logo.PNG';
import HomeSection from '../Images/Home Section.jpg';

interface HomeProps {
  id?: string;
}

const Home: React.FC<HomeProps> = ({ id }) => {
  // Modern color gradient backgrounds
  const gradientBg = 'linear-gradient(135deg, #10126d 0%, #4893ed 100%)';
  const cardBg = useColorModeValue('white', 'gray.700');
  const cardHoverBg = useColorModeValue('gray.50', 'gray.600');
  
  // Yellow theme animation
  const yellowPulse = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  `;

  const yellowAnimation = `${yellowPulse} 15s ease infinite`;

  return (
    <Box 
      id={id} 
      py={20} 
      position="relative"
      overflow="hidden"
      bg="gray.50"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgGradient: 'linear(to-r, accent.100, accent.200, accent.300, accent.200, accent.100)',
        backgroundSize: '200% 200%',
        opacity: 0.3,
        animation: yellowAnimation,
        zIndex: 0,
      }}
    >
      {/* Main Content */}
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Flex 
          direction={{ base: 'column', md: 'row' }} 
          align="center" 
          justify="space-between"
          mb={16}
          gap={8}
        >
          <Box flex={1}>
            <Heading 
              as="h1" 
              size="2xl" 
              mb={6} 
              bgGradient="linear(to-r, brand.900, brand.700)"
              bgClip="text"
            >
              Let's Secure Your Future with us.
            </Heading>
            <Text fontSize="xl" mb={8} color="gray.700">
              We provide comprehensive insurance solutions to protect what matters most to you. From life to health, we've got you covered.
            </Text>            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
              <Button 
                as={Link}
                href="https://wa.me/918248633617?text=Hello,%20I'm%20interested%20in%20LIC%20services"
                isExternal
                size="lg" 
                variant="primary" 
                px={8}
                rounded="full"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                transition="all 0.3s"
                leftIcon={<FaWhatsapp />}
              >
                WhatsApp Us
              </Button>
              <Button 
                as={Link}
                href="https://www.instagram.com/your_policy_saathi"
                isExternal
                size="lg" 
                variant="outline" 
                color="brand.900" 
                borderColor="brand.900"
                px={8}
                rounded="full"
                _hover={{ bg: 'brand.50', transform: 'translateY(-2px)' }}
                transition="all 0.3s"
                leftIcon={<FaInstagram />}
              >
                Chat on Insta
              </Button>
            </Stack>
          </Box>
          
          <Flex 
            flex={1} 
            justify="center" 
            align="center"
            position="relative"
          >
            <Box
              w="100%"
              h="350px"
              borderRadius="xl"
              boxShadow="xl"
              overflow="hidden"
              position="relative"
            >
              <Image
                src={HomeSection}
                alt="Insurance Services"
                objectFit="cover"
                w="100%"
                h="100%"
              />
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="rgba(0,0,0,0.4)"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                color="white"
                padding={6}
                textAlign="center"
              >
                <Image 
                  src={CompanyLogo} 
                  alt="Your Policy Saathi Logo" 
                  boxSize="125px" 
                  borderRadius="full"
                  bg="white"
                  p={2}
                  mb={4}
                />
                <Heading size="lg" mb={4}>Your Policy Saathi</Heading>
                <Text fontSize="lg">
                  Protecting your future with reliable insurance solutions
                </Text>
              </Box>
            </Box>
          </Flex>
        </Flex>

        {/* Company Highlights */}
        <Box mb={20} position="relative">
          <Heading 
            textAlign="center" 
            mb={12} 
            size="xl"
            bgGradient="linear(to-r, brand.900, brand.700)"
            bgClip="text"
          >
            Why Choose Us
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            { [
              { 
                icon: FaShieldAlt, 
                title: 'Comprehensive Coverage', 
                description: 'Protection for all aspects of your life and assets' 
              },
              { 
                icon: FaHeartbeat, 
                title: 'Health First', 
                description: 'Prioritizing your health with top-tier insurance plans' 
              },
              { 
                icon: FaHome, 
                title: 'Home Security', 
                description: 'Safeguard your property with our specialized policies' 
              },              { 
                icon: FaHeadset, 
                title: '24/7 Support', 
                description: 'Always available to assist with your insurance needs' 
              }
            ].map((feature, index) => (
              <Box 
                key={index}
                bg={cardBg}
                p={6}
                borderRadius="lg"
                boxShadow="md"
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: 'xl',
                  bg: cardHoverBg
                }}
                position="relative"
                overflow="hidden"
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: '3px',
                  width: '100%',
                  bgGradient: 'linear(to-r, accent.400, accent.600)',
                }}
              >
                <Flex
                  w={12}
                  h={12}
                  align="center"
                  justify="center"
                  borderRadius="full"
                  bg="brand.900"
                  color="white"
                  mb={4}
                >
                  <Icon as={feature.icon} w={6} h={6} />
                </Flex>
                <Heading size="md" mb={3}>{feature.title}</Heading>
                <Text color="gray.600">{feature.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Partner Logos Preview */}
       
      </Container>
    </Box>
  );
};

export default Home;