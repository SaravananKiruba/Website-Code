import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Input,
  Select,
  Button,
  FormControl,
  FormLabel,
  SimpleGrid,
  Alert,
  AlertIcon,
  Icon,
  Divider,
  HStack,
} from '@chakra-ui/react';
import { FaUserFriends, FaWhatsapp } from 'react-icons/fa';

interface FormState {
  yourName: string;
  yourMobile: string;
  friendName: string;
  friendMobile: string;
  insurance: string;
}

const INITIAL_FORM: FormState = {
  yourName: '',
  yourMobile: '',
  friendName: '',
  friendMobile: '',
  insurance: '',
};

interface ReferAFriendProps {
  id: string;
}

const ReferAFriend: React.FC<ReferAFriendProps> = ({ id }) => {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `*\u{1F91D} Referral \u2013 Your Policy Saathi*\n\n` +
      `*Referred by:*\n` +
      `\u{1F464} Name: ${form.yourName}\n` +
      `\u{1F4F1} Mobile: ${form.yourMobile}\n\n` +
      `*Referred Person:*\n` +
      `\u{1F465} Name: ${form.friendName}\n` +
      `\u{1F4F1} Mobile: ${form.friendMobile}\n` +
      `\u{1F6E1} Insurance Need: ${form.insurance}`;
    window.open(
      `https://wa.me/919360533056?text=${encodeURIComponent(msg)}`,
      '_blank',
      'noopener,noreferrer'
    );
    setSubmitted(true);
  };

  return (
    <Box id={id} as="section" py={24} bg="white">
      <Container maxW="5xl">
        <VStack spacing={4} mb={12} textAlign="center">
          <HStack spacing={3} justify="center">
            <Icon as={FaUserFriends} w={10} h={10} color="brand.900" />
          </HStack>
          <Heading fontSize={{ base: '3xl', sm: '4xl' }} fontWeight="bold" color="brand.900">
            Refer a Friend
          </Heading>
          <Text color="gray.600" fontSize="xl" maxW="2xl">
            Know someone who needs the right insurance guidance? Refer them to Your Policy Saathi and help them secure their future.
          </Text>
        </VStack>

        <Box
          bg="gray.50"
          rounded="2xl"
          p={{ base: 6, md: 10 }}
          boxShadow="lg"
          maxW="640px"
          mx="auto"
          border="1px solid"
          borderColor="gray.100"
        >
          {submitted ? (
            <VStack spacing={6} py={8} textAlign="center">
              <Alert status="success" rounded="lg" flexDirection="column" py={6}>
                <AlertIcon boxSize={8} mb={3} />
                <Text fontWeight="bold" fontSize="lg">Thank you for the referral!</Text>
                <Text color="gray.600" mt={1}>
                  We'll reach out to your friend shortly.
                </Text>
              </Alert>
              <Button
                onClick={() => { setSubmitted(false); setForm(INITIAL_FORM); }}
                bg="accent.500"
                color="brand.900"
                fontWeight="bold"
                _hover={{ bg: 'accent.600' }}
              >
                Refer Someone Else
              </Button>
            </VStack>
          ) : (
            <form onSubmit={handleSubmit}>
              <VStack spacing={6}>
                {/* Referrer details */}
                <Box w="full">
                  <HStack mb={4} spacing={2}>
                    <Box w={1} h={5} bg="accent.500" rounded="full" />
                    <Heading as="h3" size="sm" color="brand.900" textTransform="uppercase" letterSpacing="wide">
                      Your Details
                    </Heading>
                  </HStack>
                  <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
                    <FormControl isRequired>
                      <FormLabel color="gray.600" fontWeight="semibold">Your Name</FormLabel>
                      <Input
                        name="yourName"
                        value={form.yourName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        bg="white"
                        focusBorderColor="brand.500"
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel color="gray.600" fontWeight="semibold">Your Mobile Number</FormLabel>
                      <Input
                        name="yourMobile"
                        value={form.yourMobile}
                        onChange={handleChange}
                        placeholder="10-digit number"
                        type="tel"
                        maxLength={10}
                        bg="white"
                        focusBorderColor="brand.500"
                      />
                    </FormControl>
                  </SimpleGrid>
                </Box>

                <Divider />

                {/* Friend details */}
                <Box w="full">
                  <HStack mb={4} spacing={2}>
                    <Box w={1} h={5} bg="brand.500" rounded="full" />
                    <Heading as="h3" size="sm" color="brand.900" textTransform="uppercase" letterSpacing="wide">
                      Friend / Family Member Details
                    </Heading>
                  </HStack>
                  <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
                    <FormControl isRequired>
                      <FormLabel color="gray.600" fontWeight="semibold">Their Name</FormLabel>
                      <Input
                        name="friendName"
                        value={form.friendName}
                        onChange={handleChange}
                        placeholder="Friend's full name"
                        bg="white"
                        focusBorderColor="brand.500"
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel color="gray.600" fontWeight="semibold">Their Mobile Number</FormLabel>
                      <Input
                        name="friendMobile"
                        value={form.friendMobile}
                        onChange={handleChange}
                        placeholder="10-digit number"
                        type="tel"
                        maxLength={10}
                        bg="white"
                        focusBorderColor="brand.500"
                      />
                    </FormControl>
                  </SimpleGrid>
                </Box>

                <FormControl isRequired w="full">
                  <FormLabel color="gray.600" fontWeight="semibold">Insurance Requirement</FormLabel>
                  <Select
                    name="insurance"
                    value={form.insurance}
                    onChange={handleChange}
                    placeholder="Select insurance type"
                    bg="white"
                    focusBorderColor="brand.500"
                  >
                    <option>Life Insurance</option>
                    <option>Health Insurance</option>
                    <option>Term Insurance</option>
                    <option>Vehicle Insurance</option>
                    <option>Investment / ULIP</option>
                    <option>Other</option>
                  </Select>
                </FormControl>

                <Button
                  type="submit"
                  size="lg"
                  w="full"
                  bg="accent.500"
                  color="brand.900"
                  fontWeight="bold"
                  leftIcon={<Icon as={FaWhatsapp} />}
                  _hover={{ bg: 'accent.600', transform: 'translateY(-1px)' }}
                  transition="all 0.2s"
                >
                  Submit Referral
                </Button>
              </VStack>
            </form>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default ReferAFriend;
