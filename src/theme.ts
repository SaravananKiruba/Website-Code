import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#0b7e7f", // darkest
    800: "#13947d",
    700: "#1ba37d",
    600: "#20ae7c",
    500: "#35bc88", // lightest
  }
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: "system-ui, sans-serif",
    body: "system-ui, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "gray.800",
      },
    },
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: "brand.900",
          color: "white",
          _hover: {
            bg: "brand.800",
          },
        },
        secondary: {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
  },
});

export default theme;