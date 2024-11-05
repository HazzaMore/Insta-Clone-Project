import { Flex, VStack, Text, Button, DialogBody } from "@chakra-ui/react";
import { AvatarGroup, Avatar } from "../ui/avatar";
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";
import EditProfile from "./EditProfile";
import {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogCloseTrigger,
} from "../ui/dialog";
import useFollowUser from "../../hooks/useFollowUser";

const ProfileHeader = () => {
  const { userProfile } = useUserProfileStore();
  const authUser = useAuthStore((state) => state.user);

  const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(
    userProfile?.uid
  );

  const visitingOwnProfileAndAuth =
    authUser && authUser.username === userProfile.username;
  const visitingAnotherProfileAndAuth =
    authUser && authUser.username !== userProfile.username;

  // const [open, setOpen] = useState(false)
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        justifySelf={"center"}
        alignSelf={"flex-start"}
        my={"auto"}
        mx={"20px"}
        size={{ base: "xl", md: "2xl" }}
        scale={2}
      >
        <Avatar
          name={userProfile.username}
          src={userProfile.profilePicURL}
          alt="Logo"
        />
      </AvatarGroup>
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>
            {" "}
            {userProfile.username}{" "}
          </Text>

          {visitingOwnProfileAndAuth && (
            <DialogRoot gap={4} alignItems={"center"} justifyContent={"center"}>
              <DialogTrigger asChild>
                <div>
                  <Button
                    bg={"white"}
                    color={"black"}
                    _hover={{ bg: "whiteAlpha.800" }}
                    size={{ base: "xs", md: "sm" }}
                    // onClick={onOpen}
                  >
                    Edit Profile
                  </Button>
                </div>
              </DialogTrigger>
              <DialogContent>
                <EditProfile />
              </DialogContent>
            </DialogRoot>
          )}

          {visitingAnotherProfileAndAuth && (
            <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
              <Button
                bg={isFollowing ? "gray.500" : "blue.500"}
                color={"white"}
                _hover={{ bg: isFollowing ? "gray.600" : "blue.600" }}
                size={{ base: "xs", md: "sm" }}
                loading={isUpdating.toString()}
                onClick={handleFollowUser}
              >
                {isFollowing ? "Unfollow" : "Follow"}
              </Button>
            </Flex>
          )}
        </Flex>

        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{ base: "xm", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {userProfile?.posts?.length ?? 0}
            </Text>
            Posts
          </Text>
          <Text fontSize={{ base: "xm", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {userProfile?.followers?.length ?? 0}
            </Text>
            Followers
          </Text>
          <Text fontSize={{ base: "xm", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {userProfile?.following?.length ?? 0}
            </Text>
            Following
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            {userProfile.fullname}
          </Text>
        </Flex>
        <Text fontSize={"sm"}> {userProfile.bio} </Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
