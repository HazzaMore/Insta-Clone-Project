import { Box, Flex, Textarea, Fieldset, Input, Image } from "@chakra-ui/react";
import { CreatePostLogo } from "../../assets/constants";
import { Tooltip } from "../ui/tooltip";
import { Button } from "../ui/button";
import { CloseButton } from "../ui/close-button";
import { useState, useRef } from "react";
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
import { BsFillImageFill } from "react-icons/bs";
import usePreviewImg from "../../hooks/usePreviewImg";

const CreatePost = () => {
  const [open, setOpen] = useState(false);
  const [caption, setCaption] = useState("");
  const imageRef = useRef(null);
  const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();

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
          content={"Create"}
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
              <CreatePostLogo />
              <Box display={{ base: "none", md: "block" }}>Create</Box>
            </Flex>
          </DialogTrigger>
        </Tooltip>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Post</DialogTitle>
          </DialogHeader>
          <DialogBody pb={6}>
            <Fieldset.Root>
              <Textarea
                placeholder="Post caption..."
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
              />
              <Input type="file" hidden ref={imageRef} onChange={handleImageChange} />
              <BsFillImageFill
                onClick={() => imageRef.current.click()}
                style={{
                  marginTop: "15px",
                  marginLeft: "5px",
                  cursor: "pointer",
                }}
                size={16}
              />
              {selectedFile && (
                <Flex
                  mt={5}
                  w={"full"}
                  position={"relative"}
                  justifyContent={"center"}
                >
                  <Image src={selectedFile} alt="Selected img" />
                  <CloseButton
                    position={"absolute"}
                    top={2}
                    right={2}
                    onClick={() => {
                      setSelectedFile(null);
                    }}
                  />
                </Flex>
              )}
            </Fieldset.Root>
          </DialogBody>
          <DialogFooter>
            <Button mr={3}>Post</Button>
          </DialogFooter>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    </>
  );
};

export default CreatePost;
