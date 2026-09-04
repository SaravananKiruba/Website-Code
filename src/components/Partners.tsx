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
    <Box 
      id={id} 
      as="section" 
      py={28}
      bgGradient="linear(135deg, #ffffff 0%, #f0f4ff 50%, #fffaf0 100%)"
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgImage: "radial-gradient(circle at 20% 50%, rgba(72,147,237,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(246,196,69,0.06) 0%, transparent 50%)",
        zIndex: 0,
      }}
    >
      <Container maxW={'7xl'} position="relative" zIndex={1}>
        <Heading
          fontSize={{ base: '2.5xl', sm: '4xl' }}
          fontWeight={'900'}
          textAlign={'center'}
          mb={4}
          color={'brand.900'}
        >
          Our Trusted Partners
        </Heading>
        <Text
          color={'gray.700'}
          fontSize={{ base: 'md', md: 'lg' }}
          textAlign={'center'}
          mb={12}
          fontWeight="500"
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