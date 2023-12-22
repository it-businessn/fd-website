"use client";

import {
  Box,
  chakra,
  Container,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import banner from "../assets/images/banner/banner.jpg";
import logo from "../assets/logoblue.jpg";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      position={"relative"}
      w={"full"}
      h={"30vh"}
      backgroundImage={banner}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      minW={"100vw"}
      display={"flex"}
      justify={"center"}
      align={"center"}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        pt={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Link to="/">
          <Image src={logo} boxSize="100px" />
        </Link>
        <Text>© 2023 Fractional Departments | All rights reserved</Text>
        {/* <Stack direction={"row"} spacing={6}>
                    <SocialButton label={"Twitter"} href={"#"}>
                        <FaTwitter />
                    </SocialButton>
                    <SocialButton label={"YouTube"} href={"#"}>
                        <FaYoutube />
                    </SocialButton>
                    <SocialButton label={"Instagram"} href={"#"}>
                        <FaInstagram />
                    </SocialButton>
                </Stack> */}
      </Container>
    </Box>
  );
}
