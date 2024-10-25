import { Box, Flex } from "@chakra-ui/react";
import { CreatePostLogo } from "../../assets/constants";
import { Tooltip } from "../ui/tooltip";

const CreatePost = () => {
  return (
    <>
      <Tooltip
        // showArrow
        content={"Create"}
        positioning={{ placement: "right-end" }}
        ml={1}
        openDelay={500}
        closeDelay={100}
        display={{ base: "block", md: "none" }}
      >
        <Flex
          alignItems={"center"}
          gap={4}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          <CreatePostLogo />
          <Box display={{ base: "none", md: "block" }}>Create</Box>
        </Flex>
      </Tooltip>
    </>
  );
};

export default CreatePost;
