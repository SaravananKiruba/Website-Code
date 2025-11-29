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
  Divider,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { FaTrophy, FaMedal, FaAward, FaStar, FaUserTie } from "react-icons/fa";

interface AchievementCardProps {
  title: string;
  organization: string;
  points: string[];
  icon: React.ReactElement;
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AchievementCard = ({
  title,
  organization,
  points,
  icon,
}: AchievementCardProps) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "xl",
      }}
      transition="all 0.3s"
      height="100%"
    >
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"blue.600"}
        mb={4}
      >
        {icon}
      </Flex>
      <Heading fontSize={"xl"} fontFamily={"body"} textAlign="center" mb={2}>
        {title}
      </Heading>
      <Text fontWeight={600} color={"blue.600"} mb={4} textAlign="center">
        {organization}
      </Text>
      <Divider mb={4} />
      <VStack align="start" spacing={3} w="100%">
        {points.map((point, index) => (
          <HStack key={index} align="start" spacing={2}>
            <Icon as={FaStar} color="blue.500" mt={1} />
            <Text textAlign="left">{point}</Text>
          </HStack>
        ))}
      </VStack>
    </Stack>
  );
};

interface AchievementsProps {
  id?: string;
}

const Achievements: React.FC<AchievementsProps> = ({ id }) => {
  return (
    <Box id={id} py={20} bg={useColorModeValue("gray.50", "gray.900")}>
      <Container maxW={"7xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 10 }}
          mb={20}
          css={{
            animation: `${fadeIn} 1s ease-out`,
          }}
        >
          <Heading
            fontWeight={800}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
            lineHeight={"110%"}
            color={"blue.600"}
          >
            Professional <br />
            <Text as={"span"} color={"blue.600"}>
              Achievements
            </Text>
          </Heading>
          <Text
            color={useColorModeValue("gray.600", "gray.300")}
            fontSize={{ base: "lg", md: "xl" }}
            maxW={"3xl"}
            margin="0 auto"
          >
            Recognizing excellence in insurance services with a proven track record of success and professional distinctions
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <AchievementCard
            icon={<Icon as={FaTrophy} w={8} h={8} />}
            title="Premium Agent Recognition"
            organization="Life Insurance Corporation (LIC)"
            points={[
              "No. 1 Agent in South Zone completing 1646 policies in 2011-12",
              "Chairman's Club Member",
              "MDRT Member since 2008",
              "LIAFI Agent Association EC Member since 2005"
            ]}
          />

          <AchievementCard
            icon={<Icon as={FaUserTie} w={8} h={8} />}
            title="Senior Sales Manager"
            organization="STAR Health Insurance"
            points={[
              "Senior Sales Manager since 2008",
              "Consistently exceeding sales targets",
              "Leading team performance in the region",
              "Expert in health insurance solutions"
            ]}
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Achievements;
