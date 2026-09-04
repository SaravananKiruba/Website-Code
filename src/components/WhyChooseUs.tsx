import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  VStack,
} from '@chakra-ui/react';
import {
  FaShieldAlt,
  FaHeadset,
  FaUsers,
  FaHandshake,
} from 'react-icons/fa';

const fadeUp           = { hidden: { opacity: 0, y: 40 },              show: { opacity: 1, y: 0,    transition: { duration: 0.6, ease: 'easeOut' as const } } };
const cardPop          = { hidden: { opacity: 0, y: 30, scale: 0.96 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' as const } } };
const staggerContainer = { hidden: {},                                  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const viewport         = { once: true, amount: 0.15 } as const;

const FEATURES = [
  { icon: FaShieldAlt, title: 'Comprehensive Coverage',  desc: 'Life, Health, Vehicle & more under one trusted roof.' },
  { icon: FaHandshake, title: 'Personalized Guidance',   desc: 'One-on-one expert advice tailored to your exact needs.' },
  { icon: FaHeadset,   title: '24/7 Expert Support',     desc: 'Our team is always available when you need us most.' },
  { icon: FaUsers,     title: 'Trusted by Families',     desc: '10,000+ satisfied families across India rely on us.' },
];

interface WhyChooseUsProps {
  id?: string;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ id }) => {
  return (
    <Box 
      id={id}
      as="section" 
      py={32}
      position="relative"
      overflow="hidden"
      bgGradient="linear(135deg, #ffffff 0%, #f0f4ff 50%, #fffaf0 100%)"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgImage: "radial-gradient(circle at 20% 50%, rgba(72,147,237,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(246,196,69,0.06) 0%, transparent 50%)",
        zIndex: 0,
      }}
    >
      <Container maxW="7xl" position="relative" zIndex={1}>
        <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={staggerContainer}>
          {/* Header Section */}
          <VStack spacing={4} mb={20} textAlign="center" as={motion.div} variants={fadeUp}>
            <Box>
              <Text 
                color="accent.600" 
                fontWeight="bold" 
                fontSize={{ base: 'xs', md: 'sm' }} 
                letterSpacing="widest" 
                textTransform="uppercase"
                mb={2}
              >
                ✨ Our Promise to You
              </Text>
            </Box>
            <Heading 
              fontSize={{ base: '2.5xl', sm: '4xl', md: '5xl' }} 
              fontWeight="900" 
              color="brand.900"
              lineHeight="1.2"
            >
              Why Choose Your 
              <br />
              <Box as="span" bgGradient="linear(90deg, brand.600, accent.500)" bgClip="text" color="transparent">
                Policy Saathi?
              </Box>
            </Heading>
            <Text 
              color="gray.700" 
              fontSize={{ base: 'md', md: 'lg' }}
              maxW="2xl" 
              lineHeight="1.8"
              fontWeight={500}
            >
              We don't just sell insurance — we build long-term relationships based on trust, transparency and expertise.
            </Text>
          </VStack>

          {/* Features Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={{ base: 6, lg: 8 }}>
            {FEATURES.map((feature, index) => (
              <Box
                as={motion.div}
                variants={cardPop}
                key={feature.title}
                p={{ base: 6, md: 8 }}
                bg="white"
                rounded="2xl"
                boxShadow="0 4px 20px rgba(0,0,0,0.08)"
                border="2px solid"
                borderColor="transparent"
                transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                position="relative"
                overflow="hidden"
                _hover={{ 
                  transform: 'translateY(-12px)', 
                  boxShadow: '0 16px 48px rgba(16,18,109,0.15)', 
                  borderColor: 'accent.300',
                }}
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  h: "4px",
                  bgGradient: index % 2 === 0 
                    ? "linear(to-r, brand.600, accent.500)"
                    : "linear(to-r, accent.500, brand.700)",
                }}
              >
                {/* Icon with gradient background */}
                <Flex
                  w={{ base: 16, md: 20 }}
                  h={{ base: 16, md: 20 }}
                  align="center"
                  justify="center"
                  rounded="2xl"
                  bgGradient={index % 2 === 0
                    ? "linear(135deg, brand.600 0%, brand.800 100%)"
                    : "linear(135deg, accent.500 0%, accent.700 100%)"
                  }
                  color="white"
                  mb={6}
                  boxShadow={index % 2 === 0
                    ? "0 12px 28px rgba(72,147,237,0.3)"
                    : "0 12px 28px rgba(246,196,69,0.3)"
                  }
                  transition="all 0.3s"
                  _groupHover={{ transform: 'scale(1.1)' }}
                >
                  <Icon as={feature.icon} w={{ base: 8, md: 10 }} h={{ base: 8, md: 10 }} />
                </Flex>

                {/* Content */}
                <Heading 
                  size="md" 
                  mb={3} 
                  color="brand.900"
                  fontSize={{ base: 'lg', md: 'xl' }}
                  fontWeight={700}
                >
                  {feature.title}
                </Heading>
                <Text 
                  color="gray.700" 
                  fontSize={{ base: 'sm', md: 'base' }} 
                  lineHeight="1.8"
                  fontWeight={500}
                >
                  {feature.desc}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
