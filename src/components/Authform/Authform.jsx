import {
  VStack,
  Box,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";

const Authform = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box border={"1px solid gray"} BorderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" cursor={"pointer"} alt="Instagram" />



          {isLogin ? <Login /> : <Signup />}

          {/* ----------- OR ----------------- */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>

          {/* Google Login */}
          <GoogleAuth prefix={isLogin ? "Login" : "Sign up"}/>
        </VStack>
      </Box>

      {/* Don't have an account Signup option */}
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogin ? "Sign Up" : "Login"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Authform;
