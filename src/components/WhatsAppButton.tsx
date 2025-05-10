import React from 'react';
import { Box, Link, Icon, Tooltip, VStack } from '@chakra-ui/react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  return (
    <VStack
      position="fixed"
      bottom="30px"
      right="30px"
      zIndex={999}
      spacing={4}
    >
      {/* Instagram Button */}
      <Tooltip label="Follow us on Instagram" placement="left">
        <Link
          href="https://www.instagram.com/your_policy_saathi"
          isExternal
        >
          <Box
            as="span"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="purple.500"
            w="50px"
            h="50px"
            color="white"
            rounded="full"
            boxShadow="lg"
            _hover={{ 
              transform: 'scale(1.1)',
              bg: 'purple.600'
            }}
            transition="all 0.3s ease"
          >
            <Icon as={FaInstagram} w={6} h={6} />
          </Box>
        </Link>      </Tooltip>      {/* WhatsApp Button */}      <Tooltip label="Contact our agents via WhatsApp" placement="left">
        <Link
          href="https://wa.me/918248633617?text=Hi%20Jigar!%20I'm%20interested%20in%20learning%20more%20about%20your%20insurance%20services.%20Can%20you%20please%20share%20some%20details?%20What%20types%20of%20insurance%20do%20you%20offer,%20and%20how%20can%20I%20get%20a%20quote%20or%20more%20information?%20Looking%20forward%20to%20hearing%20back%20from%20you!"
          isExternal
        >
          <Box
            as="span"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="green.500"
            w="60px"
            h="60px"
            color="white"
            rounded="full"
            boxShadow="lg"
            _hover={{ 
              transform: 'scale(1.1)',
              bg: 'green.600'
            }}
            transition="all 0.3s ease"
          >
            <Icon as={FaWhatsapp} w={8} h={8} />
          </Box>
        </Link>
      </Tooltip>
    </VStack>
  );
};

export default WhatsAppButton;