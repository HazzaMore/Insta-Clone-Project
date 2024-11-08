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
import { timeAgo } from "../../utils/timeAgo";

const PostFooter = ({ post, isProfilePage, creatorProfile }) => {

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

      {/* If within the profile page we can see the posted time ago */}
      {isProfilePage && (
        <Text fontSize="12" color={"gray"}>
          Posted {timeAgo(post.createdAt)}
        </Text>
      )}

      {/* Outside of profile page, hence the footer used in the main feed */}
      {!isProfilePage && (
        <>
          <Text fontWeight={700} fontSize={"sm"}>
            {creatorProfile?.username}
            <Box as="span" fontWeight={400} ml={2}>
              {post.caption}
            </Box>
          </Text>
          
            {post.comments.length > 0 && (
              <Text fontSize={"sm"} color={"gray"} cursor={"pointer"}>
                View all {post.comments.length} comments
              </Text>
            )} 
          
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
