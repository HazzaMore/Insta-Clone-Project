import { GridItem, Flex, Text, Image, VStack } from "@chakra-ui/react";
import {
  DialogRoot,
  DialogTrigger,
} from "../ui/dialog";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

import PostModal from "../Modals/PostModal";


const ProfilePost = ({ post }) => {


  return (
    <>
      <DialogRoot placement="center" size={{ base: "sm", md: "xl" }}>
        {/* <DialogBackdrop /> */}
        <DialogTrigger>
          <GridItem
            cursor={"pointer"}
            borderRadius={4}
            overflow={"hidden"}
            border={"1px solid"}
            borderColor={"whiteAlpha.300"}
            position={"relative"}
            aspectRatio={1 / 1}
            // onClick={onOpen}
          >
            {/* Whats revealed on Hover (likes and comments) */}
            <Flex
              opacity={0}
              _hover={{ opacity: 1 }}
              position={"absolute"}
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg={"blackAlpha.700"}
              transition={"all 0.3s ease"}
              zIndex={1}
              justifyContent={"center"}
            >
              <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
                <Flex>
                  <AiFillHeart size={20} />
                  <Text fontWeight={"bold"} ml={2}>
                    {post.likes.length}
                  </Text>
                </Flex>
                <Flex>
                  <FaComment size={20} />
                  <Text fontWeight={"bold"} ml={2}>
                    {post.comments.length}
                  </Text>
                </Flex>
              </Flex>
            </Flex>

            {/* Image */}
            <Image
              src={post.imageURL}
              alt="profile post"
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
            />
          </GridItem>
        </DialogTrigger>
        <PostModal post={post} />
      </DialogRoot>
    </>
  );
};

export default ProfilePost;
