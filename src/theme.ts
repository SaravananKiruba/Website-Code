import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#10126d", // dark blue
    800: "#2619d8", // blue
    700: "#4893ed", // light blue
    600: "#f6c445", // yellow
    500: "#e7d42a", // light yellow
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