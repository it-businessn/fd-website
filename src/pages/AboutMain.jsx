"use client";

import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import bg from "../assets/logo_white.png";

export default function AboutMain() {
  const vimeoVideoUrl =
    "https://player.vimeo.com/video/896338779?h=ce7f75baf4&autoplay=1&loop=1&mute=1&app_id=58479";
  const VimeoPlayer = () => {
    return (
      <iframe
        src={vimeoVideoUrl}
        width="100%"
        height="400px"
        title="Vimeo Video"
        allowFullScreen
      />
    );
  };
  const isMobile = window.innerWidth <= 768;
  const mainContent = () => (
    <>
      <VStack flex={1}>
        <Stack spacing={5} pl={{ base: "1em", lg: "7em" }} mt={{ lg: "5em" }}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <HStack>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "20%",
                  position: "absolute",
                  top: ".9em",
                  left: 0,
                  bg: "linear-gradient(90deg, rgba(13,234,251,1) 0%, rgba(40,161,242,1) 25%, rgba(51,130,240,1) 50%, rgba(81,45,230,1) 100%)",
                }}
              >
                Who we are
              </Text>
              <Image
                display={{ base: "none", lg: "flex" }}
                objectFit={"cover"}
                position={"absolute"}
                ml={"-5em"}
                w={"1000px"}
                height={"500px"}
                mb={{ lg: "2.2em" }}
                alt={"Login Image"}
                src={bg}
              />
            </HStack>
          </Heading>
          <Text fontSize={{ base: "md", md: "2xl" }}>
            We bring best practices to your operation by enhancing your staff
            with one or more of our highly qualified partners
          </Text>
          <Stack direction={{ base: "column", lg: "row" }} spacing={4}>
            <Link to="about">
              <Button
                fontSize={"xs"}
                display={{
                  base: "flex",
                  md: "inline-flex",
                }}
                bg={"#0deafb"}
                color={"#010b2f"}
                textTransform="uppercase"
                p={"1em"}
              >
                About us
              </Button>
            </Link>
          </Stack>
        </Stack>
      </VStack>
      <Box p="4" flex={1}>
        <VimeoPlayer videoUrl={vimeoVideoUrl} />
      </Box>
    </>
  );

  return (
    <Stack
      bg={{ base: "#f1f5f8", md: "#fff" }}
      justifyContent="center"
      direction={{ base: "column", lg: "row" }}
    >
      <Flex
        align={"center"}
        justify={"center"}
        height={"fit-content"}
        position={{ md: "relative" }}
        direction={{ sm: "column", lg: "row" }}
        marginTop={{ base: "none", md: "-5em", lg: 0 }}
      >
        {isMobile ? (
          <VStack>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <HStack>
                <Text
                  as={"span"}
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "full",
                    height: "20%",
                    position: "absolute",
                    top: ".9em",
                    left: 0,
                    bg: "linear-gradient(90deg, rgba(13,234,251,1) 0%, rgba(40,161,242,1) 25%, rgba(51,130,240,1) 50%, rgba(81,45,230,1) 100%)",
                  }}
                >
                  Who we are
                </Text>
                <Image
                  display={{ base: "none", lg: "flex" }}
                  objectFit={"cover"}
                  position={"absolute"}
                  ml={"-5em"}
                  w={"1000px"}
                  height={"500px"}
                  mb={{ lg: "2.2em" }}
                  alt={"Login Image"}
                  src={bg}
                />
              </HStack>
            </Heading>
            <Text fontSize={{ base: "md", md: "2xl" }}>
              We bring best practices to your operation by enhancing your staff
              with one or more of our highly qualified partners
            </Text>
            <Link to="about">
              <Button
                fontSize={"xs"}
                display={{
                  base: "flex",
                  md: "inline-flex",
                }}
                bg={"#0deafb"}
                color={"#010b2f"}
                textTransform="uppercase"
                p={"1em"}
              >
                About us
              </Button>
            </Link>

            <VimeoPlayer videoUrl={vimeoVideoUrl} />
          </VStack>
        ) : (
          <HStack>{mainContent()}</HStack>
        )}
      </Flex>
    </Stack>
  );
}
