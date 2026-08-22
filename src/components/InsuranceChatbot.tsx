import React, { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  IconButton,
  Button,
  Flex,
  Link,
  Icon,
  keyframes,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaArrowLeft, FaWhatsapp, FaPhone } from 'react-icons/fa';

const pulseRing = keyframes`
  0%   { transform: scale(1);    opacity: 0.7; }
  70%  { transform: scale(1.55); opacity: 0; }
  100% { transform: scale(1.55); opacity: 0; }
`;

const dotBounce = keyframes`
  0%, 80%, 100% { transform: translateY(0);   opacity: 0.4; }
  40%            { transform: translateY(-6px); opacity: 1;   }
`;

interface FaqItem {
  emoji: string;
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    emoji: '?',
    q: 'What is a PED waiting period?',
    a: 'A Pre-Existing Disease (PED) waiting period is the time you must wait before your health insurance covers treatments for conditions you had before taking the policy. This typically ranges from 2 to 4 years depending on the insurer and condition.',
  },
  {
    emoji: '??',
    q: 'What is a ULIP?',
    a: 'A Unit Linked Insurance Plan (ULIP) combines life insurance with market-linked investment. Part of your premium goes towards life coverage; the rest is invested in equity, debt, or balanced funds of your choice.',
  },
  {
    emoji: '??',
    q: 'How much health insurance should I have?',
    a: 'A general rule is at least ?5–10 lakhs per family member. Given rising medical costs, a base plan of ?5 lakhs combined with a top-up of ?10–20 lakhs is widely recommended.',
  },
  {
    emoji: '??',
    q: 'What documents are required?',
    a: 'Documents vary by insurance type. Generally: Aadhaar/ID proof, PAN card, passport-size photo, and bank details. For health insurance, height & weight and medical reports may also be needed. Check the "Documents Required" section for full details.',
  },
  {
    emoji: '??',
    q: "Term vs. Life insurance — what's the difference?",
    a: 'Term insurance provides pure death benefit for a fixed period at low premiums. Life/endowment insurance covers you for a longer period and may include savings or investment components, with higher premiums.',
  },
  {
    emoji: '?',
    q: 'What is a waiting period in health insurance?',
    a: 'A waiting period is a time frame after buying the policy during which certain illnesses are not covered. Initial waiting periods are usually 30 days; specific disease waiting periods can range from 1–4 years.',
  },
  {
    emoji: '??',
    q: 'What is a cashless claim?',
    a: 'A cashless claim lets you receive treatment at a network hospital without paying upfront. The insurer settles the bill directly with the hospital. You only pay amounts not covered by the policy.',
  },
  {
    emoji: '???',
    q: 'What is a top-up health insurance policy?',
    a: 'A top-up plan adds coverage above a set deductible. For example, a ?20 lakh top-up with ?5 lakh deductible pays for claims above ?5 lakhs — a cost-effective way to enhance existing coverage.',
  },
  {
    emoji: '???',
    q: 'What is a room-rent limit?',
    a: 'Room-rent limit is the maximum your insurer pays for hospital room charges per day. If you choose a room above this limit, you may pay the difference and proportional costs of other services.',
  },
  {
    emoji: '??',
    q: 'What is a co-payment?',
    a: 'Co-payment (co-pay) is a fixed percentage of the claim you pay from your own pocket, while the insurer covers the rest. For example, a 10% co-pay means you pay 10% of every claim amount.',
  },
];

const WHATSAPP_URL =
  'https://wa.me/919360533056?text=Hi!%20I%20need%20help%20choosing%20the%20right%20policy.%20Can%20I%20book%20a%20free%20consultation%3F';
const CALL_URL = 'tel:+919360533056';

const TypingDots: React.FC = () => (
  <HStack
    spacing={1}
    bg="white"
    px={4}
    py={3}
    rounded="2xl"
    roundedBottomLeft="sm"
    boxShadow="sm"
    w="fit-content"
  >
    {[0, 1, 2].map((i) => (
      <Box
        key={i}
        w="7px"
        h="7px"
        bg="gray.400"
        rounded="full"
        animation={`${dotBounce} 1.2s ease-in-out ${i * 0.2}s infinite`}
      />
    ))}
  </HStack>
);

const InsuranceChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<FaqItem | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setSelected(null);
    setIsTyping(false);
    setShowAnswer(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelected(null);
    setIsTyping(false);
    setShowAnswer(false);
  };

  const handleSelectFaq = (faq: FaqItem) => {
    setSelected(faq);
    setIsTyping(true);
    setShowAnswer(false);
    setTimeout(() => {
      setIsTyping(false);
      setShowAnswer(true);
    }, 1200);
  };

  const handleBack = () => {
    setSelected(null);
    setIsTyping(false);
    setShowAnswer(false);
  };

  return (
    <Box position="fixed" bottom="185px" right="30px" zIndex={1000}>
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, scale: 0.88, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 16 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            style={{ marginBottom: '14px' }}
          >
            <Box
              bg="gray.50"
              rounded="2xl"
              boxShadow="0 24px 64px rgba(0,0,0,0.18)"
              w={{ base: 'calc(100vw - 50px)', sm: '370px' }}
              maxH={{ base: 'calc(100vh - 220px)', md: '520px' }}
              display="flex"
              flexDirection="column"
              overflow="hidden"
              border="1px solid"
              borderColor="gray.100"
            >
              {/* Gradient header */}
              <Flex
                bgGradient="linear(135deg, brand.900 0%, blue.700 100%)"
                px={4}
                py={3}
                align="center"
                justify="space-between"
                flexShrink={0}
              >
                <HStack spacing={3}>
                  <Flex
                    w="42px"
                    h="42px"
                    bg="white"
                    rounded="full"
                    align="center"
                    justify="center"
                    fontSize="xl"
                    boxShadow="0 4px 12px rgba(0,0,0,0.2)"
                    flexShrink={0}
                  >
                    ??
                  </Flex>
                  <Box>
                    <Text color="white" fontWeight="bold" fontSize="sm" lineHeight="1.2">
                      Saathi AI
                    </Text>
                    <HStack spacing={1.5} mt="1px">
                      <Box w="6px" h="6px" bg="green.300" rounded="full" />
                      <Text color="whiteAlpha.800" fontSize="2xs">
                        Online · Here to help
                      </Text>
                    </HStack>
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

              {/* Chat body */}
              <Box
                flex={1}
                overflowY="auto"
                p={4}
                sx={{
                  '&::-webkit-scrollbar': { width: '4px' },
                  '&::-webkit-scrollbar-thumb': {
                    background: 'var(--chakra-colors-gray-300)',
                    borderRadius: 'full',
                  },
                }}
              >
                {!selected ? (
                  <VStack align="stretch" spacing={2.5}>
                    {/* Bot welcome bubble */}
                    <HStack align="flex-end" spacing={2}>
                      <Flex
                        w="28px"
                        h="28px"
                        bg="brand.900"
                        rounded="full"
                        align="center"
                        justify="center"
                        fontSize="xs"
                        flexShrink={0}
                      >
                        ??
                      </Flex>
                      <Box
                        bg="white"
                        rounded="2xl"
                        roundedBottomLeft="sm"
                        px={4}
                        py={3}
                        boxShadow="sm"
                        maxW="85%"
                      >
                        <Text fontSize="sm" color="gray.700" lineHeight="1.55">
                          ?? Hi! I'm{' '}
                          <Text as="span" fontWeight="bold" color="brand.900">
                            Saathi AI
                          </Text>
                          . Tap a question for an instant answer!
                        </Text>
                      </Box>
                    </HStack>

                    {/* FAQ buttons */}
                    {FAQS.map((faq) => (
                      <Button
                        key={faq.q}
                        size="sm"
                        bg="white"
                        color="gray.700"
                        textAlign="left"
                        whiteSpace="normal"
                        h="auto"
                        py={2.5}
                        px={3}
                        justifyContent="flex-start"
                        fontWeight="normal"
                        fontSize="xs"
                        onClick={() => handleSelectFaq(faq)}
                        boxShadow="sm"
                        rounded="xl"
                        borderLeft="3px solid"
                        borderColor="blue.300"
                        _hover={{
                          bg: 'blue.50',
                          borderColor: 'blue.500',
                          transform: 'translateX(3px)',
                          boxShadow: 'md',
                        }}
                        transition="all 0.15s"
                      >
                        <Text as="span" mr={2} fontSize="sm">
                          {faq.emoji}
                        </Text>
                        {faq.q}
                      </Button>
                    ))}
                  </VStack>
                ) : (
                  <VStack align="stretch" spacing={3}>
                    <Button
                      size="xs"
                      leftIcon={<Icon as={FaArrowLeft} />}
                      variant="ghost"
                      colorScheme="blue"
                      onClick={handleBack}
                      alignSelf="flex-start"
                    >
                      All questions
                    </Button>

                    {/* User bubble */}
                    <Flex justify="flex-end">
                      <Box
                        bgGradient="linear(135deg, blue.500, purple.500)"
                        rounded="2xl"
                        roundedBottomRight="sm"
                        px={4}
                        py={3}
                        maxW="80%"
                        boxShadow="md"
                      >
                        <Text fontSize="2xs" color="whiteAlpha.700" mb={0.5}>
                          You asked
                        </Text>
                        <Text fontSize="sm" color="white" fontWeight="medium">
                          {selected.emoji} {selected.q}
                        </Text>
                      </Box>
                    </Flex>

                    {/* Typing indicator */}
                    {isTyping && (
                      <HStack align="flex-end" spacing={2}>
                        <Flex
                          w="26px"
                          h="26px"
                          bg="brand.900"
                          rounded="full"
                          align="center"
                          justify="center"
                          fontSize="2xs"
                          flexShrink={0}
                        >
                          ??
                        </Flex>
                        <TypingDots />
                      </HStack>
                    )}

                    {/* Bot answer bubble */}
                    {showAnswer && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <HStack align="flex-end" spacing={2}>
                          <Flex
                            w="26px"
                            h="26px"
                            bg="brand.900"
                            rounded="full"
                            align="center"
                            justify="center"
                            fontSize="2xs"
                            flexShrink={0}
                          >
                            ??
                          </Flex>
                          <Box
                            bg="white"
                            rounded="2xl"
                            roundedBottomLeft="sm"
                            px={4}
                            py={3}
                            boxShadow="sm"
                            maxW="85%"
                            borderLeft="3px solid"
                            borderColor="accent.500"
                          >
                            <Text fontSize="sm" color="gray.700" lineHeight="1.65">
                              {selected.a}
                            </Text>
                          </Box>
                        </HStack>
                      </motion.div>
                    )}

                    {/* Action buttons */}
                    {showAnswer && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.15 }}
                      >
                        <VStack spacing={2} mt={1}>
                          <Text
                            fontSize="xs"
                            color="gray.400"
                            fontStyle="italic"
                            textAlign="center"
                          >
                            Need personal guidance? We're here ??
                          </Text>
                          <HStack spacing={2} w="full">
                            <Button
                              as={Link}
                              href={WHATSAPP_URL}
                              isExternal
                              size="sm"
                              flex={1}
                              bgGradient="linear(to-r, green.400, green.600)"
                              color="white"
                              leftIcon={<Icon as={FaWhatsapp} />}
                              _hover={{
                                bgGradient: 'linear(to-r, green.500, green.700)',
                                textDecoration: 'none',
                                transform: 'translateY(-1px)',
                              }}
                              rounded="xl"
                              boxShadow="sm"
                              transition="all 0.2s"
                            >
                              WhatsApp
                            </Button>
                            <Button
                              as={Link}
                              href={CALL_URL}
                              size="sm"
                              flex={1}
                              bgGradient="linear(to-r, brand.800, brand.900)"
                              color="white"
                              leftIcon={<Icon as={FaPhone} />}
                              _hover={{
                                bgGradient: 'linear(to-r, brand.700, brand.800)',
                                textDecoration: 'none',
                                transform: 'translateY(-1px)',
                              }}
                              rounded="xl"
                              boxShadow="sm"
                              transition="all 0.2s"
                            >
                              Call Now
                            </Button>
                          </HStack>
                          <Button
                            as={Link}
                            href="#book-a-call"
                            size="sm"
                            w="full"
                            bgGradient="linear(to-r, purple.400, blue.500)"
                            color="white"
                            onClick={handleClose}
                            _hover={{
                              bgGradient: 'linear(to-r, purple.500, blue.600)',
                              textDecoration: 'none',
                              transform: 'translateY(-1px)',
                            }}
                            rounded="xl"
                            boxShadow="sm"
                            transition="all 0.2s"
                          >
                            ?? Book a Free Consultation
                          </Button>
                        </VStack>
                      </motion.div>
                    )}
                  </VStack>
                )}
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger button with pulse ring */}
      <Flex justify="flex-end">
        <Box position="relative" display="inline-flex" alignItems="center" justifyContent="center">
          {!isOpen && (
            <Box
              position="absolute"
              w="62px"
              h="62px"
              rounded="full"
              bg="accent.400"
              animation={`${pulseRing} 2s ease-out infinite`}
              pointerEvents="none"
            />
          )}
          <Button
            onClick={isOpen ? handleClose : handleOpen}
            bgGradient={
              isOpen
                ? 'linear(to-br, brand.800, brand.900)'
                : 'linear(135deg, brand.900 0%, blue.700 100%)'
            }
            color="white"
            rounded="full"
            w="62px"
            h="62px"
            p={0}
            boxShadow="xl"
            _hover={{ transform: 'scale(1.08)', boxShadow: '2xl' }}
            transition="all 0.25s"
            aria-label="Open insurance assistant chatbot"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <Icon as={isOpen ? FaTimes : FaRobot} w={6} h={6} />
              </motion.div>
            </AnimatePresence>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default InsuranceChatbot;
