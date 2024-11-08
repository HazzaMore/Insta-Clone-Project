import { Flex, Box, Text, Button, Input } from "@chakra-ui/react";
import { InputGroup } from "../ui/input-group";
import {
  NotificationsLogo,
  UnlikeLogo,
  CommentLogo,
} from "../../assets/constants";
import { useState } from "react";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore";

const PostFooter = ({ post, username, isProfilePage }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const { isCommenting, handlePostComment } = usePostComment();
  const [comment, setComment] = useState("");
  const authUser = useAuthStore((state) => state.user);

  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment);
    setComment("");
  };

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
      {authUser && (
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
                onClick={handleSubmitComment}
                loading={isCommenting}
              >
                Post
              </Button>
            }
          >
            <Input
              variant={"flushed"}
              placeholder={"Add a comment ..."}
              fontSize={14}
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            />
          </InputGroup>
        </Flex>

      )}
    </Box>
  );
};

export default PostFooter;
