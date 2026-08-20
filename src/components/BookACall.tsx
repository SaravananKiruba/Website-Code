import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Input,
  Select,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  SimpleGrid,
  Alert,
  AlertIcon,
  Icon,
  HStack,
  Divider,
  Link,
} from '@chakra-ui/react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

interface FormState {
  name: string;
  mobile: string;
  whatsapp: string;
  insurance: string;
  date: string;
  time: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  mobile: '',
  whatsapp: '',
  insurance: '',
  date: '',
  time: '',
  message: '',
};

interface BookACallProps {
  id: string;
}

const BookACall: React.FC<BookACallProps> = ({ id }) => {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNum = form.whatsapp.trim() || form.mobile.trim();
    const msg =
      `*\u{1F4CB} New Consultation Request \u2013 Your Policy Saathi*\n\n` +
      `\u{1F464} *Name:* ${form.name}\n` +
      `\u{1F4F1} *Mobile:* ${form.mobile}\n` +
      `\u{1F4AC} *WhatsApp:* ${whatsappNum}\n` +
      `\u{1F6E1} *Insurance:* ${form.insurance}\n` +
      `\u{1F4C5} *Preferred Date:* ${form.date || 'Not specified'}\n` +
      `\u{23F0} *Preferred Time:* ${form.time || 'Not specified'}\n` +
      `\u{1F4DD} *Message:* ${form.message || 'No additional message'}`;
    window.open(
      `https://wa.me/919360533056?text=${encodeURIComponent(msg)}`,
      '_blank',
      'noopener,noreferrer'
    );
    setSubmitted(true);
  };

  return (
    <Box
      id={id}
      as="section"
      py={24}
      bgGradient="linear(to-br, brand.900, brand.700)"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative circle */}
      <Box
        position="absolute"
        top="-80px"
        right="-80px"
        w="320px"
        h="320px"
        rounded="full"
        bg="whiteAlpha.50"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-60px"
        left="-60px"
        w="240px"
        h="240px"
        rounded="full"
        bg="whiteAlpha.50"
        pointerEvents="none"
      />

      <Container maxW="3xl" position="relative" zIndex={1}>
        <VStack spacing={3} mb={12} textAlign="center">
          <Heading fontSize={{ base: '3xl', sm: '4xl' }} fontWeight="bold" color="white">
            Book a Free Consultation
          </Heading>
          <Text color="whiteAlpha.800" fontSize="xl">
            Fill in your details and our team will reach out to discuss your requirement.
          </Text>
        </VStack>

        <Box bg="white" rounded="2xl" p={{ base: 6, md: 10 }} boxShadow="2xl">
          {submitted ? (
            <VStack spacing={6} py={8} textAlign="center">
              <Alert status="success" rounded="lg" flexDirection="column" py={6}>
                <AlertIcon boxSize={8} mb={3} />
                <Text fontWeight="bold" fontSize="lg">Request Received!</Text>
                <Text color="gray.600" mt={1}>
                  Our team will contact you shortly to discuss your requirement.
                </Text>
              </Alert>
              <Button
                onClick={() => setSubmitted(false)}
                bg="accent.500"
                color="brand.900"
                fontWeight="bold"
                _hover={{ bg: 'accent.600' }}
              >
                Submit Another Request
              </Button>
            </VStack>
          ) : (
            <form onSubmit={handleSubmit}>
              <VStack spacing={6}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} w="full">
                  <FormControl isRequired>
                    <FormLabel color="gray.600" fontWeight="semibold">Name</FormLabel>
                    <Input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      focusBorderColor="brand.500"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel color="gray.600" fontWeight="semibold">Mobile Number</FormLabel>
                    <Input
                      name="mobile"
                      value={form.mobile}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      type="tel"
                      maxLength={10}
                      focusBorderColor="brand.500"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel color="gray.600" fontWeight="semibold">
                      WhatsApp Number
                    </FormLabel>
                    <Input
                      name="whatsapp"
                      value={form.whatsapp}
                      onChange={handleChange}
                      placeholder="If different from mobile"
                      type="tel"
                      maxLength={10}
                      focusBorderColor="brand.500"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel color="gray.600" fontWeight="semibold">
                      Insurance Requirement
                    </FormLabel>
                    <Select
                      name="insurance"
                      value={form.insurance}
                      onChange={handleChange}
                      placeholder="Select insurance type"
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

                  <FormControl>
                    <FormLabel color="gray.600" fontWeight="semibold">Preferred Date</FormLabel>
                    <Input
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      type="date"
                      focusBorderColor="brand.500"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel color="gray.600" fontWeight="semibold">Preferred Time</FormLabel>
                    <Select
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      placeholder="Select time slot"
                      focusBorderColor="brand.500"
                    >
                      <option>9:00 AM – 11:00 AM</option>
                      <option>11:00 AM – 1:00 PM</option>
                      <option>2:00 PM – 4:00 PM</option>
                      <option>4:00 PM – 6:00 PM</option>
                      <option>6:00 PM – 8:00 PM</option>
                    </Select>
                  </FormControl>
                </SimpleGrid>

                <FormControl w="full">
                  <FormLabel color="gray.600" fontWeight="semibold">
                    Message / Requirement
                  </FormLabel>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your insurance needs…"
                    rows={4}
                    focusBorderColor="brand.500"
                    resize="vertical"
                  />
                </FormControl>

                <Button
                  type="submit"
                  size="lg"
                  w="full"
                  bg="accent.500"
                  color="brand.900"
                  fontWeight="bold"
                  leftIcon={<Icon as={FaPhone} />}
                  _hover={{ bg: 'accent.600', transform: 'translateY(-1px)' }}
                  transition="all 0.2s"
                >
                  Book My Free Consultation
                </Button>

                <Divider />

                <HStack spacing={4} justify="center" flexWrap="wrap">
                  <Text fontSize="sm" color="gray.500">Or reach us directly:</Text>
                  <Button
                    as={Link}
                    href="https://wa.me/919360533056"
                    isExternal
                    size="sm"
                    leftIcon={<Icon as={FaWhatsapp} />}
                    bg="green.500"
                    color="white"
                    _hover={{ bg: 'green.600', textDecoration: 'none' }}
                  >
                    WhatsApp
                  </Button>
                  <Button
                    as={Link}
                    href="tel:+919360533056"
                    size="sm"
                    leftIcon={<Icon as={FaPhone} />}
                    bg="brand.900"
                    color="white"
                    _hover={{ bg: 'brand.800', textDecoration: 'none' }}
                  >
                    Call Now
                  </Button>
                </HStack>
              </VStack>
            </form>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default BookACall;
