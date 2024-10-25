import { Box, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
// import useAuthStore from "../../store/authStore";
import { Avatar } from "../ui/avatar";
import { Tooltip } from "../ui/tooltip";

const ProfileLink = () => {
  // const authUser = useAuthStore((state) => state.user);

  return (
    <Tooltip
      // showArrow
      content={"Profile"}
      positioning={{ placement: "right-end" }}
      ml={1}
      openDelay={500}
      closeDelay={100}
      display={{ base: "block", md: "none" }}
    >
      <Link
        display={"flex"}
        // to={`/${authUser?.username}`}
        to={"/hazzamore"}
        as={RouterLink}
        alignItems={"center"}
        gap={4}
        _hover={{ bg: "whiteAlpha.400" }}
        borderRadius={6}
        p={2}
        w={{ base: 10, md: "full" }}
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        {/* <Avatar size={"sm"} src={authUser?.profilePicURL || ""} /> */}
        <Avatar size={"sm"} name="HazzaMore" src="/profilepic.png" />
        <Box display={{ base: "none", md: "block" }}>Profile</Box>
      </Link>
    </Tooltip>
  );
};

export default ProfileLink;
