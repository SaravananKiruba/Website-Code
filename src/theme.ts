import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    50: "#e6e7ff",
    100: "#c9caffb",
    200: "#a8acff",
    300: "#8990ff",
    400: "#6971fc",
    500: "#4893ed", // light blue
    600: "#2d68e0", // medium blue
    700: "#2619d8", // blue
    800: "#181ca9", // medium dark blue
    900: "#10126d", // dark blue
  },
  accent: {
    50: "#fff8e0",
    100: "#feefc3",
    200: "#fde6a0",
    300: "#fbdb7c",
    400: "#f9d157",
    500: "#f6c445", // yellow
    600: "#e7b42a", // medium yellow
    700: "#d9a11e", // deeper yellow
    800: "#c08817", // gold
    900: "#9e6c10", // dark gold
  },
  gray: {
    50: "#f7f8fa",
    100: "#eaedf2",
    200: "#dce0e9",
    300: "#ced3df",
    400: "#bfc5d4",
    500: "#a5adbe",
    600: "#8993a8",
    700: "#6b778d",
    800: "#4d5a70",
    900: "#303a4d",
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
            transform: "translateY(-2px)",
            boxShadow: "md",
          },
          transition: "all 0.3s",
        },
        secondary: {
          bg: "accent.500",
          color: "gray.900",
          _hover: {
            bg: "accent.600",
            transform: "translateY(-2px)",
            boxShadow: "md",
          },
          transition: "all 0.3s",
        },
        outline: {
          borderWidth: "2px",
          borderColor: "brand.500",
          color: "brand.700",
          _hover: {
            bg: "brand.50",
            transform: "translateY(-2px)",
          },
          transition: "all 0.3s",
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: "white",
          borderRadius: "lg",
          boxShadow: "md",
          overflow: "hidden",
          transition: "all 0.3s ease",
          _hover: {
            transform: "translateY(-5px)",
            boxShadow: "lg",
          },
        }
      }
    },
    Heading: {
      baseStyle: {
        fontWeight: "700",
        lineHeight: "1.2",
      },
    },
    Link: {
      baseStyle: {
        transition: "all 0.3s ease",
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
});

export default theme;