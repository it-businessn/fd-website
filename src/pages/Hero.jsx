import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HERO_IMAGES } from "../constant";
import "./Hero.css";

export default function Hero() {
  useEffect(() => {
    let slideIndex = 0;

    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].style.height = "55vh";
        slides[slideIndex - 1].style.minHeight = "55vh";
        dots[slideIndex - 1].className += " active";
      }
      setTimeout(showSlides, 4000);
    }
    showSlides();
  }, []);
  return (
    <Box
      bg={{ base: "#f1f5f8", md: "#fff" }}
      margin="0"
      position="relative"
      mt={{ base: "0", md: "8em" }}
      minW={"100vw"}
      height={{ base: "38vh", md: "60vh" }}
    >
      {HERO_IMAGES.map((image) => (
        <div className="mySlides fade" key={image.url}>
          <HStack h={{ base: "auto", lg: "60vh" }} spacing={0} bg={"brand.300"}>
            <VStack
              h={{ base: "auto", lg: "60vh" }}
              flexDir="column"
              width={"50%"}
              color={"#fff"}
              position={"relative"}
              lineHeight={"1.1"}
              bg={"brand.300"}
              align={"start"}
              p={{ base: "1em", md: "4em" }}
              pr={{ base: 0 }}
            >
              <Text
                fontSize={{
                  base: "sm",
                  md: "3xl",
                  lg: "5xl",
                }}
                fontWeight={700}
              >
                {image.header}
              </Text>
              <br />
              <Text
                fontSize={{
                  base: "13px",
                  md: "xl",
                  lg: "2xl",
                }}
              >
                {image.subHeader}
              </Text>
              <br />
              <Link to="/contact" style={{ width: "17em" }}>
                <Button
                  variant="link"
                  fontSize={"xs"}
                  bg={"brand.200"}
                  textTransform="uppercase"
                  p={"1em"}
                  w={{ base: "80px", md: "50%" }}
                  _hover={{ bg: "gray.200" }}
                  color="brand.300"
                >
                  Get started
                </Button>
              </Link>
            </VStack>
            <Image
              h={{ base: "auto", lg: "60vh" }}
              objectFit={"cover"}
              src={image.url}
              w={{ base: "63vw", lg: "60vw" }}
            />
          </HStack>
        </div>
      ))}
      <Center
        position="relative"
        display={"none"}
        // display={{ base: "none", lg: "flex" }}
      >
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </Center>
    </Box>
  );
}
