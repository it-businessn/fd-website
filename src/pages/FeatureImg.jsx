import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import img1 from "../assets/images/team/team-2.jpg";
export default function FeatureImg() {
  return (
    <Box
      role={"group"}
      p={6}
      maxW={"330px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"lg"}
      pos={"relative"}
    >
      <Box
        rounded={"lg"}
        mt={-12}
        pos={"relative"}
        height={"230px"}
        _after={{
          transition: "all .3s ease",
          content: '""',
          w: "full",
          h: "full",
          pos: "absolute",
          top: 5,
          left: 0,
          backgroundImage: `url(${img1})`,
          filter: "blur(15px)",
        }}
        _groupHover={{
          _after: {
            filter: "blur(20px)",
          },
        }}
      >
        <Image
          rounded={"lg"}
          height={230}
          width={282}
          objectFit={"cover"}
          src={img1}
          alt="#"
        />
      </Box>
      <Stack pt={10} align={"center"}>
        <Text fontSize={"sm"} textTransform={"uppercase"}>
          Alex MD
        </Text>
        <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
          Featured Partner
        </Heading>
      </Stack>
    </Box>
  );
}
