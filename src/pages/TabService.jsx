import { ChevronRightIcon } from "@chakra-ui/icons";
import {
    Button,
    Center,
    Flex,
    Heading,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Stack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    VStack,
    useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TABS } from "../constant";
import GetStartedForm from "./GetStartedForm";

export default function TabService() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Flex
            flex={1}
            align={"center"}
            justify={"center"}
            flexDir="column"
            //   mt={{ base: "-13em", md: "-35em", lg: "-32em" }}
        >
            <Stack
                spacing={6}
                bg={"rgb(241, 245, 248)"}
                maxW={{ base: "", md: "1180px" }}
                borderRadius={{ lg: 32 }}
                mb={{ base: "0", md: "4em" }}
            >
                <Stack
                    padding={{ base: "5em 0", md: "2em", lg: "5em" }}
                    align="center"
                >
                    <Heading
                        textAlign="center"
                        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    >
                        Add experienced talent to your organization’s key
                        departments
                    </Heading>
                    {/* <Text
                        textAlign="center"
                        fontSize={{ base: "md", lg: "lg" }}
                        
                    >
                        Dial in your operations by having your departments
                        anchored by strong team players.
                    </Text> */}
                    <Tabs colorScheme="purple" w={"100%"}>
                        <TabList justifyContent="space-between">
                            {TABS.map((tab) => (
                                <Tab
                                    _selected={{
                                        fontWeight: "bolder",
                                        color: "brand.300",
                                        borderBottom: "4px solid #010b2f",
                                    }}
                                    key={tab.id}
                                >
                                    <Text fontSize={{ base: "md", md: "2xl" }}>
                                        {tab.id}
                                    </Text>
                                </Tab>
                            ))}
                        </TabList>

                        <TabPanels>
                            {TABS.map((tab) => (
                                <TabPanel
                                    key={`${tab.id}_tab`}
                                    p={{ base: "0", md: "1em" }}
                                >
                                    <VStack
                                        spacing={3}
                                        alignItems="start"
                                        p={"1em"}
                                    >
                                        <Text
                                            fontSize={{ base: "md", md: "2xl" }}
                                        >
                                            {tab.header}
                                        </Text>
                                        <Text
                                            fontSize={{ base: "sm", md: "xl" }}
                                            fontWeight={"bold"}
                                        >
                                            Available Fractional Partnerships
                                        </Text>
                                        {tab.jobTitle.map((title) => (
                                            <Button
                                                display={"flex"}
                                                key={title}
                                                justify={"flex-start"}
                                                variant={"link"}
                                                textDecor="underline"
                                                fontSize={{
                                                    base: "sm",
                                                    md: "xl",
                                                }}
                                            >
                                                {title}
                                            </Button>
                                        ))}
                                        <Link to={`/services/${tab.id}`}>
                                            <Button
                                                textDecor="underline"
                                                lineHeight={2}
                                                variant={"link"}
                                                fontSize={{
                                                    base: "sm",
                                                    md: "xl",
                                                }}
                                            >
                                                {tab.link}
                                                <ChevronRightIcon />
                                            </Button>
                                        </Link>
                                    </VStack>
                                </TabPanel>
                            ))}
                        </TabPanels>
                    </Tabs>
                    <Center>
                        <Button
                            onClick={onOpen}
                            fontSize={"xs"}
                            display={{ base: "flex", md: "inline-flex" }}
                            bg={"#0deafb"}
                            color={"#010b2f"}
                            textTransform="uppercase"
                            p={"1em"}
                        >
                            Get Started
                        </Button>
                    </Center>
                    <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalCloseButton />
                            <ModalBody p={"2em"}>
                                <GetStartedForm />
                                <Center>
                                    <Stack
                                        direction={{
                                            base: "column",
                                            md: "row",
                                        }}
                                    >
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
                                            onClick={onClose}
                                        >
                                            Send
                                        </Button>
                                    </Stack>
                                </Center>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                </Stack>
            </Stack>
        </Flex>
    );
}
