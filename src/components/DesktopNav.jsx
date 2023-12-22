import { Box, Popover, PopoverTrigger, Stack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../constant";
export default function DesktopNav() {
    return (
        <Stack direction={"row"} spacing={{ md: "1rem", lg: "7rem" }}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={"hover"} placement={"bottom-start"}>
                        <PopoverTrigger>
                            <NavLink to={navItem.href ?? "#"}>
                                <Box
                                    color={"brand.300"}
                                    fontSize={"lg"}
                                    textTransform="uppercase"
                                    _hover={{
                                        textDecoration: "none",
                                        color: "brand.500",
                                    }}
                                    _focus={{
                                        color: "brand.500",
                                        fontWeight: "bold",
                                    }}
                                    _active={{
                                        color: "brand.500",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {navItem.label}
                                </Box>
                            </NavLink>
                        </PopoverTrigger>
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
}
