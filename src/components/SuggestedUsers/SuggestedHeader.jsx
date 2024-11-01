import { Flex, Text } from "@chakra-ui/react";
import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

const SuggestedHeader = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  const authUser = useAuthStore((state) => state.user);

  const colorPalette = ["red", "blue", "green", "yellow", "purple", "orange"];

  const pickPalette = (name) => {
    const index = name.charCodeAt(0) % colorPalette.length;
    return colorPalette[index];
  };

  if (!authUser) return null;

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link to={`${authUser.username}`}>
          <Avatar
            name={authUser.username}
            size={"lg"}
            src={authUser.profilePicURL}
            colorPalette={pickPalette(authUser.username)}
          />
        </Link>
        <Link to={`${authUser.username}`}>
        <Text fontSize={12} fontWeight={"bold"}>
          {authUser.username}
        </Text>
        </Link>
      </Flex>
      <Button
        size={"sm"}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        background={"transparent"}
        _hover={{ background: "transparent", color: "red" }}
        loading={isLoggingOut}
        onClick={handleLogout}
        transition={"0.2s ease-in-out"}
      >
        Log out
      </Button>
    </Flex>
  );
};

export default SuggestedHeader;
