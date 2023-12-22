import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { SERVICE_TABS } from "../constant";
import Banner from "./Banner";
import Feature from "./Feature";

export default function Services() {
  const { id } = useParams();
  const tabIndex = SERVICE_TABS.findIndex((item) => item.id === id);
  return (
    <>
      <Banner title={"What We Offer"} />
      <Flex flex={1} align={"center"} justify={"center"} flexDir="column">
        <Stack
          spacing={6}
          maxW={{ base: "", md: "", lg: "1180px" }}
          borderRadius={32}
        >
          <Stack m={"3em 0"} align="center">
            <Heading
              w={{ base: "auto", md: "70%" }}
              textAlign="center"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            >
              You do not need deep pockets to have a deep bench
            </Heading>
            <br />
            <Text
              w={{ base: "auto", md: "65%" }}
              textAlign="center"
              fontSize={{ base: "md", md: "2xl" }}
            >
              We’re here to help with your administration at a price point that
              is right for your business now and as you grow. Feel all the
              support without any unnecessary overhead.
            </Text>
            <Tabs variant="soft-rounded" defaultIndex={tabIndex}>
              <TabList
                w={{ base: "100%", lg: "75%" }}
                margin={{ base: "auto", md: "0 auto" }}
                justifyContent="space-between"
                bg="brand.600"
                borderRadius="40px"
              >
                {SERVICE_TABS.map((tab) => (
                  <Tab
                    p={{ base: "8px", md: "auto" }}
                    minW={{ base: "58px", md: "200px" }}
                    _selected={{
                      fontWeight: "bolder",
                      color: "brand.100",
                      bg: "brand.300",
                    }}
                    key={tab.id}
                  >
                    <Text fontSize={{ base: "md", md: "2xl" }}>{tab.id}</Text>
                  </Tab>
                ))}
              </TabList>

              <TabPanels>
                {SERVICE_TABS.map((tab) => (
                  <TabPanel key={`${tab.id}_tabIndex`}>
                    <Box>
                      <SimpleGrid
                        columns={{ base: 1, md: 3 }}
                        spacing={{ lg: 10 }}
                      >
                        {tab.content.map((item) => (
                          <Feature
                            key={item.id}
                            serviceBg
                            align="start"
                            title={item.id}
                            text={item.desc}
                          />
                        ))}
                      </SimpleGrid>
                    </Box>
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs>

            <Center>
              <Link to="/contact">
                <Button
                  fontSize={"xs"}
                  display={{ base: "flex", md: "inline-flex" }}
                  bg={"brand.200"}
                  color={"brand.300"}
                  textTransform="uppercase"
                  p={"1em"}
                >
                  Get Started
                </Button>
              </Link>
            </Center>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}
