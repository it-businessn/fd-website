import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { MdCheckCircle } from "react-icons/md";
import Banner from "./Banner";

export default function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const careersUrl =
    "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

  return (
    <div>
      <Banner title={"Join Us"} />
      <Stack minH={"50vh"} direction={{ base: "column", md: "row" }}>
        <Flex flex={1} p={{ base: 0, md: "3em 0 3em 2em" }}>
          <Image
            borderRadius={"10px"}
            alt={"Login Image"}
            objectFit={"cover"}
            src={careersUrl}
          />
        </Flex>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              Careers at Fractional &nbsp;
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "20%",
                  position: "absolute",
                  bottom: 1.8,
                  left: 0,
                  bg: "linear-gradient(90deg, rgba(13,234,251,1) 0%, rgba(40,161,242,1) 25%, rgba(51,130,240,1) 50%, rgba(81,45,230,1) 100%)",
                }}
              >
                Departments
              </Text>
            </Heading>
            <Text fontSize={{ base: "sm", md: "xl" }}>
              Are you ready to make a difference?
            </Text>
            <Stack direction={{ base: "column", md: "row" }}>
              <Button
                fontSize={"xs"}
                display={{ base: "flex", md: "inline-flex" }}
                bg={"brand.200"}
                color={"brand.300"}
                textTransform="uppercase"
                p={"1em"}
              >
                Apply Now
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
      <Stack>
        <Box p={"3em"}>
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10}>
            <Stack>
              <Heading
                color={"brand.500"}
                fontSize={{ base: "3xl", md: "4xl" }}
                textAlign={{
                  base: "center",
                  md: "center",
                  lg: "start",
                }}
              >
                Flexibility
              </Heading>
              <HStack align={"flex-start"}>
                <Icon as={MdCheckCircle} color="purple.500" />
                <Text
                  fontSize={{ base: "md", md: "xl" }}
                  textAlign={{ base: "justify", md: "start" }}
                >
                  Work from home and flexible schedules means for many positions
                  you can accomplish the work on your time – leaving more for
                  work life balance.
                </Text>
              </HStack>
            </Stack>
            <Stack>
              <Heading
                color={"brand.500"}
                fontSize={{ base: "3xl", md: "4xl" }}
                textAlign={{
                  base: "center",
                  md: "center",
                  lg: "start",
                }}
              >
                For all stages of life
              </Heading>
              <HStack align={"flex-start"}>
                <Icon as={MdCheckCircle} color="purple.500" />
                <Text
                  fontSize={{ base: "md", md: "xl" }}
                  textAlign={{ base: "justify", md: "start" }}
                >
                  We welcome partners with varying degrees of experience – maybe
                  you would like to work part time after having retired or are
                  looking for an exciting new career we like to be open.
                </Text>
              </HStack>
            </Stack>
            <Stack>
              <Heading
                color={"brand.500"}
                fontSize={{ base: "3xl", md: "4xl" }}
                textAlign={{
                  base: "center",
                  md: "center",
                  lg: "start",
                }}
              >
                Be part of positive change
              </Heading>
              <HStack align={"flex-start"}>
                <Icon as={MdCheckCircle} color="purple.500" />
                <Text
                  fontSize={{ base: "md", md: "xl" }}
                  textAlign={{ base: "justify", md: "start" }}
                >
                  At FD we like to make positive impacts in the organizations we
                  work in as we always strive to implement best practices.
                </Text>
              </HStack>
            </Stack>
          </SimpleGrid>
        </Box>
        <Center pb={"2em"}>
          <Stack direction={{ base: "column", md: "row" }}>
            <Button
              fontSize={"xs"}
              display={{ base: "flex", md: "inline-flex" }}
              bg={"brand.200"}
              color={"brand.300"}
              textTransform="uppercase"
              p={"1em"}
            >
              Apply Now
            </Button>
          </Stack>
        </Center>
      </Stack>
    </div>
  );
}
