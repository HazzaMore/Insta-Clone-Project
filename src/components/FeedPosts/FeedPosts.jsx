import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle } from "../ui/Skeleton";
import FeedPost from "./FeedPost";
import { useState, useEffect } from "react";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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
              <Box h={"500px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <FeedPost
            username={"Hermoine"}
            avatar={"/img1.png"}
            img={"/img1.png"}
          />
          <FeedPost username={"Max"} avatar={"/img2.png"} img={"/img2.png"} />
          <FeedPost username={"Beth"} avatar={"/img3.png"} img={"/img3.png"} />
          <FeedPost
            username={"Jeremy"}
            avatar={"/img4.png"}
            img={"/img4.png"}
          />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
