import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      200: "#0deafb",
      300: "#010b2f",
      500: "#5a13e3",
    },
  },
  fonts: {
    heading: `'Material', sans-serif`,
    body: `'Material', sans-serif`,
  },
});

// const { Button } = chakraTheme.components;

export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_ytct8n2",
  TEMPLATE_ID: "template_7yxltvm",
  KEY: "f2Z55x8OF7tzHjaEG",
};
