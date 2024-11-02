"use client";

import { Heading, Input, Stack, Center, Fieldset } from "@chakra-ui/react";
import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import { DialogActionTrigger } from "../ui/dialog";
import { useState, useRef } from "react";
import useAuthStore from "../../store/authStore";
import { RxCrossCircled } from "react-icons/rx";
import usePreviewImg from "../../hooks/usePreviewImg";
import useEditedProfile from "../../hooks/useEditProfile";
import useShowToast from "../../hooks/useShowToast";

const EditProfile = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    bio: "",
  });

  const authUser = useAuthStore((state) => state.user);
  const fileRef = useRef(null);
  const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();
  const { isUpdating, editProfile } = useEditedProfile();
  const showToast = useShowToast();

  const handleEditProfile = async () => {
    try {
      await editProfile(inputs, selectedFile);
      setSelectedFile(null);
      // onClose();
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  // const handleRemoveImage = () => {
  //   setSelectedFile(null);
  //   setInputs({ ...inputs, profilePicURL: "" });
  // };

  return (
    <Stack gap={4} rounded={"xl"} boxShadow={"lg"} px={6} py={8}>
      <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
        Edit Profile
      </Heading>

      <Fieldset.Root>
        <Fieldset.Legend>User Icon</Fieldset.Legend>
        <Stack direction={["column", "row"]} spacing={6}>
          <Center>
            <Avatar size="2xl" src={selectedFile || authUser.profilePicURL}>
              {/* Below is if I want to add the remove handleRemoveImage function */}
              {/* <div
                style={{
                  position: "absolute",
                  top: "-3px",
                  right: "-3px",
                  background: "red",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  // outline: "0.2em solid",
                  // outlineColor: "bg",
                  cursor: "pointer",
                }}
                // aria-label="Remove Image"
                // onClick={handleRemoveImage}
              >
                <RxCrossCircled />
              </div> */}
            </Avatar>
          </Center>
          <Center w="full" px={"20px"}>
            <Button w="full" onClick={() => fileRef.current.click()}>
              Edit Profile Picture
            </Button>
          </Center>
          {/* redirects the open files to other buttons, like above  */}
          <Input
            type="file"
            hidden
            ref={fileRef}
            onChange={handleImageChange}
          ></Input>
        </Stack>
      </Fieldset.Root>

      <Fieldset.Root>
        <Fieldset.Legend>Full Name</Fieldset.Legend>
        <Input
          placeholder="your full name"
          _placeholder={{ color: "gray.500" }}
          type="text"
          value={inputs.fullname || authUser.fullname}
          onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
        />
      </Fieldset.Root>

      <Fieldset.Root>
        <Fieldset.Legend>User Name</Fieldset.Legend>
        <Input
          placeholder="Username"
          _placeholder={{ color: "gray.500" }}
          type="text"
          value={inputs.username || authUser.username}
          onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
        />
      </Fieldset.Root>

      <Fieldset.Root>
        <Fieldset.Legend>Bio</Fieldset.Legend>
        <Input
          placeholder="bio"
          _placeholder={{ color: "gray.500" }}
          type="bio"
          value={inputs.bio || authUser.bio}
          onChange={(e) => setInputs({ ...inputs, bio: e.target.value })}
        />
      </Fieldset.Root>

      <Stack spacing={6} direction={["column", "row"]} w="100%">
        <DialogActionTrigger w={["100%", "50%"]} asChild>
          <Button
            bg={"red.400"}
            color={"white"}
            _hover={{
              bg: "red.500",
            }}
          >
            Cancel
          </Button>
        </DialogActionTrigger>

        <Button
          w={["100%", "50%"]}
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
          onClick={handleEditProfile}
          loading={isUpdating}
        >
          Submit
        </Button>
      </Stack>
    </Stack>
  );
};

export default EditProfile;

// Chackra v2.0 template
// "use client";

// import {
//   Button,
//   Flex,
//   Heading,
//   Input,
//   Stack,
//   HStack,
//   IconButton,
//   Center,
// } from "@chakra-ui/react";
// import { SmallCloseIcon } from "@chakra-ui/icons";
// import { Avatar } from "../ui/avatar";
// import { Field } from "../ui/field";

// export default function UserProfileEdit() {
//   return (
//     <Flex
//       minH={"100vh"}
//       align={"center"}
//       justify={"center"}
//       // bg={useColorModeValue("gray.50", "gray.800")}
//     >
//       <Stack
//         spacing={4}
//         w={"full"}
//         maxW={"md"}
//         // bg={useColorModeValue("white", "gray.700")}
//         rounded={"xl"}
//         boxShadow={"lg"}
//         p={6}
//         my={12}
//       >
//         <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
//           User Profile Edit
//         </Heading>
//         <Flex id="userName">
//           <Text>User Icon</Text>
//           <Stack direction={["column", "row"]} spacing={6}>
//             <Center>
//               <Avatar
//                 size="xl"
//                 src="https://bit.ly/sage-adebayo"
//                 as={IconButton}
//                 // size="sm"
//                 rounded="full"
//                 top="-10px"
//                 colorScheme="red"
//                 aria-label="remove Image"
//                 icon={<SmallCloseIcon />}
//               />
//             </Center>
//             <Center w="full">
//               <Button w="full">Change Icon</Button>
//             </Center>
//           </Stack>
//         </Flex>
//         <Input
//         id="username"
//         autoComplete="username"
//         placeholder="Username"
//         fontSize={14}
//         type="text"
//         // value={inputs.username}
//         size={"sm"}
//         // onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
//       />
//         <Input
//         id="email"
//         autoComplete="email"
//         placeholder="Email"
//         fontSize={14}
//         type="email"
//         // value={inputs.email}
//         size={"sm"}
//         // onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
//       />
//       <Input
//           id="password"
//           autoComplete="new-password"
//           placeholder="Password"
//           fontSize={14}
//           type={showPassword ? "text" : "password"}
//           // value={inputs.password}
//           size={"sm"}
//           // onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
//         />
//         <Stack spacing={6} direction={["column", "row"]}>
//           <Button
//             bg={"red.400"}
//             color={"white"}
//             w="full"
//             _hover={{
//               bg: "red.500",
//             }}
//           >
//             Cancel
//           </Button>
//           <Button
//             bg={"blue.400"}
//             color={"white"}
//             w="full"
//             _hover={{
//               bg: "blue.500",
//             }}
//           >
//             Submit
//           </Button>
//         </Stack>
//       </Stack>
//     </Flex>
//   );
// }
