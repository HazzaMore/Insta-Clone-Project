import { Flex, Text, Image, VStack } from "@chakra-ui/react";
import { Button } from "../ui/button";
import { Avatar } from "../ui/avatar";
import { DialogBody, DialogCloseTrigger, DialogContent } from "../ui/dialog";
import Comment from "../Comment/Comment";
import { MdDelete } from "react-icons/md";
import PostFooter from "../FeedPosts/PostFooter";
import useShowToast from "../../hooks/useShowToast";
import { useState } from "react";
import { deleteObject, ref } from "firebase/storage";
import { firestore, storage } from "../../firebase/firebase";
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import usePostStore from "../../store/postStore";
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";


import Caption from "../Comment/Caption";

const PostModal = ({ post }) => {
  const userProfile = useUserProfileStore((state) => state.userProfile);
  const authUser = useAuthStore((state) => state.user);
  const showToast = useShowToast();
  const deletePost = usePostStore((state) => state.deletePost);
  const decrementPostsCount = useUserProfileStore((state) => state.deletePost);

  // can replace this with a custom hook if to be used elsewhere
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeletePost = async () => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    if (isDeleting) return; // stops user clicking multiple times
    try {
      // remove the image from the firestore storage
      const imageRef = ref(storage, `posts/${post.id}`);
      await deleteObject(imageRef);
      // remove the post from the post collection
      await deleteDoc(doc(firestore, "posts", post.id));
      // remove from posts array held within the user in the user collection
      const userRef = doc(firestore, "users", authUser.uid);
      await updateDoc(userRef, {
        posts: arrayRemove(post.id),
      });

      //update user interface
      deletePost(post.id);
      decrementPostsCount(post.id);
      showToast("Success", "Post deleted successfully", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <DialogContent>
      <DialogCloseTrigger />
      <DialogBody bg={"black"} pb={5}>
        <Flex
          gap="4"
          w={{ base: "90%", sm: "70%", md: "full" }}
          mx={"auto"}
          divideX="2px"
          // maxH={"90vh"}
          // maxW={"50vh"}
        >
          {/* Left Hand Side of Popup */}
          <Flex
            borderRadius={4}
            overflow={"hidden"}
            border={"1px solid"}
            borderColor={"whiteAlpha.300"}
            flex={1.5}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image src={post.imageURL} alt="Profile Post" />
          </Flex>
          {/* Right hand Side of Popup */}
          <Flex
            flex={1}
            flexDir={"column"}
            px={10}
            display={{ base: "none", md: "flex" }}
            divideY="2px"
          >
            <Flex alignItems={"center"} justifyContent={"space-between"} py={2}>
              {/* Profile Header */}
              <Flex alignItems={"center"} gap={4}>
                <Avatar
                  src={userProfile.profilePicURL}
                  size={"sm"}
                  name="HazzaMore"
                />
                <Text fontWeight={"bold"} fontSize={12}>
                  {userProfile.username}
                </Text>
              </Flex>
              {authUser?.uid === userProfile.uid && (
                <Button
                  size={"sm"}
                  bg={"transparent"}
                  color={"white"}
                  _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                  borderRadius={4}
                  p={1}
                  onClick={handleDeletePost}
                  loading={isDeleting}
                >
                  <MdDelete size={20} cursor={"pointer"} />
                </Button>
              )}
            </Flex>
            <VStack
              w="full"
              alignItems={"start"}
              maxH={"350px"}
              overflowY={"auto"}
              py={4}
              gap={4}
            >
              {/* CAPTION */}
              {post.caption && <Caption post={post} />}
              {/* COMMENTS */}
              {post.comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </VStack>
            <PostFooter isProfilePage={true} post={post} />
          </Flex>
        </Flex>
      </DialogBody>
    </DialogContent>
  );
};

export default PostModal;
