import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Button,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { FaHeart, FaShieldAlt, FaUserShield, FaCar, FaCheckCircle, FaPhone } from 'react-icons/fa';

const fadeUp    = { hidden: { opacity: 0, y: 40 },          show: { opacity: 1, y: 0,  transition: { duration: 0.6, ease: 'easeOut' as const } } };
const cardPop   = { hidden: { opacity: 0, y: 30, scale: 0.96 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' as const } } };
const staggerContainer = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const viewport  = { once: true, amount: 0.15 } as const;

interface Category {
  icon: React.ElementType;
  label: string;
  emoji: string;
  iconColor: string;
  borderColor: string;
  iconBg: string;
  docs: string[];
  waMessage: string;
}

const categories: Category[] = [
  {
    icon: FaHeart,
    label: 'Life Insurance',
    emoji: '❤️',
    iconColor: 'red.500',
    borderColor: 'red.400',
    iconBg: 'red.50',
    docs: [
      'Aadhaar card',
      'PAN card',
      'Passport-size photo',
      'Bank details',
      'Income proof (where applicable)',
      'Medical documents (where applicable)',
    ],
    waMessage: 'Hi! I need help with Life Insurance. Can you guide me through the required documents and book a consultation?',
  },
  {
    icon: FaShieldAlt,
    label: 'Health Insurance',
    emoji: '🛡️',
    iconColor: 'green.600',
    borderColor: 'green.400',
    iconBg: 'green.50',
    docs: [
      'Aadhaar card',
      'PAN card',
      'Passport-size photo',
      'Bank details',
      'Height & weight',
      'Existing policy details (if any)',
      'Medical information / reports (if applicable)',
    ],
    waMessage: 'Hi! I need help with Health Insurance. Can you guide me through the required documents and book a consultation?',
  },
  {
    icon: FaUserShield,
    label: 'Term Insurance',
    emoji: '👨‍👩‍👧',
    iconColor: 'blue.600',
    borderColor: 'blue.400',
    iconBg: 'blue.50',
    docs: [
      'Aadhaar card',
      'PAN card',
      'Passport-size photo',
      'Bank details',
      'Income proof',
      'Occupation details',
      'Medical information / reports (if required)',
    ],
    waMessage: 'Hi! I need help with Term Insurance. Can you guide me through the required documents and book a consultation?',
  },
  {
    icon: FaCar,
    label: 'Vehicle Insurance',
    emoji: '🚗',
    iconColor: 'orange.500',
    borderColor: 'orange.400',
    iconBg: 'orange.50',
    docs: [
      'Driving license',
      'Previous insurance policy',
      'Vehicle registration certificate',
    ],
    waMessage: 'Hi! I need help with Vehicle Insurance. Can you guide me through the required documents and book a consultation?',
  },
];

interface DocumentsRequiredProps {
  id: string;
}

const DocumentsRequired: React.FC<DocumentsRequiredProps> = ({ id }) => {
  const handleBookCall = (message: string) => {
    window.open(`https://wa.me/919360533056?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box 
      id={id} 
      as="section" 
      py={28}
      bgGradient="linear(135deg, #ffffff 0%, #f0f4ff 50%, #fffaf0 100%)"
      position="relative"
      overflow="hidden"
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
        <VStack as={motion.div} variants={fadeUp} spacing={4} mb={16} textAlign="center">
          <Heading 
            fontSize={{ base: '2.5xl', sm: '4xl' }} 
            fontWeight="900" 
            color="brand.900"
          >
            Documents Required
          </Heading>
          <Text color="gray.700" fontSize={{ base: 'md', md: 'lg' }} maxW="2xl" fontWeight="500">
            Quick checklist of what you need before applying. We guide you through every step.
          </Text>
        </VStack>

        <SimpleGrid as={motion.div} variants={staggerContainer} columns={{ base: 1, md: 2, xl: 4 }} spacing={8}>
          {categories.map((cat) => (
            <Box
              as={motion.div}
              variants={cardPop}
              key={cat.label}
              bg="white"
              rounded="xl"
              boxShadow="lg"
              p={6}
              display="flex"
              flexDirection="column"
              borderTop="4px solid"
              borderColor={cat.borderColor}
              transition="all 0.3s"
              _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
            >
              <HStack mb={5} spacing={3}>
                <Box bg={cat.iconBg} p={3} rounded="lg" flexShrink={0}>
                  <Icon as={cat.icon} color={cat.iconColor} w={6} h={6} />
                </Box>
                <Heading as="h3" size="md" color="brand.900">{cat.label}</Heading>
              </HStack>

              <List spacing={2} flex={1} mb={6}>
                {cat.docs.map((doc) => (
                  <ListItem
                    key={doc}
                    fontSize="sm"
                    color="gray.700"
                    display="flex"
                    alignItems="flex-start"
                    fontWeight="500"
                  >
                    <ListIcon as={FaCheckCircle} color="accent.600" mt={0.5} flexShrink={0} />
                    {doc}
                  </ListItem>
                ))}
              </List>

              <Button
                size="sm"
                bg="accent.500"
                color="brand.900"
                leftIcon={<Icon as={FaPhone} />}
                onClick={() => handleBookCall(cat.waMessage)}
                _hover={{ bg: 'accent.600', transform: 'translateY(-1px)' }}
                fontWeight="bold"
                transition="all 0.2s"
              >
                Book a Call & Get Assistance
              </Button>
            </Box>
          ))}
        </SimpleGrid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default DocumentsRequired;
