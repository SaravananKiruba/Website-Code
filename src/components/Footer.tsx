import React from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  Icon,
  useColorModeValue,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

const ListHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text fontWeight={'bold'} fontSize={'lg'} mb={2} color="white">
      {children}
    </Text>
  );
};

const Footer: React.FC = () => {
  const phoneNumbers = [
    { number: '9843430099', display: '98434 30099' },
    { number: '8248633617', display: '82486 33617' },
  ];

  return (
    <Box
      as="footer"
      bg="brand.900"
      color="white"
    >
      <Container as={Stack} maxW={'7xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Heading as="h2" size="lg">Your Policy Saathi</Heading>
            </Box>
            <Text fontSize={'sm'}>
              Your trusted advisor for all insurance needs since 2010. 
              Providing expert guidance and personalized insurance solutions.
            </Text>
            <Stack direction={'row'} spacing={6}>
              <Link href="https://www.instagram.com/your_policy_saathi" isExternal>
                <Icon as={FaInstagram} w={6} h={6} _hover={{ color: 'brand.500' }} />
              </Link>
            </Stack>
          </Stack>
          
          <Stack align={'flex-start'}>
            <ListHeader>Quick Links</ListHeader>
            <Link href="#home">Home</Link>
            <Link href="#about">About Us</Link>
            <Link href="#services">Services</Link>
            <Link href="#faq">FAQ</Link>
            <Link href="#contact">Contact</Link>
          </Stack>
          
          <Stack align={'flex-start'}>
            <ListHeader>Insurance Products</ListHeader>
            <Link href="#services">Life Insurance</Link>
            <Link href="#services">Health Insurance</Link>
            <Link href="#services">Car Insurance</Link>
            <Link href="#services">Bike Insurance</Link>
            <Link href="#services">Travel Insurance</Link>
            <Link href="#services">Building Insurance</Link>
          </Stack>
          
          <Stack align={'flex-start'}>
            <ListHeader>Contact Us</ListHeader>
            {phoneNumbers.map((phone, index) => (
              <Link key={index} href={`tel:${phone.number}`} display="flex" alignItems="center">
                <Icon as={FaPhone} mr={2} />
                <Text>{phone.display}</Text>
              </Link>
            ))}
            <Link href="mailto:agent@licinsurance.com" display="flex" alignItems="center">
              <Icon as={FaEnvelope} mr={2} />
              <Text>alwaysjigarlic@gmail.com</Text>
            </Link>
            <Flex align={'center'}>
              <Icon as={FaMapMarkerAlt} mr={2} />
              <Text>123 Insurance Building, Main Street</Text>
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>
      
      <Box borderTopWidth={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.600', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'7xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© {new Date().getFullYear()} Your Policy Saathi. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Use</Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;