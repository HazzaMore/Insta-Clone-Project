import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { Image, Box } from "@chakra-ui/react";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";

const FeedPost = ({ post }) => {
  const {userProfile}= useGetUserProfileById(post.createdBy);
  return (
    <>
      <PostHeader post={post} creatorProfile={userProfile}/>
      <Box my={2} borderRadius={4} overflow={"hidden"}>
        <Image src={post.imageURL} alt="feed post IMG" />
      </Box>
      <PostFooter post={post} creatorProfile={userProfile} />
    </>
  );
};

export default FeedPost;
