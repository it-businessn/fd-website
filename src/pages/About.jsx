"use client";

import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Banner from "./Banner";
import Footer from "./Footer";
import MissionValues from "./MissionValues";
import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Nav />
      <Banner title={"Our Company"} />
      <Stack minH={"50vh"} direction={{ base: "column", md: "row" }}>
        <Flex
          p={{ base: " 2em", md: "3em 2em" }}
          flex={1}
          align={"center"}
          justify={"center"}
        >
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              With over 100 years of ,
              <Text
                position={"relative"}
                _after={{
                  content: "''",
                  width: "60%",
                  height: "20%",
                  position: "absolute",
                  top: "1.1em",
                  left: 0,
                  bg: "linear-gradient(90deg, rgba(13,234,251,1) 0%, rgba(40,161,242,1) 25%, rgba(51,130,240,1) 50%, rgba(81,45,230,1) 100%)",
                }}
              >
                combined experience
              </Text>
            </Heading>
            <Text fontSize={{ base: "sm", md: "xl" }}>
              Founded by a group of professionals that saw a need to to deliver
              professional standards to companies of all sizes. We have a
              passion to give organizations resources to compete in an ever more
              complex business environment.
            </Text>
            <Text fontSize={{ base: "sm", md: "xl" }}>
              Our solutions were developed to help organizations of all sizes to
              be better run, more efficient and much more profitable.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Link to="/contact">
                <Button
                  fontSize={"xs"}
                  display={{ base: "flex", md: "inline-flex" }}
                  bg={"#0deafb"}
                  color={"#010b2f"}
                  textTransform="uppercase"
                  p={"1em"}
                >
                  OUR TEAM
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} pt={{ base: 0, md: "3em" }}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
          />
        </Flex>
      </Stack>
      <MissionValues />
      <Footer />
    </>
  );
}
