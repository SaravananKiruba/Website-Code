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
import { FaTrophy, FaStar, FaUserTie } from "react-icons/fa";

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
        transform: "translateY(-8px)",
        boxShadow: "2xl",
      }}
      transition="all 0.3s"
      height="100%"
      borderTop="4px solid"
      borderColor="brand.600"
    >
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"2xl"}
        bgGradient="linear(135deg, brand.600, brand.800)"
        mb={4}
        boxShadow="0 8px 20px rgba(72,147,237,0.3)"
      >
        {icon}
      </Flex>
      <Heading fontSize={"xl"} fontFamily={"body"} textAlign="center" mb={2} color="brand.900" fontWeight="700">
        {title}
      </Heading>
      <Text fontWeight={600} color={"accent.600"} mb={4} textAlign="center">
        {organization}
      </Text>
      <Divider mb={4} />
      <VStack align="start" spacing={3} w="100%">
        {points.map((point, index) => (
          <HStack key={index} align="start" spacing={2}>
            <Icon as={FaStar} color="accent.500" mt={1} />
            <Text textAlign="left" color="gray.700">{point}</Text>
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
    <Box 
      id={id} 
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
      <Container maxW={"7xl"} position="relative" zIndex={1}>
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
            fontWeight={900}
            fontSize={{ base: "2.5xl", sm: "4xl", md: "5xl" }}
            lineHeight={"110%"}
            color={"brand.900"}
          >
            Professional <br />
            <Text as={"span"} bgGradient="linear(90deg, brand.600, accent.500)" bgClip="text" color="transparent">
              Achievements
            </Text>
          </Heading>
          <Text
            color="gray.700"
            fontSize={{ base: "md", md: "xl" }}
            maxW={"3xl"}
            margin="0 auto"
            fontWeight="500"
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
