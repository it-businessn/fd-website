import { EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import Banner from "./Banner";
import Feature from "./Feature";
import Footer from "./Footer";
import Nav from "./Nav";
import { EMAILJS_CONFIG } from "../config";
import { COMPANY_BIO } from "../constant";
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form.current,
        EMAILJS_CONFIG.KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Nav />
      <Stack align={"center"} minW={"100vw"}>
        <Banner title={"Get In Touch"} />
        <Stack
          p={{ base: "1em", md: "3em 5em" }}
          maxW={{ base: "100%", lg: "60vw" }}
          margin="0 auto"
        >
          <Heading
            textAlign="center"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          >
            Contact Us To Find Out More About Our Fractional Service
          </Heading>
          <br />
          <Text textAlign="center" fontSize={{ base: "sm", md: "xl" }}>
            If you have a general query or would like to find out more about our
            Fractional service please use the contact form below and we will get
            back to you shortly. We look forward to hearing from you.
          </Text>
          <Stack boxShadow={"0 0 10px #c1c1c1"} p="2em">
            <form ref={form} onSubmit={sendEmail}>
              <FormControl my={2}>
                <Input type="text" placeholder="Name" name="to_name" />
                {/* <FormHelperText>
                        We'll never share your email.
                    </FormHelperText> */}
              </FormControl>
              <FormControl my={2}>
                <Input type="email" placeholder="Email" name="from_name" />
              </FormControl>
              <FormControl my={2}>
                <Input type="text" placeholder="Phone" name="phone" />
              </FormControl>
              <FormControl>
                <FormLabel>Province</FormLabel>
                <Select placeholder="Alberta">
                  <option>British Columbia</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>How may we direct your inquiry?</FormLabel>
                <Select placeholder="Partnership Opportunity">
                  <option>Partnership Opportunity</option>
                </Select>
              </FormControl>
              <FormControl my={2}>
                <Textarea
                  rows={10}
                  name="message"
                  placeholder="Include your industry, # of employees, company URL & a brief description of what you're aiming to achieve."
                  size="sm"
                  resize={"horizontal"}
                />
              </FormControl>
              <FormControl>
                <FormLabel>
                  I agree to receive information about Fractional services
                </FormLabel>
                <RadioGroup defaultValue="1">
                  <Stack spacing={4} direction="column">
                    <Radio value="2">Yes</Radio>
                    <Radio value="3">No</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
              <Center>
                <Stack direction={{ base: "column", md: "row" }}>
                  <Button
                    type="submit"
                    fontSize={"xs"}
                    display={{
                      base: "flex",
                      md: "inline-flex",
                    }}
                    bg={"#0deafb"}
                    color={"#010b2f"}
                    textTransform="uppercase"
                    p={"1em"}
                  >
                    Submit
                  </Button>
                </Stack>
              </Center>
            </form>
          </Stack>
        </Stack>
        <Box p={4}>
          <SimpleGrid columns={2} spacing={10}>
            <Feature
              icon={
                <Icon color={"#0deafb"} as={BiSolidPhoneCall} w={10} h={10} />
              }
              title={COMPANY_BIO.PHONE}
              text={""}
            />
            <Feature
              icon={<Icon color={"#0deafb"} as={EmailIcon} w={10} h={10} />}
              title={COMPANY_BIO.EMAIL}
              text={""}
            />
          </SimpleGrid>
        </Box>
        <Footer />
      </Stack>
    </>
  );
}
