import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import CompanyLogo from "../Images/Company_Logo.PNG";

type HeaderProps = {};

const Links = ["Home", "About", "Partners","Services", "FAQ", "Contact"];
const NavLinks = {
  Home: "#home",
  About: "#about",
  Partners: "#partners",
  Services: "#services",
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
      bg="#f6c445"
      px={4}
      boxShadow="md"
      zIndex={10}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Flex alignItems="center">
            <Box
              position="relative"
              mr={3}
              borderRadius="full"
              p={2}
              backdropFilter="auto"
              backdropBlur="8px"
            >
              <Image
                src={CompanyLogo}
                alt="Your Policy Saathi Logo"
                boxSize="40px"
                borderRadius="full"
              />
            </Box>
            <Box fontWeight="bold" fontSize="xl" color="brand.900">
              Your Policy Saathi
            </Box>
          </Flex>
          <HStack as={"nav"} spacing={6} display={{ base: "none", md: "flex" }}>
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

        <HStack spacing={4}>
          {" "}
          <Tooltip label="Contact us on WhatsApp" placement="bottom">
            <Link
              href="https://wa.me/918248633617?text=Hello,%20I'm%20interested%20in%20LIC%20services"
              isExternal
              display="flex"
              alignItems="center"
              color="green.500"
              _hover={{ color: "green.600" }}
            >
              <Icon as={FaWhatsapp} w={5} h={5} />
            </Link>
          </Tooltip>
          <Tooltip label="Follow us on Instagram" placement="bottom">
            <Link
              href="https://www.instagram.com/your_policy_saathi"
              isExternal
              display="flex"
              alignItems="center"
              color="brand.900"
              _hover={{ color: "brand.700" }}
            >
              <Icon as={FaInstagram} w={5} h={5} />
            </Link>
          </Tooltip>
        </HStack>
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color="brand.900">Your Policy Saathi</DrawerHeader>

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
                  href="https://wa.me/919843430099?text=Hello,%20I'm%20interested%20in%20LIC%20services"
                  isExternal
                  display="flex"
                  alignItems="center"
                  color="green.500"
                >
                  <Icon as={FaWhatsapp} w={5} h={5} mr={2} /> WhatsApp
                </Link>

                <Link
                  href="https://www.instagram.com/your_policy_saathi"
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
