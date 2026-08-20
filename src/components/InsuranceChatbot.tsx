import React, { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  IconButton,
  Button,
  Flex,
  Divider,
  Badge,
  Link,
  Icon,
  Tooltip,
} from '@chakra-ui/react';
import { FaRobot, FaTimes, FaArrowLeft, FaWhatsapp, FaPhone } from 'react-icons/fa';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: 'What is a PED waiting period?',
    a: 'A Pre-Existing Disease (PED) waiting period is the time you must wait before your health insurance covers treatments for conditions you had before taking the policy. This typically ranges from 2 to 4 years depending on the insurer and condition.',
  },
  {
    q: 'What is a ULIP?',
    a: 'A Unit Linked Insurance Plan (ULIP) combines life insurance with market-linked investment. Part of your premium goes towards life coverage; the rest is invested in equity, debt, or balanced funds of your choice.',
  },
  {
    q: 'How much health insurance should I have?',
    a: 'A general rule is at least ₹5–10 lakhs per family member. Given rising medical costs, a base plan of ₹5 lakhs combined with a top-up of ₹10–20 lakhs is widely recommended.',
  },
  {
    q: 'What documents are required?',
    a: 'Documents vary by insurance type. Generally: Aadhaar/ID proof, PAN card, passport-size photo, and bank details. For health insurance, height & weight and medical reports may also be needed. Check the "Documents Required" section for full details.',
  },
  {
    q: 'Term vs. Life insurance — what\'s the difference?',
    a: 'Term insurance provides pure death benefit for a fixed period at low premiums. Life/endowment insurance covers you for a longer period and may include savings or investment components, with higher premiums.',
  },
  {
    q: 'What is a waiting period in health insurance?',
    a: 'A waiting period is a time frame after buying the policy during which certain illnesses are not covered. Initial waiting periods are usually 30 days; specific disease waiting periods can range from 1–4 years.',
  },
  {
    q: 'What is a cashless claim?',
    a: 'A cashless claim lets you receive treatment at a network hospital without paying upfront. The insurer settles the bill directly with the hospital. You only pay amounts not covered by the policy.',
  },
  {
    q: 'What is a top-up health insurance policy?',
    a: 'A top-up plan adds coverage above a set deductible. For example, a ₹20 lakh top-up with ₹5 lakh deductible pays for claims above ₹5 lakhs — a cost-effective way to enhance existing coverage.',
  },
  {
    q: 'What is a room-rent limit?',
    a: 'Room-rent limit is the maximum your insurer pays for hospital room charges per day. If you choose a room above this limit, you may pay the difference and proportional costs of other services.',
  },
  {
    q: 'What is a co-payment?',
    a: 'Co-payment (co-pay) is a fixed percentage of the claim you pay from your own pocket, while the insurer covers the rest. For example, a 10% co-pay means you pay 10% of every claim amount.',
  },
];

const WHATSAPP_URL =
  'https://wa.me/919360533056?text=Hi!%20I%20need%20help%20choosing%20the%20right%20policy.%20Can%20I%20book%20a%20free%20consultation%3F';
const CALL_URL = 'tel:+919360533056';

const InsuranceChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<FaqItem | null>(null);

  const handleOpen = () => {
    setIsOpen(true);
    setSelected(null);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelected(null);
  };

  return (
    // Positioned above the WhatsApp/Instagram stack on the right
    <Box position="fixed" bottom="185px" right="30px" zIndex={1000}>
      {isOpen && (
        <Box
          bg="white"
          rounded="2xl"
          boxShadow="2xl"
          w={{ base: 'calc(100vw - 50px)', sm: '360px' }}
          maxH={{ base: 'calc(100vh - 220px)', md: '500px' }}
          display="flex"
          flexDirection="column"
          mb={4}
          border="1px solid"
          borderColor="gray.100"
          overflow="hidden"
        >
          {/* Header bar */}
          <Flex bg="brand.900" px={4} py={3} align="center" justify="space-between" flexShrink={0}>
            <HStack spacing={2}>
              <Icon as={FaRobot} color="accent.500" w={5} h={5} />
              <Box>
                <Text color="white" fontWeight="bold" fontSize="sm" lineHeight="1.2">
                  Ask Your Policy Saathi
                </Text>
                <Badge colorScheme="green" fontSize="2xs" px={1}>
                  Online
                </Badge>
              </Box>
            </HStack>
            <IconButton
              aria-label="Close chatbot"
              icon={<Icon as={FaTimes} />}
              size="sm"
              variant="ghost"
              color="white"
              _hover={{ bg: 'whiteAlpha.200' }}
              onClick={handleClose}
            />
          </Flex>

          {/* Body */}
          <Box flex={1} overflowY="auto" p={4}>
            {!selected ? (
              <VStack align="stretch" spacing={2}>
                <Text fontSize="sm" color="gray.600" mb={1}>
                  👋 Hi! Pick a question to get a quick answer:
                </Text>
                {FAQS.map((faq) => (
                  <Button
                    key={faq.q}
                    size="sm"
                    variant="outline"
                    colorScheme="blue"
                    textAlign="left"
                    whiteSpace="normal"
                    h="auto"
                    py={2}
                    px={3}
                    justifyContent="flex-start"
                    fontWeight="normal"
                    onClick={() => setSelected(faq)}
                    _hover={{ bg: 'blue.50', borderColor: 'blue.400' }}
                  >
                    {faq.q}
                  </Button>
                ))}
              </VStack>
            ) : (
              <VStack align="stretch" spacing={4}>
                <Button
                  size="xs"
                  leftIcon={<Icon as={FaArrowLeft} />}
                  variant="ghost"
                  colorScheme="blue"
                  onClick={() => setSelected(null)}
                  alignSelf="flex-start"
                >
                  All questions
                </Button>

                <Box bg="blue.50" rounded="lg" p={4} borderLeft="3px solid" borderColor="brand.500">
                  <Text fontWeight="bold" color="brand.900" fontSize="sm" mb={2}>
                    {selected.q}
                  </Text>
                  <Text fontSize="sm" color="gray.700" lineHeight="1.6">
                    {selected.a}
                  </Text>
                </Box>

                <Divider />

                <Text fontSize="sm" color="gray.500" fontStyle="italic" textAlign="center">
                  Need help choosing the right policy? Book a free consultation with Your Policy Saathi.
                </Text>

                <HStack spacing={2}>
                  <Button
                    as={Link}
                    href={WHATSAPP_URL}
                    isExternal
                    size="sm"
                    flex={1}
                    bg="green.500"
                    color="white"
                    leftIcon={<Icon as={FaWhatsapp} />}
                    _hover={{ bg: 'green.600', textDecoration: 'none' }}
                  >
                    WhatsApp Us
                  </Button>
                  <Button
                    as={Link}
                    href={CALL_URL}
                    size="sm"
                    flex={1}
                    bg="brand.900"
                    color="white"
                    leftIcon={<Icon as={FaPhone} />}
                    _hover={{ bg: 'brand.800', textDecoration: 'none' }}
                  >
                    Call Now
                  </Button>
                </HStack>

                <Button
                  as={Link}
                  href="#book-a-call"
                  size="sm"
                  variant="outline"
                  colorScheme="blue"
                  onClick={handleClose}
                  _hover={{ bg: 'blue.50', textDecoration: 'none' }}
                >
                  Book a Free Consultation →
                </Button>
              </VStack>
            )}
          </Box>
        </Box>
      )}

      {/* Trigger button */}
      <Tooltip label="Ask Your Policy Saathi" placement="left" isDisabled={isOpen}>
        <Button
          onClick={isOpen ? handleClose : handleOpen}
          bg="brand.900"
          color="white"
          rounded="full"
          w="60px"
          h="60px"
          p={0}
          boxShadow="lg"
          _hover={{ bg: 'brand.800', transform: 'scale(1.05)' }}
          transition="all 0.3s"
          aria-label="Open insurance assistant chatbot"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Icon as={isOpen ? FaTimes : FaRobot} w={6} h={6} />
        </Button>
      </Tooltip>
    </Box>
  );
};

export default InsuranceChatbot;
