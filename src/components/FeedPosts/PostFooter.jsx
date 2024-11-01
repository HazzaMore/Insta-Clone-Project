import { Flex, Box, Text, Button, Input } from "@chakra-ui/react";
import { InputGroup } from "../ui/input-group";
import {
  NotificationsLogo,
  UnlikeLogo,
  CommentLogo,
} from "../../assets/constants";
import { useState } from "react";

const PostFooter = ({ username, isProfilePage }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);
  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <Box marginTop={"auto"}>
      <Flex alignItems={"center"} gap={4} width={"full"} pt={0} mb={2} my={4}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>
      {!isProfilePage && (
        <>
          <Text fontWeight={700} fontSize={"sm"}>
            {username}
            <Box as="span" fontWeight={400} ml={2}>
              Feeling Good
            </Box>
          </Text>
          <Text fontSize={"sm"} color={"gray"}>
            View all 1,000 comments
          </Text>
        </>
      )}
      <Flex alignItems={"center"} gap={2} justifyContent={"space-between"}>
        <InputGroup
          w={"full"}
          endElement={
            <Button
              fontSize={14}
              color={"blue.500"}
              fontWeight={600}
              cursor={"pointer"}
              _hover={{ color: "white" }}
              bg={"transparent"}
            >
              Post
            </Button>
          }
        >
          <Input
            variant={"flushed"}
            placeholder={"Add a comment ..."}
            fontSize={14}
          />
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default PostFooter;
