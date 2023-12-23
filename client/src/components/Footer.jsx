import { Box, Container, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import banner from "../assets/images/banner/banner.jpg";
import logo from "../assets/logoblue.jpg";

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
      </Container>
    </Box>
  );
}
