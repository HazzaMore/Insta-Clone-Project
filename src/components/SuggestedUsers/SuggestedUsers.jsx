import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import { VStack, Flex, Text, Box, Link } from "@chakra-ui/react";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";

const SuggestedUsers = () => {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers();

  // optional: render skeleton
  if (isLoading) return null;

  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      {suggestedUsers.length !== 0 && (
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
          <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            Suggested for you
          </Text>
          <Text
            fontSize={12}
            fontWeight={"bold"}
            _hover={{ color: "gray.500" }}
            cursor={"pointer"}
          >
            See All
          </Text>
        </Flex>
      )}

      {suggestedUsers.map((user) => (
        <SuggestedUser key={user.id} user={user} />
      ))}

      <Box alignSelf={"center"} fontSize={12} color={"gray.500"} marginTop={5}>
        © 2024 Built By{" "}
        <Link
          href="https://harrymoore.cloud"
          target="_blank"
          color={"blue.500"}
          fontSize={12}
        >
          Harry Moore
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
