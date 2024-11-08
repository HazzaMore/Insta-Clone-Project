import { Flex, Box, Text, Button, Input } from "@chakra-ui/react";
import { InputGroup } from "../ui/input-group";
import {
  NotificationsLogo,
  UnlikeLogo,
  CommentLogo,
} from "../../assets/constants";
import { useState, useRef } from "react";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore";
import useLikePost from "../../hooks/useLikePost";

const PostFooter = ({ post, username, isProfilePage }) => {

  const { isCommenting, handlePostComment } = usePostComment();
  const [comment, setComment] = useState("");
  const authUser = useAuthStore((state) => state.user);
  const commentRef = useRef(null);
  const {handleLikePost, isLiked, likes} = useLikePost(post);

  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment);
    setComment("");
  };


  return (
    <Box marginTop={"auto"}>
      <Flex alignItems={"center"} gap={4} width={"full"} pt={0} mb={2} my={4}>
        <Box onClick={handleLikePost} cursor={"pointer"} fontSize={18}>
          {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18} onClick={() => commentRef.current.focus()}>
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
              ref={commentRef}
            />
          </InputGroup>
        </Flex>

      )}
    </Box>
  );
};

export default PostFooter;
