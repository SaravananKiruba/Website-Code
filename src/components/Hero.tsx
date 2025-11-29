import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Image,
  useColorModeValue,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { FaShieldAlt, FaHeartbeat, FaCar, FaMotorcycle, FaPlane, FaHome } from 'react-icons/fa';
import HomeSection from '../Images/Home Section.jpg';

interface FeatureCardProps {
  title: string;
  text: string;
  icon: React.ReactElement;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, icon, text }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={6}
      rounded={'lg'}
      align={'center'}
      pos={'relative'}
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'xl',
      }}
      transition="all 0.3s ease"
    >
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'brand.800'}
        mb={4}
      >
        {icon}
      </Flex>
      <Heading fontSize={'xl'} fontWeight={600}>
        {title}
      </Heading>
      <Text fontSize={'sm'} color={'gray.500'} align={'center'}>
        {text}
      </Text>
    </Stack>
  );
};

interface HeroProps {
  id: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  const phoneNumbers = [
    { number: '9843430099', display: '98434 30099' },
    { number: '9047797975', display: '90477 97975' },
    { number: '8248633617', display: '82486 33617' },
  ];

  return (
    <Box id={id} as="section" py={12}>
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 10, md: 16 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
            >
              <Text as={'span'} color={'brand.900'}>
                Your Policy Saathi
              </Text>
              <br />
              <Text as={'span'} color={'brand.800'}>
                Your Trusted Insurance Partner
              </Text>
            </Heading>
            <Text color={'gray.500'}>
              With over 20 years of experience, we provide expert advice and services for all your insurance needs. 
              We're committed to helping you secure your future and protect what matters most.
            </Text>
            <Stack 
              spacing={{ base: 4, sm: 6 }} 
              direction={{ base: 'column', sm: 'row' }}
            >
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'brand'}
                bg={'brand.900'}
                _hover={{ bg: 'brand.800' }}
              >
                Get a Quote
              </Button>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'brand'}
                bg={'brand.500'}
                _hover={{ bg: 'brand.600' }}
                as={'a'}
                href={'#contact'}
              >
                Contact Us
              </Button>
            </Stack>
            <VStack 
              spacing={2} 
              alignItems="flex-start" 
              pt={4}
            >
              <Text fontWeight="bold" fontSize="lg">
                Call us directly:
              </Text>
              {phoneNumbers.map((phone, index) => (
                <Link 
                  key={index} 
                  href={`tel:${phone.number}`} 
                  display="flex" 
                  alignItems="center"
                  color="brand.900"
                  _hover={{ textDecoration: 'none', color: 'brand.800' }}
                >
                  <PhoneIcon mr={2} />
                  <Text>{phone.display}</Text>
                </Link>
              ))}
            </VStack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Box
              position={'relative'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}
              height="300px"
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
                bg="rgba(0,0,0,0.5)"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={6}
              >
                <Heading
                  size="lg"
                  color="white"
                  mb={2}
                  textAlign="center"
                >
                  Expert Insurance Guidance
                </Heading>
                <Text
                  color="white"
                  fontSize="md"
                  textAlign="center"
                >
                  Protecting what matters most to you
                </Text>
              </Box>
            </Box>
          </Flex>
        </Stack>

        <Heading
          fontSize={{ base: '2xl', sm: '3xl' }}
          fontWeight={'bold'}
          textAlign={'center'}
          mb={10}
        >
          Our Insurance Services
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} mb={10}>
          <FeatureCard
            icon={<Icon as={FaShieldAlt} w={10} h={10} />}
            title={'Life Insurance'}
            text={"Secure your family's future with comprehensive LIC life insurance plans."}
          />
          <FeatureCard
            icon={<Icon as={FaHeartbeat} w={10} h={10} />}
            title={'Health Insurance'}
            text={'Quality healthcare coverage with Star Health for you and your family.'}
          />
          <FeatureCard
            icon={<Icon as={FaCar} w={10} h={10} />}
            title={'Car Insurance'}
            text={'Comprehensive and third-party insurance options for your vehicle.'}
          />
          <FeatureCard
            icon={<Icon as={FaMotorcycle} w={10} h={10} />}
            title={'Bike Insurance'}
            text={'Protect your two-wheeler with affordable and reliable coverage.'}
          />
          <FeatureCard
            icon={<Icon as={FaPlane} w={10} h={10} />}
            title={'Travel Insurance'}
            text={'Worry-free domestic and international travel with complete coverage.'}
          />
          <FeatureCard
            icon={<Icon as={FaHome} w={10} h={10} />}
            title={'Building Insurance'}
            text={'Shield your property from unforeseen damages and natural disasters.'}
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Hero;