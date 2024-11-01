import { Flex, VStack, Text, Button } from "@chakra-ui/react";
import { AvatarGroup, Avatar } from "../ui/Avatar";

const ProfileHeader = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
        size={{ base: "xl", md: "2xl" }}
      >
        <Avatar  name="HazzaMore" src="/profilepic.png" alt="HazzaMore Logo" />
      </AvatarGroup>
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
					gap={4}
					direction={{ base: "column", sm: "row" }}
					justifyContent={{ base: "center", sm: "flex-start" }}
					alignItems={"center"}
					w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}> HazzaMore </Text>
          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button
              bg={"white"}
              color={"black"}
              _hover={{ bg: "whiteAlpha.800" }}
              size={{ base: "xs", md: "sm" }}
            >
              Edit Profile
            </Button>
          </Flex>
        </Flex>
        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{ base: "xm", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              4
            </Text>
            Posts
          </Text>
          <Text fontSize={{ base: "xm", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              149
            </Text>
            Followers
          </Text>
          <Text fontSize={{ base: "xm", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              175
            </Text>
            Following
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            HazzaMore
          </Text>
        </Flex>
        <Text fontSize={"sm"}> This is a bio about myself </Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
