import { Box, Flex, Text, Fieldset, Input } from "@chakra-ui/react";
import { SearchLogo } from "../../assets/constants";
import useSearchUser from "../../hooks/useSearchUser";
// import useAuthStore from "../../store/authStore";
import SuggestedUser from "../SuggestedUsers/SuggestedUser";
import { useState, useRef } from "react";
import { Tooltip } from "../ui/tooltip";
import { Button } from "../ui/button";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const Search = () => {
  const [open, setOpen] = useState(false);
  const searchRef = useRef(null);
  const {user, isLoading, getUserProfile, setUser } = useSearchUser();

  // const authUser = useAuthStore((state) => state.user);
  const handleSearchUser = (e) => {
    e.preventDefault();
    getUserProfile(searchRef.current.value);
  }

  // console.log(user);
  return (
    <>
      <DialogRoot
        lazyMount
        motionPreset="slide-in-left"
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
      >
        <Tooltip
          // showArrow
          content={"Search"}
          positioning={{ placement: "right-end" }}
          ml={1}
          openDelay={500}
          closeDelay={100}
          display={{ base: "block", md: "none" }}
        >
          <DialogTrigger asChild>
            <Flex
              alignItems={"center"}
              gap={4}
              _hover={{ bg: "whiteAlpha.400" }}
              borderRadius={6}
              p={2}
              w={{ base: 10, md: "full" }}
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <SearchLogo />
              <Box display={{ base: "none", md: "block" }}>Search</Box>
            </Flex>
          </DialogTrigger>
        </Tooltip>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Search User</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <Fieldset.Root>
              <Fieldset.Legend>Username</Fieldset.Legend>
              <Input 
                // placeholder={`e.g. ${authUser.username}`} 
                placeholder={`e.g. HazzaMore`} 
                ref={searchRef} 
                autoComplete="off" 
              />
            </Fieldset.Root>
          </DialogBody>
          <DialogFooter>
            <Flex w={"full"} justifyContent={"flex-end"}>
              <Button
                type="submit"
                ml={"auto"}
                size={"sm"}
                my={4}
                loading={isLoading}
                onClick={handleSearchUser}
              >
                Search
              </Button>
            </Flex>
          </DialogFooter>
          <DialogBody>
            {user ? <SuggestedUser user={user} setUser={setUser}/> : <Text>No user found</Text>}
          </DialogBody>
          
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    </>
  );
};

export default Search;
