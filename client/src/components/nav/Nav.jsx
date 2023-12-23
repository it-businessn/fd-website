import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Collapse,
  Flex,
  IconButton,
  Image,
  Spacer,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_blue.png";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { COMPANY_BIO } from "../../constant";

export default function Nav() {
  const { isOpen, onToggle } = useDisclosure();
  const [select, setSelect] = useState("CA");
  const onSelect = (code) => setSelect(code);

  return (
    <Box>
      <Flex
        display={{ base: "none", md: "flex" }}
        bg={"brand.100"}
        minH={"60px"}
        minW={"100vw"}
        py={{ base: 2 }}
        px={{ base: 4, md: "2em" }}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        top={{ base: "0", md: "0" }}
        position={{ base: "relative", md: "fixed" }}
        zIndex={1}
      >
        <Spacer />

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Link to="/contact">
            <Button
              fontSize={"sm"}
              display={{ base: "flex", md: "inline-flex" }}
              bg={"brand.200"}
              color={"brand.300"}
              textTransform="uppercase"
              p={"1em"}
              variant={"primary"}
            >
              Hire a Partner
            </Button>
          </Link>
          <Button
            as={"a"}
            href="tel:+1-844-777-8231"
            display={{ base: "flex", md: "inline-flex" }}
            fontSize={"sm"}
            p={"1em"}
            bg={"brand.200"}
            color={"brand.300"}
            // _hover={{
            //     bg: "pink.300",
            // }}
          >
            {COMPANY_BIO.PHONE}
          </Button>
        </Stack>
      </Flex>
      <Flex
        bg={"brand.100"}
        color={useColorModeValue("gray.600", "brand.100")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4, md: "2em" }}
        minW={"100vw"}
        zIndex={2}
        top={{ base: "0", md: "57px" }}
        position={{ base: "relative", md: "fixed" }}
        borderBottom={"1px solid rgba(255, 255, 255, 0.05)"}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          bg={"brand.100"}
          flex={{ base: 1 }}
          h="60px"
          justify={{ base: "start", md: "center" }}
          align={{ base: "start", md: "center" }}
        >
          <Link to="/">
            <Image
              boxSize={{ base: "150px", md: "300px" }}
              left={{ base: "-4em", md: "auto" }}
              objectFit="cover"
              src={logo}
              position={"relative"}
              alt=""
              bottom={{ base: "40px", lg: "2em" }}
            />
          </Link>
          <Spacer />
          <Flex display={{ base: "none", md: "flex" }}>
            <DesktopNav />
          </Flex>
          <Spacer />
        </Flex>
        <Stack
          display={{ base: "none", md: "flex" }}
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <ReactFlagsSelect
            className="country_select"
            selected={select}
            onSelect={onSelect}
            countries={["CA", "US"]}
          />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
