import { Box, Flex, Textarea, Fieldset, Input, Image } from "@chakra-ui/react";
import { CreatePostLogo } from "../../assets/constants";
import { Tooltip } from "../ui/tooltip";
import { Button } from "../ui/button";
import { CloseButton } from "../ui/close-button";
import { useState, useRef } from "react";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { BsFillImageFill } from "react-icons/bs";
import usePreviewImg from "../../hooks/usePreviewImg";
import useShowToast from "../../hooks/useShowToast";
import useAuthStore from "../../store/authStore";
import usePostStore from "../../store/postStore";
import useUserProfileStore from "../../store/userProfileStore";
import { useLocation } from "react-router-dom";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { firestore, storage } from "../../firebase/firebase";
import { getDownloadURL, uploadString, ref } from "firebase/storage";

const CreatePost = () => {
  const [open, setOpen] = useState(false);
  const [caption, setCaption] = useState("");
  const imageRef = useRef(null);
  const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();
  const { isLoading, handleCreatePost } = useCreatePost();
  const showToast = useShowToast();

  const handlePostCreation = async () => {
    try {
      await handleCreatePost(selectedFile, caption);
      setOpen(false);
      setCaption("");
      setSelectedFile(null);
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return (
    <>
      <DialogRoot
        lazyMount
        motionPreset="slide-in-left"
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
      >
        <Tooltip
          // showArrow
          content={"Create"}
          positioning={{ placement: "right-end" }}
          ml={1}
          openDelay={500}
          closeDelay={100}
          display={{ base: "block", md: "none" }}
        >
          <DialogTrigger asChild>
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
          </DialogTrigger>
        </Tooltip>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Post</DialogTitle>
          </DialogHeader>
          <DialogBody pb={6}>
            <Fieldset.Root>
              <Textarea
                placeholder="Post caption..."
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
              />
              <Input
                type="file"
                hidden
                ref={imageRef}
                onChange={handleImageChange}
              />
              <BsFillImageFill
                onClick={() => imageRef.current.click()}
                style={{
                  marginTop: "15px",
                  marginLeft: "5px",
                  cursor: "pointer",
                }}
                size={16}
              />
              {selectedFile && (
                <Flex
                  mt={5}
                  w={"full"}
                  position={"relative"}
                  justifyContent={"center"}
                >
                  <Image src={selectedFile} alt="Selected img" />
                  <CloseButton
                    position={"absolute"}
                    top={2}
                    right={2}
                    onClick={() => {
                      setSelectedFile(null);
                    }}
                  />
                </Flex>
              )}
            </Fieldset.Root>
          </DialogBody>
          <DialogFooter>
            <Button mr={3} onClick={handlePostCreation} loading={isLoading}>
              Post
            </Button>
          </DialogFooter>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    </>
  );
};

export default CreatePost;

function useCreatePost() {
  const showToast = useShowToast();
  const [isLoading, setIsLoading] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const createPost = usePostStore((state) => state.createPost);
  const addPost = useUserProfileStore((state) => state.addPost);
  const userProfile = useUserProfileStore((state) => state.userProfile);
  const { pathname } = useLocation();

  // console.log("User UID:", authUser ? authUser.uid : "authUser is null");
  // console.log("User Profile UID:", userProfile ? userProfile.uid : "userProfile is null");

  const handleCreatePost = async (selectedFile, caption) => {
    if (isLoading) return;
    if (!selectedFile) throw new Error("Please select an image");
    if (!authUser) throw new Error("User information is missing");
    if (!userProfile) {
      showToast("Error", "User profile information is missing", "error");
      return;
    }
    setIsLoading(true);
    const newPost = {
      caption: caption,
      likes: [],
      comments: [],
      createdAt: Date.now(),
      createdBy: authUser.uid,
    };

    try {
      const postDocRef = await addDoc(collection(firestore, "posts"), newPost);
      const userDocRef = doc(firestore, "users", authUser.uid);
      const imageRef = ref(storage, `posts/${postDocRef.id}`);

      await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) });
      await uploadString(imageRef, selectedFile, "data_url");
      const downloadURL = await getDownloadURL(imageRef);

      await updateDoc(postDocRef, { imageURL: downloadURL });

      newPost.imageURL = downloadURL;

      // Only update the posts locally if we are on our own profile page
      // otherwise a new post will appear on the profile page of whatever user we are viewing
      if (userProfile.uid === authUser.uid)
        createPost({ ...newPost, id: postDocRef.id });

      // We don't need to update the posts count locally if we aren't on the profile page, 
      // and it doesn't update the post count on the profile page of another user
      // if we create a post whilst on their page
      if (pathname !== "/" && userProfile.uid === authUser.uid)
        addPost({ ...newPost, id: postDocRef.id });

      showToast("Success", "Post created successfully", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
      console.error("Error creating post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleCreatePost };
}
