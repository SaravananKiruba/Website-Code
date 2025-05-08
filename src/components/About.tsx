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
} from '@chakra-ui/react';
import { FaMedal, FaHandshake, FaBullseye } from 'react-icons/fa';

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
            <Box 
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}
              rounded={'lg'}
            >
              <Flex 
                direction={{ base: 'column', md: 'row' }}
                align={{ base: 'center', md: 'flex-start' }}
                spacing={4}
              >
                <Avatar
                  size={'xl'}
                  src={
                    'https://via.placeholder.com/150'
                  }
                  mb={{ base: 4, md: 0 }}
                  mr={{ md: 4 }}
                  alt={'Agent Name'}
                />
                <Stack spacing={2}>
                  <Heading
                    fontSize={{ base: '2xl', sm: '3xl' }}
                    fontWeight={500}
                    color={'brand.900'}
                  >
                    Experienced LIC Agent
                  </Heading>
                  <Text fontSize={'lg'} color={'gray.500'}>
                    As a trusted LIC Insurance Agent since 2010, I bring over 15 years of experience in the insurance industry. 
                    My mission is to provide personalized insurance solutions that protect what matters most to you.
                  </Text>
                  <Text fontSize={'lg'} color={'gray.500'} pt={2}>
                    My expertise spans across a wide range of insurance products, from life and health insurance to property and vehicle coverage. 
                    I believe in building long-term relationships with my clients based on trust, transparency, and excellent service.
                  </Text>
                </Stack>
              </Flex>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Feature
                icon={<Icon as={FaMedal} w={5} h={5} />}
                title={'15+ Years Experience'}
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