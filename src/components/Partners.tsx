import React, { useRef, useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

interface PartnersProps {
  id: string;
}

const Partners: React.FC<PartnersProps> = ({ id }) => {
  // Reference images directly with require to avoid TypeScript import issues
  const partners = [
    { 
      logo: require('../Images/LIC LOGO.png'), 
      alt: 'LIC Logo' 
    },
    { 
      logo: require('../Images/LIC HFL.png'), 
      alt: 'LIC HFL Logo' 
    },
    { 
      logo: require('../Images/STAR HEALTH.png'), 
      alt: 'Star Health Logo' 
    },
    { 
      logo: require('../Images/NEW INDIA ASSURANCE.png'), 
      alt: 'New India Assurance Logo' 
    },
  ];

  const marqueeRef = useRef<HTMLDivElement>(null);
  const cardBgColor = useColorModeValue('white', 'gray.800');
  
  // State for storing the selected image for the modal
  const [selectedImage, setSelectedImage] = useState<{ src: string, alt: string } | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  // Function to handle image click
  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    onOpen();
  };
  
  // Define marquee animation
  const marqueeAnimation = keyframes`
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  `;

  // Clone the partners for continuous flow
  const allPartners = [...partners, ...partners];

  return (
    <Box id={id} as="section" py={12} bg="white">
      <Container maxW={'7xl'}>
        <Heading
          fontSize={{ base: '2xl', sm: '3xl' }}
          fontWeight={'bold'}
          textAlign={'center'}
          mb={10}
          color={'brand.900'}
        >
          Our Trusted Partners
        </Heading>
        <Text
          color={'gray.600'}
          fontSize={'lg'}
          textAlign={'center'}
          mb={10}
        >
          We're proud to be associated with these leading insurance providers
        </Text>

        {/* Marquee container */}
        <Box 
          width="100%" 
          overflow="hidden"
          position="relative"
          py={6}
        >
          <Flex
            ref={marqueeRef}
            animation={`${marqueeAnimation} 20s linear infinite`}
            whiteSpace="nowrap"
            alignItems="center"
            justifyContent="center"
            _hover={{ animationPlayState: 'paused' }}
          >
            {allPartners.map((partner, index) => (
              <Flex
                key={index}
                direction="column"
                align="center"
                justify="center"
                bg={cardBgColor}
                boxShadow={'md'}
                rounded={'lg'}
                p={6}
                mx={4}
                minW={{ base: "180px", md: "250px" }}
                h={{ base: "180px", md: "200px" }}
                transition="transform 0.3s ease"
                _hover={{
                  transform: 'scale(1.05)',
                  boxShadow: 'lg',
                  zIndex: 1,
                  cursor: 'pointer'
                }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  maxH={{ base: "150px", md: "170px" }}
                  maxW={{ base: "150px", md: "220px" }}
                  objectFit="contain"
                  onClick={() => handleImageClick(partner.logo, partner.alt)}
                />
              </Flex>
            ))}
          </Flex>
        </Box>
        
        {/* Image Zoom Modal */}
        <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
          <ModalOverlay backgroundColor="rgba(0, 0, 0, 0.75)" />
          <ModalContent bg="transparent" boxShadow="none" maxW="90vw">
            <ModalCloseButton color="white" size="lg" top={-10} right={-10} />
            <ModalBody p={0} display="flex" justifyContent="center" alignItems="center">
              {selectedImage && (
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  maxH="80vh"
                  maxW="90vw"
                  objectFit="contain"
                  borderRadius="md"
                />
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
};

export default Partners;