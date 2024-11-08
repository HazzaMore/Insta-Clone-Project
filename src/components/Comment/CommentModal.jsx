// may not be required, just open the post instead



// --------------------- Example of working modal with chakra 3.0 ---------------------
// --------------------------- Orginal example below that -----------------------------

// import { GridItem, Flex, Text, Image, VStack } from "@chakra-ui/react";
// import { Button } from "../ui/button";
// import { Avatar } from "../ui/avatar";

// import {
//   DialogBody,
//   DialogCloseTrigger,
//   DialogContent,
//   DialogRoot,
//   DialogTrigger,
// } from "../ui/dialog";

// import Comment from "../Comment/Comment";
// import { AiFillHeart } from "react-icons/ai";
// import { FaComment } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import PostFooter from "../FeedPosts/PostFooter";
// import useUserProfileStore from "../../store/userProfileStore";
// import useAuthStore from "../../store/authStore";
// import useShowToast from "../../hooks/useShowToast";
// import { useState } from "react";
// import { deleteObject, ref } from "firebase/storage";
// import { firestore, storage } from "../../firebase/firebase";
// import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
// import usePostStore from "../../store/postStore";
// import Caption from "../Comment/Caption";

// <DialogContent>
//           <DialogCloseTrigger />
//           <DialogBody bg={"black"} pb={5}>
//             <Flex
//               gap="4"
//               w={{ base: "90%", sm: "70%", md: "full" }}
//               mx={"auto"}
//               divideX="2px"
//               // maxH={"90vh"}
//               // maxW={"50vh"}
//             >
//               {/* Left Hand Side of Popup */}
//               <Flex
//                 borderRadius={4}
//                 overflow={"hidden"}
//                 border={"1px solid"}
//                 borderColor={"whiteAlpha.300"}
//                 flex={1.5}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//               >
//                 <Image src={post.imageURL} alt="Profile Post" />
//               </Flex>
//               {/* Right hand Side of Popup */}
//               <Flex
//                 flex={1}
//                 flexDir={"column"}
//                 px={10}
//                 display={{ base: "none", md: "flex" }}
//                 divideY="2px"
//               >
//                 <Flex
//                   alignItems={"center"}
//                   justifyContent={"space-between"}
//                   py={2}
//                 >
//                   {/* Profile Header */}
//                   <Flex alignItems={"center"} gap={4}>
//                     <Avatar
//                       src={userProfile.profilePicURL}
//                       size={"sm"}
//                       name="HazzaMore"
//                     />
//                     <Text fontWeight={"bold"} fontSize={12}>
//                       {userProfile.username}
//                     </Text>
//                   </Flex>
//                   {authUser?.uid === userProfile.uid && (
//                     <Button
//                       size={"sm"}
//                       bg={"transparent"}
//                       color={"white"}
//                       _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
//                       borderRadius={4}
//                       p={1}
//                       onClick={handleDeletePost}
//                       loading={isDeleting}
//                     >
//                       <MdDelete size={20} cursor={"pointer"} />
//                     </Button>
//                   )}
//                 </Flex>
//                 <VStack
//                   w="full"
//                   alignItems={"start"}
//                   maxH={"350px"}
//                   overflowY={"auto"}
//                   py={4}
//                   gap={4}
//                 >
//                   {/* CAPTION */}
//                   {post.caption && <Caption post={post} />}
//                   {/* COMMENTS */}
//                   {post.comments.map((comment) => (
//                     <Comment key={comment.id} comment={comment} />
//                   ))}
//                 </VStack>
//                 <PostFooter isProfilePage={true} post={post} />
//               </Flex>
//             </Flex>
//           </DialogBody>
//         </DialogContent>

// --------------------------- Example form tutorial ---------------------------


// import {
// 	Button,
// 	Flex,
// 	Input,
// 	Modal,
// 	ModalBody,
// 	ModalCloseButton,
// 	ModalContent,
// 	ModalHeader,
// 	ModalOverlay,
// } from "@chakra-ui/react";
// import Comment from "../Comment/Comment";
// import usePostComment from "../../hooks/usePostComment";
// import { useEffect, useRef } from "react";

// const CommentsModal = ({ isOpen, onClose, post }) => {
// 	const { handlePostComment, isCommenting } = usePostComment();
// 	const commentRef = useRef(null);
// 	const commentsContainerRef = useRef(null);
// 	const handleSubmitComment = async (e) => {
// 		// do not refresh the page, prevent it
// 		e.preventDefault();
// 		await handlePostComment(post.id, commentRef.current.value);
// 		commentRef.current.value = "";
// 	};

// 	useEffect(() => {
// 		const scrollToBottom = () => {
// 			commentsContainerRef.current.scrollTop = commentsContainerRef.current.scrollHeight;
// 		};
// 		if (isOpen) {
// 			setTimeout(() => {
// 				scrollToBottom();
// 			}, 100);
// 		}
// 	}, [isOpen, post.comments.length]);

// 	return (
// 		<Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInLeft'>
// 			<ModalOverlay />
// 			<ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
// 				<ModalHeader>Comments</ModalHeader>
// 				<ModalCloseButton />
// 				<ModalBody pb={6}>
// 					<Flex
// 						mb={4}
// 						gap={4}
// 						flexDir={"column"}
// 						maxH={"250px"}
// 						overflowY={"auto"}
// 						ref={commentsContainerRef}
// 					>
// 						{post.comments.map((comment, idx) => (
// 							<Comment key={idx} comment={comment} />
// 						))}
// 					</Flex>
// 					<form onSubmit={handleSubmitComment} style={{ marginTop: "2rem" }}>
// 						<Input placeholder='Comment' size={"sm"} ref={commentRef} />
// 						<Flex w={"full"} justifyContent={"flex-end"}>
// 							<Button type='submit' ml={"auto"} size={"sm"} my={4} isLoading={isCommenting}>
// 								Post
// 							</Button>
// 						</Flex>
// 					</form>
// 				</ModalBody>
// 			</ModalContent>
// 		</Modal>
// 	);
// };

// export default CommentsModal;