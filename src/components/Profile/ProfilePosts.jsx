import { Box, Grid, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Skeleton } from "../ui/skeleton";
import { useState } from "react";
import ProfilePost from "./ProfilePost";

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a call to an API
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Grid
      templateColumns={{
        sm: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
        [0, 1, 2, 3, 4, 5].map((_, idx) => (
          <VStack key={idx} alignItems={"flex-start"} gap={4}>
            <Skeleton w={"full"}>
              <Box h="300px">content wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <ProfilePost img="/img1.png"/>
          <ProfilePost img="/img2.png"/>
          <ProfilePost img="/img3.png"/>
          <ProfilePost img="/img4.png"/>
        </>
      )}
    </Grid>
  );
};

export default ProfilePosts;
