import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaShieldAlt, FaHeartbeat, FaCar, FaMotorcycle, FaPlane, FaHome, FaCheckCircle } from 'react-icons/fa';

interface ServiceCardProps {
  title: string;
  text: string;
  icon: React.ReactElement;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, text, icon, features }) => {
  return (
    <Box
      maxW={'330px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'lg'}
      p={6}
      overflow={'hidden'}
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'xl',
      }}
    >
      <Stack align={'center'} spacing={5}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={'brand.800'}
          mb={1}
        >
          {icon}
        </Flex>
        <Heading
          color={useColorModeValue('gray.700', 'white')}
          fontSize={'2xl'}
          fontFamily={'body'}
        >
          {title}
        </Heading>
        <Text color={'gray.500'} fontSize={'sm'} textAlign={'center'}>
          {text}
        </Text>
        <Stack spacing={3} w={'full'} mt={2}>
          {features.map((feature, index) => (
            <HStack key={index} spacing={2} align={'start'}>
              <Icon as={FaCheckCircle} color={'brand.500'} w={5} h={5} mt={1} />
              <Text fontSize={'sm'}>{feature}</Text>
            </HStack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

interface ServicesProps {
  id: string;
}

const Services: React.FC<ServicesProps> = ({ id }) => {
  return (
    <Box id={id} as="section" py={16}>
      <Container maxW={'7xl'}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={16}>
          <Heading
            fontSize={{ base: '3xl', sm: '4xl' }}
            fontWeight={'bold'}
            color={'brand.900'}
          >
            Our Insurance Services
          </Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            We offer a comprehensive range of insurance solutions to protect you, your family, and your assets.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} px={{ base: 2, md: 4 }} justifyItems="center">
          <ServiceCard
            icon={<Icon as={FaShieldAlt} w={10} h={10} />}
            title={'Life Insurance (LIC)'}
            text={'Secure your family\'s future with comprehensive life insurance plans from LIC.'}
            features={[
              'Various plan types to suit your needs',
              'Tax benefits under Section 80C',
              'Maturity benefits and bonuses',
              'Hassle-free claim settlement'
            ]}
          />
          <ServiceCard
            icon={<Icon as={FaHeartbeat} w={10} h={10} />}
            title={'Health Insurance (Star Health)'}
            text={'Quality healthcare coverage for you and your family with Star Health Insurance.'}
            features={[
              'Individual and family floater plans',
              'Cashless treatment at 10,000+ hospitals',
              'Coverage for pre and post hospitalization',
              'No medical check-up up to 45 years'
            ]}
          />
          <ServiceCard
            icon={<Icon as={FaCar} w={10} h={10} />}
            title={'Car Insurance'}
            text={'Protect your vehicle with comprehensive or third-party insurance coverage.'}
            features={[
              'Comprehensive vs third-party options',
              'No-claim bonus (NCB) benefits',
              'Add-ons like zero-dep, roadside assistance',
              'Quick claim settlement process'
            ]}
          />
          <ServiceCard
            icon={<Icon as={FaMotorcycle} w={10} h={10} />}
            title={'Bike Insurance'}
            text={'Affordable and reliable coverage for your two-wheeler with fast claim processing.'}
            features={[
              'Insured Declared Value (IDV) protection',
              'Personal accident cover',
              'Fast claim settlement process',
              'Long-term policy options'
            ]}
          />
          <ServiceCard
            icon={<Icon as={FaPlane} w={10} h={10} />}
            title={'Travel Insurance'}
            text={'Worry-free travel with comprehensive coverage for domestic and international trips.'}
            features={[
              'International and domestic coverage',
              'Medical expenses and evacuation',
              'Trip cancellation and delays',
              'Lost luggage and passport assistance'
            ]}
          />
          <ServiceCard
            icon={<Icon as={FaHome} w={10} h={10} />}
            title={'Building Insurance'}
            text={'Shield your property from unforeseen damages, natural disasters, and more.'}
            features={[
              'Protection against fire and theft',
              'Natural disaster coverage',
              'Third-party liability',
              'Cost-effective premium options'
            ]}
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Services;