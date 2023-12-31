import { Stack, useColorModeValue } from "@chakra-ui/react";
import { NAV_ITEMS } from "../../constant";
import MobileNavItem from "./MobileNavItem";

export default function MobileNav() {
  return (
    <Stack
      bg={useColorModeValue("brand.100", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}
