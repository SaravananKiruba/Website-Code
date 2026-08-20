import React from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  Icon,
  useColorModeValue,
  Flex,
  Heading,
} from "@chakra-ui/react";
import {
  FaHeadset,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const ListHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text fontWeight={"bold"} fontSize={"lg"} mb={2} color="white">
      {children}
    </Text>
  );
};

const Footer: React.FC = () => {  const phoneNumbers = [
    { number: "9360533056", display: "93605 33056" },
  ];

  return (
    <Box as="footer" bg="brand.900" color="white">
      <Container as={Stack} maxW={"7xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Heading as="h2" size="lg" letterSpacing="tight">
                Your Policy Saathi
              </Heading>
              <Text fontSize="xs" color="accent.500" fontWeight="semibold" letterSpacing="widest" textTransform="uppercase" mt={1}>
                Insurance Advisors
              </Text>
            </Box>
            <Text fontSize={"sm"} color="whiteAlpha.700" lineHeight="1.8">
              Your trusted advisor for Life, Health, Vehicle & more.
              Serving families across Tamil Nadu since 2005.
            </Text>
            <Stack direction={"row"} spacing={6}>
              <Link
                href="https://www.instagram.com/your__policy__saathi?igsh=MWxzdzZ1cW94ZGx2bQ%3D%3D&utm_source=qr"
                isExternal
              >
                <Icon
                  as={FaInstagram}
                  w={6}
                  h={6}
                  _hover={{ color: "brand.500" }}
                />
              </Link>
              <Link
                href="https://www.facebook.com/share/15P4Rf1cspi/?mibextid=wwXIfr"
                isExternal
              >
                <Icon
                  as={FaFacebook}
                  w={6}
                  h={6}
                  _hover={{ color: "brand.500" }}
                />
              </Link>
              <Link
                href="https://youtube.com/@your_policy_saathi?si=tErHURO14K7Rl1bZ"
                isExternal
              >
                <Icon
                  as={FaYoutube}
                  w={6}
                  h={6}
                  _hover={{ color: "brand.500" }}
                />
              </Link>
            </Stack>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Quick Links</ListHeader>
            <Link href="#home">Home</Link>
            <Link href="#about">About Us</Link>
            <Link href="#services">Services</Link>
            <Link href="#faq">FAQ</Link>
            <Link href="#contact">Contact</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Insurance Products</ListHeader>
            <Link href="#services">Life Insurance</Link>
            <Link href="#services">Health Insurance</Link>
            <Link href="#services">Vehicle Insurance</Link>
            <Link href="#services">Travel Insurance</Link>
            <Link href="#services">Building Insurance</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Contact Us</ListHeader>
            {phoneNumbers.map((phone, index) => (
              <Link
                key={index}
                href={`tel:${phone.number}`}
                display="flex"
                alignItems="center"
              >
                <Icon as={FaHeadset} mr={2} />
                <Text>{phone.display}</Text>
              </Link>
            ))}
            <Link
              href="mailto:founderofyourpolicysaathi@gmail.com"
              display="flex"
              alignItems="center"
            >
              <Icon as={FaEnvelope} mr={2} />
              <Text>founderofyourpolicysaathi@gmail.com</Text>
            </Link>
            <Flex align={"center"}>
              <Icon as={FaMapMarkerAlt} mr={2} />
              <Text>25, Pallikooda Street Madurai - 625001</Text>
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.600", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"7xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>
            © {new Date().getFullYear()} Your Policy Saathi. All rights reserved
          </Text>
          <Stack direction={"row"} spacing={6}>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Use</Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
