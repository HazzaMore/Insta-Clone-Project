import { Flex, Text } from "@chakra-ui/react";
import { Avatar } from "../ui/avatar";

const Comment = ({ createdAt, username, profilePic, text }) => {
  return (
    <Flex gap={4} pt={4}>
      <Avatar src={profilePic} size={"sm"} name={username} />
      <Flex direction={"column"}>
        <Flex gap={2}>
          <Text fontWeight={"bold"} fontSize={12}>
            {username}
          </Text>
          <Text fontSize={14}>{text}</Text>
        </Flex>
        <Text fontSize={12} color={"gray"}>{createdAt}</Text>
      </Flex>
    </Flex>
  );
};

export default Comment;
