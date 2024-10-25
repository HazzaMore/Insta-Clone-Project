import { Box, Flex } from "@chakra-ui/react";
import { NotificationsLogo } from "../../assets/constants";
import { Tooltip } from "../ui/tooltip";

const Notifications = () => {
  return (
    <Tooltip
      // showArrow
      content={"Notifications"}
      positioning={{ placement: "right-end" }}
      ml={1}
      openDelay={500}
      closeDelay={100}
      display={{ base: "block", md: "none" }}
    >
      <Flex
        alignItems={"center"}
        gap={4}
        _hover={{ bg: "whiteAlpha.400" }}
        borderRadius={6}
        p={2}
        w={{ base: 10, md: "full" }}
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        <NotificationsLogo />
        <Box display={{ base: "none", md: "block" }}>Notifications</Box>
      </Flex>
    </Tooltip>
  );
};

export default Notifications;
