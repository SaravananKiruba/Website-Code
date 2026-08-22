import React, { useRef } from "react";
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaShieldAlt,
  FaHeartbeat,
  FaCar,
  FaPlane,
  FaHome,
  FaCheckCircle,
  FaMoneyBillWave,
} from "react-icons/fa";

const fadeUp           = { hidden: { opacity: 0, y: 40 },              show: { opacity: 1, y: 0,    transition: { duration: 0.6, ease: 'easeOut' as const } } };
const cardPop          = { hidden: { opacity: 0, y: 30, scale: 0.96 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' as const } } };
const staggerContainer = { hidden: {},                                  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const viewport         = { once: true, amount: 0.15 } as const;

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
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width  - 0.5;
    const y = (e.clientY - top)  / height - 0.5;
    el.style.transform = `perspective(700px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateY(-8px) scale(1.02)`;
    el.style.boxShadow = `${-x * 20}px ${y * 20}px 40px rgba(0,0,0,0.35)`;
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = 'perspective(700px) rotateY(0deg) rotateX(0deg) translateY(0) scale(1)';
    el.style.boxShadow = '';
  };

  return (
    <Box
      ref={cardRef as any}
      maxW={"330px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={6}
      overflow={"hidden"}
      transition="transform 0.15s ease, box-shadow 0.15s ease"
      border="1px solid"
      borderColor={"whiteAlpha.200"}
      position="relative"
      zIndex={1}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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
  return (
    <Box
      id={id}
      as="section"
      py={24}
      position="relative"
      overflow="hidden"
      minH="100vh"
      bgGradient="linear(to-br, #0a0c4e, #10126d, #1a2d8a)"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgImage: "radial-gradient(circle at 20% 50%, rgba(72,147,237,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(246,196,69,0.08) 0%, transparent 50%)",
        opacity: 0.9,
        zIndex: 0,
      }}
    >
      <Container maxW={"7xl"} position="relative" zIndex={1}>
        <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={staggerContainer}>
        <Stack
          spacing={4}
          as={motion.div}
          variants={fadeUp}
          maxW={"3xl"}
          textAlign={"center"}
          mb={16}
          mx="auto"
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
          as={motion.div}
          variants={staggerContainer}
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          px={{ base: 2, md: 4 }}
          justifyItems="center"
          mb={16}
        >
          <motion.div variants={cardPop} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
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
          </motion.div>
          <motion.div variants={cardPop} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
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
          </motion.div>
          <motion.div variants={cardPop} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
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
          </motion.div>
          <motion.div variants={cardPop} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
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
          </motion.div>

          <motion.div variants={cardPop} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
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
          </motion.div>
          <motion.div variants={cardPop} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
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
          </motion.div>
        </SimpleGrid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Services;
