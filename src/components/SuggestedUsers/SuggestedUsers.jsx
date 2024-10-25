import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"
import { VStack, Flex, Text, Box, Link } from "@chakra-ui/react"

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.500"}} cursor={"pointer"}>
          See All
        </Text>
      </Flex>

      <SuggestedUser name="Dan Abrahmov" followers={1392} avatar="https://bit.ly/dan-abromov"/>
      <SuggestedUser name="Dan A" followers={22132} avatar="https://bit.ly/dan-abromov"/>
      <SuggestedUser name="Dan mov" followers={131292} avatar="https://bit.ly/dan-abromov"/>


      <Box
      alignSelf={"center"}
      fontSize={12}
      color={"gray.500"}
      marginTop={5}
      >
        © 2024 Built By {" "}
        <Link href="https://harrymoore.cloud" target="_blank" color={"blue.500"} fontSize={12}>
        Harry Moore</Link>
      </Box>
    </VStack>
  )
}

export default SuggestedUsers