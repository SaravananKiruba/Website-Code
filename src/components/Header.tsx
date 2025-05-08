import React, { useState } from 'react';
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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

type HeaderProps = {};

const Links = ['Home', 'About', 'Services', 'FAQ', 'Contact'];
const NavLinks = {
  'Home': '#home',
  'About': '#about',
  'Services': '#services',
  'FAQ': '#faq',
  'Contact': '#contact'
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
      bg={useColorModeValue('white', 'gray.900')}
      px={4}
      boxShadow="md"
      zIndex={10}
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box fontWeight="bold" fontSize="xl" color="brand.900">LIC Insurance Agent</Box>
          <HStack
            as={'nav'}
            spacing={6}
            display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <Link
                key={link}
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  color: 'brand.900',
                }}
                href={NavLinks[link as keyof typeof NavLinks]}
              >
                {link}
              </Link>
            ))}
          </HStack>
        </HStack>
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color="brand.900">Menu</DrawerHeader>

          <DrawerBody>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link
                  key={link}
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: 'brand.100',
                  }}
                  href={NavLinks[link as keyof typeof NavLinks]}
                  onClick={handleClick}
                >
                  {link}
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;