import React from "react";
// Fabrica font will be loaded from global CSS or theme
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  Icon,
  Tooltip,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import CompanyLogo from "../Images/Company_Logo.jpeg";

type HeaderProps = {};

const Links = ["Home", "Services", "Documents", "About", "Book a Call", "Why Choose Us", "FAQ", "Contact"];
const NavLinks = {
  Home: "#home",
  Services: "#services",
  Documents: "#documents",
  About: "#about",
  "Book a Call": "#book-a-call",
  "Why Choose Us": "#why-choose-us",
  FAQ: "#faq",
  Contact: "#contact",
};

const Header: React.FC<HeaderProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    if (isOpen) onClose();
  };

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      bgGradient="linear(to-r, #f6c445, #f9d157, #e7b42a)"
      px={4}
      boxShadow="0 8px 24px rgba(0,0,0,0.12)"
      zIndex={10}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ lg: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={{ base: 2, sm: 4, md: 8 }} alignItems={"center"}>
          <Flex alignItems="center" flexWrap="nowrap">
            <Box
              position="relative"
              mr={{ base: 1, sm: 2, md: 3 }}
              borderRadius="full"
              p={{ base: 1, md: 2 }}
              backdropFilter="auto"
              backdropBlur="8px"
            >
              <Image
                src={CompanyLogo}
                alt="Your Policy Saathi Logo"
                boxSize={{ base: "30px", md: "40px" }}
                borderRadius="full"
              />
            </Box>            <Text              fontWeight="700" 
              fontSize={{ base: "md", sm: "lg", md: "2xl" }} 
              color="brand.900"
              letterSpacing="wide"
              fontFamily="'Rajdhani', sans-serif"
              textShadow="0px 1px 2px rgba(0,0,0,0.1)"
              whiteSpace="nowrap"
              sx={{
                textTransform: "capitalize"
              }}
            >
              Your Policy Saathi
            </Text>
          </Flex>
          <HStack as={"nav"} spacing={3} display={{ base: "none", lg: "flex" }}>
            {Links.map((link) => (
              <Link
                key={link}
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  color: "brand.900",
                }}
                href={NavLinks[link as keyof typeof NavLinks]}
              >
                {link}
              </Link>
            ))}
          </HStack>
        </HStack>

        <HStack spacing={{ base: 2, md: 4 }}>
          <Tooltip label="Contact us on WhatsApp" placement="bottom">
            <Link
              href="https://wa.me/919360533056?text=Hello,%20I'm%20interested%20in%20LIC%20services"
              isExternal
              display="flex"
              alignItems="center"
              color="green.500"
              _hover={{ color: "green.600" }}
            >
              <Icon as={FaWhatsapp} w={{ base: 4, md: 5 }} h={{ base: 4, md: 5 }} />
            </Link>
          </Tooltip>
          <Tooltip label="Follow us on Instagram" placement="bottom">
            <Link
              href="https://www.instagram.com/your__policy__saathi?igsh=MWxzdzZ1cW94ZGx2bQ%3D%3D&utm_source=qr"
              isExternal
              display="flex"
              alignItems="center"
              color="brand.900"
              _hover={{ color: "brand.700" }}
            >
              <Icon as={FaInstagram} w={{ base: 4, md: 5 }} h={{ base: 4, md: 5 }} />
            </Link>
          </Tooltip>
        </HStack>
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>          <DrawerCloseButton />          <DrawerHeader 
            color="brand.900" 
            fontFamily="'Rajdhani', sans-serif"
            letterSpacing="wide"
            textShadow="0px 1px 2px rgba(0,0,0,0.1)"
          >
            Your Policy Saathi
          </DrawerHeader>

          <DrawerBody>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Link
                  key={link}
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: "brand.100",
                  }}
                  href={NavLinks[link as keyof typeof NavLinks]}
                  onClick={handleClick}
                >
                  {link}
                </Link>
              ))}

              <HStack spacing={4} pt={4}>
                <Link
                  href="https://wa.me/919360533056?text=Hello,%20I'm%20interested%20in%20LIC%20services"
                  isExternal
                  display="flex"
                  alignItems="center"
                  color="green.500"
                >
                  <Icon as={FaWhatsapp} w={5} h={5} mr={2} /> WhatsApp
                </Link>

                <Link
                  href="https://www.instagram.com/your__policy__saathi?igsh=MWxzdzZ1cW94ZGx2bQ%3D%3D&utm_source=qr"
                  isExternal
                  display="flex"
                  alignItems="center"
                  color="brand.900"
                >
                  <Icon as={FaInstagram} w={5} h={5} mr={2} /> Instagram
                </Link>
              </HStack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
