import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Textarea,
  Text,
  useToast,
  VStack,
  HStack,
  Link,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { PhoneIcon, EmailIcon, ChatIcon } from '@chakra-ui/icons';
import { FaMapMarkerAlt } from 'react-icons/fa';

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [insuranceType, setInsuranceType] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const toast = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      
      // Reset form
      setName('');
      setMobile('');
      setEmail('');
      setInsuranceType('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  const phoneNumbers = [
    { number: '9843430099', display: '98434 30099' },
    { number: '9047797975', display: '90477 97975' },
    { number: '8248633617', display: '82486 33617' },
  ];

  return (
    <Box id={id} as="section" py={16}>
      <Container maxW={'7xl'}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={16}>
          <Heading
            fontSize={{ base: '3xl', sm: '4xl' }}
            fontWeight={'bold'}
            color={'brand.900'}
          >
            Contact Us
          </Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Have questions? Reach out to us through any of these channels.
          </Text>
        </Stack>

        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: 10, md: 20 }}
          justify="center"
        >
          <VStack spacing={8} align="flex-start" flex={1} maxW={{ lg: '400px' }}>
            <Heading as="h3" size="lg" color="brand.900">
              Get in Touch
            </Heading>
            
            <VStack spacing={4} align="flex-start">
              {phoneNumbers.map((phone, index) => (
                <Link
                  key={index}
                  href={`tel:${phone.number}`}
                  display="flex"
                  alignItems="center"
                  color="brand.900"
                  fontWeight="medium"
                  fontSize="lg"
                  _hover={{ textDecoration: 'none', color: 'brand.800' }}
                >
                  <PhoneIcon mr={3} />
                  <Text>{phone.display}</Text>
                </Link>
              ))}
              
              <Link
                href="mailto:agent@licinsurance.com"
                display="flex"
                alignItems="center"
                color="brand.900"
                fontWeight="medium"
                fontSize="lg"
                _hover={{ textDecoration: 'none', color: 'brand.800' }}
              >
                <EmailIcon mr={3} />
                <Text>agent@licinsurance.com</Text>
              </Link>
              
              <HStack alignItems="flex-start">
                <Icon as={FaMapMarkerAlt} color="brand.900" mt={1.5} mr={3} />
                <Text fontSize="lg">
                  123 Insurance Building,<br />
                  Main Street, City,<br />
                  State - 600001
                </Text>
              </HStack>
            </VStack>
            
            <Box
              w="100%"
              h="250px"
              bg="gray.200"
              borderRadius="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow="base"
            >
              <Text color="gray.500">Google Maps Embed</Text>
            </Box>
          </VStack>
          
          <Box 
            flex={1} 
            as="form" 
            onSubmit={handleSubmit}
            bg={useColorModeValue('white', 'gray.700')}
            p={8}
            rounded="xl"
            boxShadow="lg"
          >
            <VStack spacing={5}>
              <FormControl id="name" isRequired>
                <FormLabel>Your Name</FormLabel>
                <Input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  focusBorderColor="brand.500"
                />
              </FormControl>
              
              <FormControl id="mobile" isRequired>
                <FormLabel>Mobile Number</FormLabel>
                <Input 
                  type="tel" 
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="9876543210"
                  focusBorderColor="brand.500"
                />
              </FormControl>
              
              <FormControl id="email">
                <FormLabel>Email Address</FormLabel>
                <Input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  focusBorderColor="brand.500"
                />
              </FormControl>
              
              <FormControl id="insuranceType" isRequired>
                <FormLabel>Insurance Type</FormLabel>
                <Select 
                  placeholder="Select insurance type"
                  value={insuranceType}
                  onChange={(e) => setInsuranceType(e.target.value)}
                  focusBorderColor="brand.500"
                >
                  <option value="life">Life Insurance</option>
                  <option value="health">Health Insurance</option>
                  <option value="car">Car Insurance</option>
                  <option value="bike">Bike Insurance</option>
                  <option value="travel">Travel Insurance</option>
                  <option value="building">Building Insurance</option>
                </Select>
              </FormControl>
              
              <FormControl id="message">
                <FormLabel>Your Message</FormLabel>
                <Textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help you?"
                  rows={5}
                  focusBorderColor="brand.500"
                />
              </FormControl>
              
              <Button
                mt={4}
                w="full"
                colorScheme="brand"
                bg="brand.900"
                _hover={{ bg: 'brand.800' }}
                size="lg"
                type="submit"
                isLoading={isSubmitting}
                loadingText="Submitting"
              >
                Send Message
              </Button>
            </VStack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;