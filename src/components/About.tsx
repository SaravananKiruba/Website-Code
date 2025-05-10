import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  SimpleGrid,
  Icon,
  Grid,
  VStack,
  HStack,
  Link,
} from '@chakra-ui/react';
import { FaMedal, FaHandshake, FaBullseye, FaWhatsapp, FaPhone } from 'react-icons/fa';

interface FeatureProps {
  title: string;
  text: string;
  icon: React.ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'} spacing={4}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={'brand.700'}
        color={'white'}
      >
        {icon}
      </Flex>
      <Stack>
        <Text fontWeight={600}>{title}</Text>
        <Text color={'gray.600'}>{text}</Text>
      </Stack>
    </Stack>
  );
};

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <Box id={id} as="section" py={12} bg="gray.50">
      <Container maxW={'7xl'}>
        <Heading
          mb={12}
          fontSize={{ base: '3xl', md: '4xl' }}
          textAlign={'center'}
          position={'relative'}
          color={'brand.900'}
        >
          About Us
        </Heading>

        <Stack 
          direction={{ base: 'column', lg: 'row' }} 
          spacing={{ base: 10, lg: 16 }}
          align={{ lg: 'center' }}
          justify={'space-between'}
        >
          <Stack 
            flex={1} 
            spacing={8}
          >
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
              {/* Agent 1 */}
              <Box 
                bg="#fbe7ab"
                boxShadow={'lg'}
                p={6}
                rounded={'lg'}
              >
                <VStack 
                  align="center"
                  spacing={4}
                >                  <Avatar
                    size={'2xl'}
                    src={require('../Images/Ashok Kumar.jpg')}
                    mb={4}
                    name={'S. Ashok Kumar'}
                  />
                  <VStack spacing={2} align="center">
                    <Heading
                      fontSize={{ base: 'xl', sm: '2xl' }}
                      fontWeight={500}
                      color={'brand.900'}
                      textAlign="center"
                    >
                      S. Ashok Kumar
                    </Heading>
                    <Text fontSize={'md'} color="#06443f" textAlign="center">
                      CM CLUB MEMBER & SENIOR SALES MANAGER 
                    </Text>
                    <HStack spacing={2} mt={2}>
                      <Link href={`https://wa.me/919843430099`} isExternal>
                        <HStack color="green.500">
                          <Icon as={FaWhatsapp} />
                          <Text>98434 30099</Text>
                        </HStack>
                      </Link>
                    </HStack>
                  </VStack>
                </VStack>
              </Box>
              
              {/* Agent 2 */}
              <Box 
                bg= "#fbe7ab"
                boxShadow={'lg'}
                p={6}
                rounded={'lg'}
              >
                <VStack 
                  align="center"
                  spacing={4}
                >                  <Avatar
                    size={'2xl'}
                    src={require('../Images/Jigar.jpg')}
                    mb={4}
                    name={'A. Jigar'}
                  />
                  <VStack spacing={2} align="center">
                    <Heading
                      fontSize={{ base: 'xl', sm: '2xl' }}
                      fontWeight={500}
                      color={'brand.900'}
                      textAlign="center"
                    >
                      A. Jigar
                    </Heading>
                    <Text fontSize={'md'} color="#06443f" textAlign="center">
                       Insurance Agent
                    </Text>
                    <HStack spacing={2} mt={2}>
                      <Link href={`https://wa.me/918248633617`} isExternal>
                        <HStack color="green.500">
                          <Icon as={FaWhatsapp} />
                          <Text>82486 33617</Text>
                        </HStack>
                      </Link>
                    </HStack>
                  </VStack>
                </VStack>
              </Box>
            </Grid>

            <Text fontSize={'lg'} color={'gray.600'} pt={2}>
              Our experienced insurance agents at Your Policy Saathi have been helping families and individuals secure their futures 
              with the right insurance plans for over 25 years. For any insurance queries, you can 
              directly contact our agents via WhatsApp.
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Feature
                icon={<Icon as={FaMedal} w={5} h={5} />}
                title={'25+ Years Experience'}
                text={'Helping families and individuals secure their future with the right insurance plans.'}
              />
              <Feature
                icon={<Icon as={FaBullseye} w={5} h={5} />}
                title={'Our Mission'}
                text={'To provide honest advice and excellent service that builds lifelong trust with our clients.'}
              />
              <Feature
                icon={<Icon as={FaHandshake} w={5} h={5} />}
                title={'Trusted Partnerships'}
                text={'Official agent for LIC, Star Health, and New India Assurance Company.'}
              />
              <Feature
                icon={<Icon as={FaMedal} w={5} h={5} />}
                title={'Award-Winning Service'}
                text={'Recognized for outstanding customer service and claim settlement assistance.'}
              />
            </SimpleGrid>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;