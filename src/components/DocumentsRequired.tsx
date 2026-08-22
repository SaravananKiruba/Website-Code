import React from 'react';
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
      'PAN card',
      'Passport-size photo',
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
    <Box id={id} as="section" py={24} bg="gray.50">
      <Container maxW="7xl">
        <VStack spacing={4} mb={16} textAlign="center">
          <Heading fontSize={{ base: '3xl', sm: '4xl' }} fontWeight="bold" color="brand.900">
            Documents Required
          </Heading>
          <Text color="gray.600" fontSize="xl" maxW="2xl">
            Quick checklist of what you need before applying. We guide you through every step.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={8}>
          {categories.map((cat) => (
            <Box
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
                    color="gray.600"
                    display="flex"
                    alignItems="flex-start"
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
      </Container>
    </Box>
  );
};

export default DocumentsRequired;
