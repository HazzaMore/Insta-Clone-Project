import { Flex, Text, Link } from "@chakra-ui/react"
import {Avatar} from "../ui/Avatar"
import {Link as RouterLink} from "react-router-dom"

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="HazzaMore" size={"lg"} src="/profilepic.png"/>
        <Text fontSize={12} fontWeight={"bold"}>
          HazzaMore
        </Text>
      </Flex>
      <Link
      as={RouterLink}
      to={"/auth"}
      fontSize={14}
      fontWeight={"medium"}
      color={"blue.400"}
      style={{textDecoration: "none"}}
      cursor={"pointer"}
      transition={"0.2s ease-in-out"}
      _hover={{color: "red"}}
      >
      Log out
      </Link>
    </Flex>
  )
}

export default SuggestedHeader