import React from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import {
  FaShieldAlt,
  FaHeartbeat,
  FaCar,
  FaMotorcycle,
  FaPlane,
  FaHome,
  FaCheckCircle,
  FaMoneyBillWave,
} from "react-icons/fa";

interface ServiceCardProps {
  title: string;
  text: string;
  icon: React.ReactElement;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  text,
  icon,
  features,
}) => {
  return (
    <Box
      maxW={"330px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={6}
      overflow={"hidden"}
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
        borderColor: "whiteAlpha.300",
      }}
      border="1px solid"
      borderColor="whiteAlpha.200"
      position="relative"
      zIndex={1}
    >
      <Stack align={"center"} spacing={5}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={"#315098"}
          mb={1}
        >
          {icon}
        </Flex>
        <Heading
          color={useColorModeValue("gray.700", "white")}
          fontSize={"2xl"}
          fontFamily={"body"}
        >
          {title}
        </Heading>
        <Text color={"gray.500"} fontSize={"sm"} textAlign={"center"}>
          {text}
        </Text>
        <Stack spacing={3} w={"full"} mt={2}>
          {features.map((feature, index) => (
            <HStack key={index} spacing={2} align={"start"}>
              <Icon as={FaCheckCircle} color={"#FFD700"} w={5} h={5} mt={1} />
              <Text fontSize={"sm"}>{feature}</Text>
            </HStack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

interface ServicesProps {
  id: string;
}

const Services: React.FC<ServicesProps> = ({ id }) => {
  // Yellow theme animation
  const yellowPulse = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  `;

  const yellowAnimation = `${yellowPulse} 15s ease infinite`;

  return (
    <Box
      id={id}
      as="section"
      py={24}
      position="relative"
      overflow="hidden"
      minH="100vh"
      backgroundColor="#315098"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.9,
        zIndex: 0,
      }}
    >
      <Container maxW={"7xl"} position="relative" zIndex={1}>
        <Stack
          spacing={4}
          as={Container}
          maxW={"3xl"}
          textAlign={"center"}
          mb={16}
        >
          <Heading
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight={"bold"}
            color="white"
            mb={4}
          >
            Our Services
          </Heading>
          <Text color={"whiteAlpha.900"} fontSize={"xl"}>
            We offer a comprehensive range of insurance solutions to protect
            you, your family, and your assets.
          </Text>
        </Stack>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          px={{ base: 2, md: 4 }}
          justifyItems="center"
          mb={16}
        >
          <ServiceCard
            icon={<Icon as={FaShieldAlt} w={10} h={10} />}
            title={"LIFE INSURANCE"}
            text={"Secure your family's future with life insurance plans"}
            features={[
              "Various plan types to suit your needs",
              "Tax benefits under Section 80C",
              "Maturity benefits and bonuses",
            ]}
          />
          <ServiceCard
            icon={<Icon as={FaHeartbeat} w={10} h={10} />}
            title={"HEALTH INSURANCE"}
            text={
              "Quality healthcare coverage for you and your family with Star Health Insurance."
            }
            features={[
              "Individual and family floater plans",
              "Cashless treatment at 10,000+ hospitals",
              "Coverage for pre and post hospitalization",
            ]}
          />
          <ServiceCard
            icon={<Icon as={FaMoneyBillWave} w={10} h={10} />}
            title={"HOUSING LOAN FINANCE"}
            text={
              "Access flexible loan options with competitive interest rates."
            }
            features={[
              "Attractive interest rates",
              "Quick approval process",
              "Flexible repayment options",
            ]}
          />
          <ServiceCard
            icon={<Icon as={FaCar} w={10} h={10} />}
            title={"VEHICLE INSURANCE"}
            text={
              "Protect your vehicle with comprehensive or third-party insurance coverage."
            }
            features={[
              "Comprehensive vs third-party options",
              "No-claim bonus (NCB) benefits",
              "Add-ons like zero-dep, roadside assistance",
              "Personal accident cover",
              "Insured Declared Value (IDV) protection",
              "Quick claim settlement process",
            ]}
          />

          <ServiceCard
            icon={<Icon as={FaPlane} w={10} h={10} />}
            title={"TRAVEL INSURANCE"}
            text={
              "Worry-free travel with comprehensive coverage for domestic and international trips."
            }
            features={[
              "International coverage",
              "Medical expenses and evacuation",
              "Trip cancellation and delays",
              "Lost luggage and passport assistance",
            ]}
          />
          <ServiceCard
            icon={<Icon as={FaHome} w={10} h={10} />}
            title={"BUILDING INSURANCE"}
            text={
              "Shield your property from unforeseen damages, natural disasters, and more."
            }
            features={[
              "Protection against fire and theft",
              "Natural disaster coverage",
              "Third-party liability",
              "Cost-effective premium options",
            ]}
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Services;
