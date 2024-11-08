import { Box, Container, Flex, VStack, Text } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle } from "../ui/skeleton";
import FeedPost from "./FeedPost";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";

const FeedPosts = () => {
  const { isLoading, posts } = useGetFeedPosts();

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={"10"} />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height={"10px"} width={"200px"} />
                <Skeleton height={"10px"} width={"200px"} />
              </VStack>
            </Flex>
            <Skeleton width={"100%"}>
              <Box h={"400px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading &&
        posts.length > 0 &&
        posts.map((post) => <FeedPost key={post.id} post={post} />)}

      {!isLoading && posts.length === 0 && (
        <>
          <Text fontSize={"md"} color={"red.400"}>
            Looks like you are not following anyone!
          </Text>
          <Text color={"red.400"}>Don't worry, search a user and add your friends today!</Text>
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
