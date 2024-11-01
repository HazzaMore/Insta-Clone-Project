import { GridItem, Flex, Text, Image, Box, VStack } from "@chakra-ui/react";
import { Avatar } from "../ui/Avatar";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogRoot,
  DialogTrigger,
} from "../ui/dialog";
import Comment from "../Comment/Comment";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import PostFooter from "../FeedPosts/PostFooter";

const ProfilePost = ({ img }) => {
  return (
    <>
      
      <DialogRoot placement="center" size={{base: "sm", md: "xl"}}>
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
                    7
                  </Text>
                </Flex>
                <Flex>
                  <FaComment size={20} />
                  <Text fontWeight={"bold"} ml={2}>
                    8
                  </Text>
                </Flex>
              </Flex>
            </Flex>

            {/* Image */}
            <Image
              src={img}
              alt="profile post"
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
            />
          </GridItem>
        </DialogTrigger>
        <DialogContent>
          <DialogCloseTrigger />
          <DialogBody bg={"black"} pb={5}>
            
            <Flex
              gap="4"
              w={{ base: "90%", sm: "70%", md: "full" }}
              mx={"auto"}
              divideX="2px"
            >
              {/* Left Hand Side of Popup */}
              <Box
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}
                
              >
                <Image src={img} alt="Profile Post" />
              </Box>
              {/* Right hand Side of Popup */}
              <Flex
                flex={1}
                flexDir={"column"}
                px={10}
                display={{ base: "none", md: "flex" }}
                divideY="2px"
              >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  {/* Profile Header */}
                  <Flex alignItems={"center"} gap={4}>
                    <Avatar
                      src="/profilepic.png"
                      size={"sm"}
                      name="HazzaMore"
                    />
                    <Text fontWeight={"bold"} fontSize={12}>
                      HazzaMore
                    </Text>
                  </Flex>
                  <Box
                    _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                    borderRadius={4}
                    p={1}
                  >
                    <MdDelete size={20} cursor={"pointer"} />
                  </Box>
                </Flex>
                <VStack
                  w="full"
                  alignItems={"start"}
                  maxH={"350px"}
                  overflowY={"auto"}
                >
                  <Comment
                    createdAt="2 hours ago"
                    username="HazzaMore"
                    profilePic="/profilepic.png"
                    text={"This is a comment"}
                  />
                  <Comment
                    createdAt="5 hours ago"
                    username="HazzaMore"
                    profilePic="/profilepic.png"
                    text={"I am farming engagement"}
                  />
                  <Comment
                    createdAt="5 hours ago"
                    username="HazzaMore"
                    profilePic="/profilepic.png"
                    text={"I am farming engagement"}
                  />
                  <Comment
                    createdAt="5 hours ago"
                    username="HazzaMore"
                    profilePic="/profilepic.png"
                    text={"I am farming engagement"}
                  />
                  <Comment
                    createdAt="5 hours ago"
                    username="HazzaMore"
                    profilePic="/profilepic.png"
                    text={"I am farming engagement"}
                  />
                  <Comment
                    createdAt="5 hours ago"
                    username="HazzaMore"
                    profilePic="/profilepic.png"
                    text={"I am farming engagement"}
                  />
                  <Comment
                    createdAt="5 hours ago"
                    username="HazzaMore"
                    profilePic="/profilepic.png"
                    text={"I am farming engagement"}
                  />
                  <Comment
                    createdAt="5 hours ago"
                    username="HazzaMore"
                    profilePic="/profilepic.png"
                    text={"I am farming engagement"}
                  />
                  <Comment
                    createdAt="5 hours ago"
                    username="HazzaMore"
                    profilePic="/profilepic.png"
                    text={"I am farming engagement"}
                  />
                  <Comment
                    createdAt="5 hours ago"
                    username="HazzaMore"
                    profilePic="/profilepic.png"
                    text={"I am farming engagement"}
                  />
                  <Comment
                    createdAt="5 hours ago"
                    username="HazzaMore"
                    profilePic="/profilepic.png"
                    text={"I am farming engagement"}
                  />
                  <Comment
                    createdAt="5 hours ago"
                    username="HazzaMore"
                    profilePic="/profilepic.png"
                    text={"I am farming engagement"}
                  />
                  <Comment
                    createdAt="5 hours ago"
                    username="HazzaMore"
                    profilePic="/profilepic.png"
                    text={"I am farming engagement"}
                  />
                </VStack>
                <PostFooter isProfilePage={true}/>
              </Flex>
            </Flex>
          </DialogBody>
        </DialogContent>
      </DialogRoot>
    </>
  );
};

export default ProfilePost;
