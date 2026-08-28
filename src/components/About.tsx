import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Badge,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  Avatar,
  SimpleGrid,
  Icon,
  VStack,
} from '@chakra-ui/react';
import { FaMedal, FaHandshake, FaBullseye } from 'react-icons/fa';

const fadeUp    = { hidden: { opacity: 0, y: 40 },          show: { opacity: 1, y: 0,  transition: { duration: 0.6, ease: 'easeOut' as const } } };
const cardPop   = { hidden: { opacity: 0, y: 30, scale: 0.96 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' as const } } };
const staggerContainer = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const viewport  = { once: true, amount: 0.15 } as const;

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
        <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={staggerContainer}>
        <Box as={motion.div} variants={fadeUp}>
        <Heading
          mb={4}
          fontSize={{ base: '3xl', md: '4xl' }}
          textAlign={'center'}
          position={'relative'}
          color={'brand.900'}
        >
          Meet Our Team
        </Heading>
        <Text textAlign="center" color="gray.500" fontSize="lg" mb={12} maxW="2xl" mx="auto">
          Experienced insurance professionals dedicated to securing your future.
        </Text>
        </Box>

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
            {/* ── Leadership Row ── */}
            <Box>
              <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={fadeUp}>
                <Flex align="center" justify="center" mb={5} gap={3}>
                  <Box h="1px" flex={1} bgGradient="linear(to-r, transparent, brand.700)" />
                  <Text textTransform="uppercase" fontWeight="bold" letterSpacing="widest" fontSize="xs" color="brand.700" px={3} whiteSpace="nowrap">
                    Leadership
                  </Text>
                  <Box h="1px" flex={1} bgGradient="linear(to-l, transparent, brand.700)" />
                </Flex>
              </motion.div>
              <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={staggerContainer}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} maxW="2xl" mx="auto">

                  {/* Jigar - Founder */}
                  <Box
                    as={motion.div}
                    variants={cardPop}
                    bg="white"
                    boxShadow={'xl'}
                    p={6}
                    rounded={'2xl'}
                    border="2px solid"
                    borderColor="brand.900"
                    transition="all 0.3s"
                    _hover={{ transform: 'translateY(-6px)', boxShadow: '2xl' }}
                    position="relative"
                    overflow="hidden"
                  >
                    <Box position="absolute" top={0} left={0} right={0} h="4px" bgGradient="linear(to-r, brand.900, accent.500)" />
                    <VStack align="center" spacing={4}>
                      <Box
                        borderRadius="full"
                        p={1.5}
                        bgGradient="linear(to-bl, accent.700, accent.500, brand.500, brand.700)"
                        boxShadow="0 0 20px rgba(246, 196, 69, 0.6)"
                        transition="all 0.3s ease"
                        _hover={{ transform: 'scale(1.05)', boxShadow: '0 0 25px rgba(246, 196, 69, 0.8)' }}
                      >
                        <Avatar size={'2xl'} src={require('../Images/Jigar.jpg')} name={'A. Jigar'} border="3px solid white" />
                      </Box>
                      <VStack spacing={1} align="center">
                        <Badge colorScheme="yellow" fontSize="xs" px={3} py={0.5} borderRadius="full" textTransform="uppercase" letterSpacing="wider">
                          Founder
                        </Badge>
                        <Heading fontSize={{ base: 'xl', sm: '2xl' }} fontWeight={600} color={'brand.900'} textAlign="center">
                          A. Jigar
                        </Heading>
                        <Text fontSize={'sm'} color="#06443f" textAlign="center">
                          Your Policy Saathi
                        </Text>
                      </VStack>
                    </VStack>
                  </Box>

                  {/* Ashok Kumar - Senior Manager */}
                  <Box
                    as={motion.div}
                    variants={cardPop}
                    bg="white"
                    boxShadow={'xl'}
                    p={6}
                    rounded={'2xl'}
                    border="2px solid"
                    borderColor="brand.700"
                    transition="all 0.3s"
                    _hover={{ transform: 'translateY(-6px)', boxShadow: '2xl' }}
                    position="relative"
                    overflow="hidden"
                  >
                    <Box position="absolute" top={0} left={0} right={0} h="4px" bgGradient="linear(to-r, brand.700, brand.900)" />
                    <VStack align="center" spacing={4}>
                      <Box
                        borderRadius="full"
                        p={1.5}
                        bgGradient="linear(to-r, brand.700, brand.500, accent.500, accent.700)"
                        boxShadow="0 0 20px rgba(38, 25, 216, 0.5)"
                        transition="all 0.3s ease"
                        _hover={{ transform: 'scale(1.05)', boxShadow: '0 0 25px rgba(38, 25, 216, 0.7)' }}
                      >
                        <Avatar size={'2xl'} src={require('../Images/Ashok Kumar.jpg')} name={'S. Ashok Kumar'} border="3px solid white" />
                      </Box>
                      <VStack spacing={1} align="center">
                        <Badge colorScheme="blue" fontSize="xs" px={3} py={0.5} borderRadius="full" textTransform="uppercase" letterSpacing="wider">
                          Senior Manager
                        </Badge>
                        <Heading fontSize={{ base: 'xl', sm: '2xl' }} fontWeight={600} color={'brand.900'} textAlign="center">
                          S. Ashok Kumar
                        </Heading>
                        <Text fontSize={'sm'} color="#06443f" textAlign="center">
                          CM Club Member & Senior Sales Manager
                        </Text>
                      </VStack>
                    </VStack>
                  </Box>

                </SimpleGrid>
              </motion.div>
            </Box>

            {/* ── Animated Hierarchy Connector ── */}
            <Box py={2}>
              <Flex justify="center">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35 }}
                  style={{ width: '2px', height: '28px', background: 'linear-gradient(to bottom, #06443f, #2619d8)', transformOrigin: 'top' }}
                />
              </Flex>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.35 }}
                style={{ height: '2px', background: 'linear-gradient(to right, transparent, #06443f, #2619d8, #f6c445, #2619d8, #06443f, transparent)', transformOrigin: 'center' }}
              />
              <Flex justify="center" mt={2}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.9 }}
                >
                  <Box px={5} py={1.5} borderRadius="full" bgGradient="linear(to-r, brand.900, brand.700)" boxShadow="md">
                    <Text fontSize="xs" fontWeight="bold" color="white" textTransform="uppercase" letterSpacing="widest">
                      Insurance Advisors
                    </Text>
                  </Box>
                </motion.div>
              </Flex>
              <Flex justify="center" mt={2}>
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 1.25 }}
                  style={{ width: '2px', height: '28px', background: 'linear-gradient(to bottom, #2619d8, #06443f)', transformOrigin: 'top' }}
                />
              </Flex>
            </Box>

            {/* ── Team Advisors Grid ── */}
            <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={staggerContainer}>
              <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={5}>

                {/* G. Jackie Kumar Jain */}
                <Box
                  as={motion.div}
                  variants={cardPop}
                  bg="white"
                  boxShadow={'lg'}
                  p={5}
                  rounded={'2xl'}
                  border="1px solid"
                  borderColor="gray.100"
                  transition="all 0.3s"
                  _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl', borderColor: 'accent.400' }}
                  position="relative"
                  overflow="hidden"
                >
                  <Box position="absolute" top={0} left={0} right={0} h="3px" bgGradient="linear(to-r, brand.900, accent.500)" />
                  <VStack align="center" spacing={3}>
                    <Box borderRadius="full" p={1.5} bgGradient="linear(to-tr, brand.700, accent.500)" boxShadow="0 0 10px rgba(38,25,216,0.3)">
                      <Avatar size={'xl'} src={require('../Images/G jackie Kumar jain.jpg')} name={'G. Jackie Kumar Jain'} border="3px solid white" />
                    </Box>
                    <VStack spacing={1} align="center">
                      <Heading fontSize={'md'} fontWeight={600} color={'brand.900'} textAlign="center">G. Jackie Kumar Jain</Heading>
                      <Text fontSize={'xs'} color="#06443f" textAlign="center">Insurance Advisor</Text>
                    </VStack>
                  </VStack>
                </Box>

                {/* Piyush Kumar Jain */}
                <Box
                  as={motion.div}
                  variants={cardPop}
                  bg="white"
                  boxShadow={'lg'}
                  p={5}
                  rounded={'2xl'}
                  border="1px solid"
                  borderColor="gray.100"
                  transition="all 0.3s"
                  _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl', borderColor: 'accent.400' }}
                  position="relative"
                  overflow="hidden"
                >
                  <Box position="absolute" top={0} left={0} right={0} h="3px" bgGradient="linear(to-r, brand.900, accent.500)" />
                  <VStack align="center" spacing={3}>
                    <Box borderRadius="full" p={1.5} bgGradient="linear(to-r, accent.500, brand.700)" boxShadow="0 0 10px rgba(246,196,69,0.4)">
                      <Avatar size={'xl'} src={require('../Images/Piyush Kumar Jain.png')} name={'Piyush Kumar Jain'} border="3px solid white" />
                    </Box>
                    <VStack spacing={1} align="center">
                      <Heading fontSize={'md'} fontWeight={600} color={'brand.900'} textAlign="center">Piyush Kumar Jain</Heading>
                      <Text fontSize={'xs'} color="#06443f" textAlign="center">Insurance Advisor</Text>
                    </VStack>
                  </VStack>
                </Box>

                {/* Prince Kumar Jain */}
                <Box
                  as={motion.div}
                  variants={cardPop}
                  bg="white"
                  boxShadow={'lg'}
                  p={5}
                  rounded={'2xl'}
                  border="1px solid"
                  borderColor="gray.100"
                  transition="all 0.3s"
                  _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl', borderColor: 'accent.400' }}
                  position="relative"
                  overflow="hidden"
                >
                  <Box position="absolute" top={0} left={0} right={0} h="3px" bgGradient="linear(to-r, brand.900, accent.500)" />
                  <VStack align="center" spacing={3}>
                    <Box borderRadius="full" p={1.5} bgGradient="linear(to-bl, brand.500, accent.700)" boxShadow="0 0 10px rgba(6,68,63,0.3)">
                      <Avatar size={'xl'} src={require('../Images/Prince Kumar Jain.png')} name={'Prince Kumar Jain'} border="3px solid white" />
                    </Box>
                    <VStack spacing={1} align="center">
                      <Heading fontSize={'md'} fontWeight={600} color={'brand.900'} textAlign="center">Prince Kumar Jain</Heading>
                      <Text fontSize={'xs'} color="#06443f" textAlign="center">Insurance Advisor</Text>
                    </VStack>
                  </VStack>
                </Box>

                {/* Raveena Kumari Jain */}
                <Box
                  as={motion.div}
                  variants={cardPop}
                  bg="white"
                  boxShadow={'lg'}
                  p={5}
                  rounded={'2xl'}
                  border="1px solid"
                  borderColor="gray.100"
                  transition="all 0.3s"
                  _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl', borderColor: 'accent.400' }}
                  position="relative"
                  overflow="hidden"
                >
                  <Box position="absolute" top={0} left={0} right={0} h="3px" bgGradient="linear(to-r, brand.900, accent.500)" />
                  <VStack align="center" spacing={3}>
                    <Box borderRadius="full" p={1.5} bgGradient="linear(to-tl, accent.700, brand.500)" boxShadow="0 0 10px rgba(246,196,69,0.4)">
                      <Avatar size={'xl'} src={require('../Images/Raveena Kumari Jain.png')} name={'Raveena Kumari Jain'} border="3px solid white" />
                    </Box>
                    <VStack spacing={1} align="center">
                      <Heading fontSize={'md'} fontWeight={600} color={'brand.900'} textAlign="center">Raveena Kumari Jain</Heading>
                      <Text fontSize={'xs'} color="#06443f" textAlign="center">Insurance Advisor</Text>
                    </VStack>
                  </VStack>
                </Box>

                {/* S. Nemichand Jain */}
                <Box
                  as={motion.div}
                  variants={cardPop}
                  bg="white"
                  boxShadow={'lg'}
                  p={5}
                  rounded={'2xl'}
                  border="1px solid"
                  borderColor="gray.100"
                  transition="all 0.3s"
                  _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl', borderColor: 'accent.400' }}
                  position="relative"
                  overflow="hidden"
                >
                  <Box position="absolute" top={0} left={0} right={0} h="3px" bgGradient="linear(to-r, brand.900, accent.500)" />
                  <VStack align="center" spacing={3}>
                    <Box borderRadius="full" p={1.5} bgGradient="linear(to-tr, brand.900, accent.400)" boxShadow="0 0 10px rgba(38,25,216,0.3)">
                      <Avatar size={'xl'} src={require('../Images/S Nemichand Jain.png')} name={'S. Nemichand Jain'} border="3px solid white" />
                    </Box>
                    <VStack spacing={1} align="center">
                      <Heading fontSize={'md'} fontWeight={600} color={'brand.900'} textAlign="center">S. Nemichand Jain</Heading>
                      <Text fontSize={'xs'} color="#06443f" textAlign="center">Insurance Advisor</Text>
                    </VStack>
                  </VStack>
                </Box>

                {/* Yash */}
                <Box
                  as={motion.div}
                  variants={cardPop}
                  bg="white"
                  boxShadow={'lg'}
                  p={5}
                  rounded={'2xl'}
                  border="1px solid"
                  borderColor="gray.100"
                  transition="all 0.3s"
                  _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl', borderColor: 'accent.400' }}
                  position="relative"
                  overflow="hidden"
                >
                  <Box position="absolute" top={0} left={0} right={0} h="3px" bgGradient="linear(to-r, brand.900, accent.500)" />
                  <VStack align="center" spacing={3}>
                    <Box borderRadius="full" p={1.5} bgGradient="linear(to-br, brand.700, accent.500)" boxShadow="0 0 10px rgba(6,68,63,0.3)">
                      <Avatar size={'xl'} src={require('../Images/Yash.png')} name={'Yash'} border="3px solid white" />
                    </Box>
                    <VStack spacing={1} align="center">
                      <Heading fontSize={'md'} fontWeight={600} color={'brand.900'} textAlign="center">Yash</Heading>
                      <Text fontSize={'xs'} color="#06443f" textAlign="center">Insurance Advisor</Text>
                    </VStack>
                  </VStack>
                </Box>

              </SimpleGrid>
            </motion.div>

            <Text fontSize={'lg'} color={'gray.600'} pt={2}>
              Our experienced insurance agents at Your Policy Saathi have been helping families and individuals secure their futures 
              with the right insurance plans for over 20 years. For any insurance queries, you can 
              directly contact our agents via WhatsApp.
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Feature
                icon={<Icon as={FaMedal} w={5} h={5} />}
                title={'20+ Years Experience'}
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
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;