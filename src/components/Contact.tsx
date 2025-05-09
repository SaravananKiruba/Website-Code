import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  useColorModeValue,
  Icon,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const phoneNumbers = [
    { number: '9843430099', display: '98434 30099', name: 'S. Ashok Kumar' },
    { number: '8248633617', display: '82486 33617', name: 'A. Jigar' },
  ];

  return (
    <Box 
      id={id} 
      as="section" 
      py={16} 
      bgGradient="linear(to-br, white, #e3ad26, blue.500)"
      boxShadow="md"
    >
      <Container maxW={'7xl'}>
        <VStack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={16}>
          <Heading
            fontSize={{ base: '3xl', sm: '4xl' }}
            fontWeight={'bold'}
            color={'brand.900'}
          >
            Contact Us
          </Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Have questions? Get in touch with our experienced agents.
          </Text>
        </VStack>

        <Flex
          justify="center"
          direction={{ base: 'column', md: 'row' }}
          align="center"
        >
          <VStack 
            spacing={8} 
            align="flex-start" 
            maxW={{ lg: '600px' }}
            bg={useColorModeValue('white', 'gray.700')}
            p={8}
            rounded="xl"
            boxShadow="lg"
            w="full"
          >
            <Heading as="h3" size="lg" color="brand.900">
              Get in Touch
            </Heading>
            
            <Alert status="info" borderRadius="md">
              <AlertIcon />
              <Text>
                Contact our agents directly via phone or WhatsApp for any service-related queries.
              </Text>
            </Alert>
            
            <VStack spacing={4} align="flex-start" w="full">
              {phoneNumbers.map((phone, index) => (
                <Box key={index} w="full" p={4} borderWidth="1px" borderRadius="md" borderColor="gray.200">
                  <Text fontWeight="medium" fontSize="lg" mb={2}>
                    {phone.name}
                  </Text>
                  <HStack spacing={4}>
                    <Link
                      href={`tel:${phone.number}`}
                      display="flex"
                      alignItems="center"
                      color="brand.900"
                      fontWeight="medium"
                      _hover={{ textDecoration: 'none', color: 'brand.800' }}
                    >
                      <PhoneIcon mr={2} />
                      <Text>{phone.display}</Text>
                    </Link>
                    
                    <Link
                      href={`https://wa.me/91${phone.number}?text=Hello,%20I'm%20interested%20in%20LIC%20services`}
                      display="flex"
                      alignItems="center"
                      color="green.500"
                      fontWeight="medium"
                      _hover={{ textDecoration: 'none', color: 'green.600' }}
                      isExternal
                    >
                      <Icon as={FaWhatsapp} mr={2} />
                      <Text>WhatsApp</Text>
                    </Link>
                  </HStack>
                </Box>
              ))}
            </VStack>
            
            <Link
              href="mailto:alwaysjigarlic@gmail.com"
              display="flex"
              alignItems="center"
              color="brand.900"
              fontWeight="medium"
              fontSize="lg"
              _hover={{ textDecoration: 'none', color: 'brand.800' }}
            >
              <EmailIcon mr={3} />
              <Text>alwaysjigarlic@gmail.com</Text>
            </Link>
            
            <HStack alignItems="flex-start">
              <Icon as={FaMapMarkerAlt} color="brand.900" mt={1.5} mr={3} />
              <Text fontSize="lg">
                school lane, 8/65, Pandiya Velalar St, Periyar, Madurai Main, Madurai, Tamil Nadu 625001
              </Text>
            </HStack>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Contact;