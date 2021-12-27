import { SxStyleProp } from "rebass";
import ThemeModel from "./themeModel";

const breakpoints = ["480px", "768px", "1024px", "1280px"];

const textHelper = (size: string): SxStyleProp => {
  return {
    fontSize: size,
    fontFamily: "text",
    lineHeight: size,
    color: "gray.700",
    [`@media (min-width: ${breakpoints[1]})`]: {
      fontSize: `desktop.${size}`,
      lineHeight: `desktop.${size}`,
    },
  };
};

const buttonHelper = {
  borderRadius: "normal",
  fontWeight: "bold",
  minHeight: "48px",
  minWidth: "48px",
  wordWrap: "break-word",
  cursor: "pointer",
  letterSpacing: "1",
  fontSize: "16px",
  position: "relative",
  fontFamily: "text",
  lineHeight: "24px",
  padding: "8px 12px",
  borderWidth: "2px",
  borderStyle: "solid",
};

const theme: ThemeModel = {
  breakpoints,
  colors: {
    red: {
      100: "#FFF9FA",
      200: "#FFDDE5",
      300: "#FF94AE",
      500: "#F4164E",
      700: "#CC0033",
      900: "#960025",
    },
    gray: {
      100: "#FBFBFB",
      200: "#F2F2F2",
      300: "#DADADA",
      500: "#666666",
      700: "#373737",
      900: "#1E1E1E",
    },
    blue: {
      100: "#F4F8FB",
      200: "#D8E5F0",
      300: "#93B7D7",
      500: "#3F9AE9",
      700: "#266FAE",
      900: "#09437B",
    },
    green: {
      100: "#EFFFF2",
      200: "#C3FFCC",
      300: "#4ADD65",
      500: "#2FB848",
      700: "#0F8524",
      900: "#026000",
    },
    white: "#FFF",
    primary: "transparent", // rebass looks at `colors.primary` for the default `Button` background
  },
  fonts: {
    heading:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, system-ui !important',
    text: '"Open Sans", sans-serif', // System Default Fonts
  },
  fontWeights: {
    thin: "100",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    med: "20px",
    lg: "24px",
    xl: "40px",
    desktop: {
      xs: "14px",
      sm: "16px",
      base: "20px",
      med: "24px",
      lg: "32px",
      xl: "48px",
    },
  },
  lineHeights: {
    xs: "20px",
    sm: "22px",
    base: "24px",
    med: "28px",
    lg: "32px",
    xl: "48px",
    desktop: {
      xs: "22px",
      sm: "24px",
      base: "28px",
      med: "32px",
      lg: "40px",
      xl: "56px",
    },
  },
  borderRadius: {
    normal: "4px",
    redesign: "8px",
    round: "20px",
  },
  boxShadow: {
    // light & heavy used for redesign
    light: "0px 1px 32px rgba(0, 0, 0, 0.1)",
    normal: "0px 4px 8px rgba(55, 55, 55, 0.16)",
    heavy: "0px 8px 12px rgba(55, 55, 55, 0.32)",
  },
  text: {
    heading: {
      fontFamily: "heading",
    },
    xlHeadingBold: {
      ...textHelper("xl"),
      fontFamily: "heading",
      fontWeight: "bold",
    },
    lgHeadingBold: {
      ...textHelper("lg"),
      fontFamily: "heading",
      fontWeight: "bold",
    },
    medHeadingBold: {
      ...textHelper("med"),
      fontFamily: "heading",
      fontWeight: "bold",
    },
    headingBold: {
      ...textHelper("base"),
      fontFamily: "heading",
      fontWeight: "bold",
    },
    smHeadingBold: {
      ...textHelper("sm"),
      fontFamily: "heading",
      fontWeight: "bold",
    },
    xsHeadingBold: {
      ...textHelper("xs"),
      fontFamily: "heading",
      fontWeight: "bold",
    },
    xlBold: {
      fontWeight: "bold",
      ...textHelper("xl"),
    },
    lgBold: {
      fontWeight: "bold",
      ...textHelper("lg"),
    },
    medBold: {
      fontWeight: "bold",
      ...textHelper("med"),
    },
    bold: {
      fontWeight: "bold",
      ...textHelper("base"),
    },
    smBold: {
      fontWeight: "bold",
      ...textHelper("sm"),
    },
    xsBold: {
      fontWeight: "bold",
      ...textHelper("xs"),
    },
    lgDisplay: {
      fontWeight: "semibold",
      ...textHelper("lg"),
    },
    medDisplay: {
      fontWeight: "semibold",
      ...textHelper("med"),
    },
    display: {
      fontWeight: "semibold",
      ...textHelper("base"),
    },
    smDisplay: {
      fontWeight: "semibold",
      ...textHelper("sm"),
    },
    xsDisplay: {
      fontWeight: "semibold",
      ...textHelper("xs"),
    },
    emphasis: {
      fontWeight: "medium",
      ...textHelper("base"),
    },
    smEmphasis: {
      fontWeight: "medium",
      ...textHelper("sm"),
    },
    xsEmphasis: {
      fontWeight: "medium",
      ...textHelper("xs"),
    },
    lgParagraph: {
      fontWeight: "normal",
      ...textHelper("lg"),
    },
    medParagraph: {
      fontWeight: "normal",
      ...textHelper("med"),
    },
    paragraph: {
      fontWeight: "normal",
      ...textHelper("base"),
    },
    smParagraph: {
      fontWeight: "normal",
      ...textHelper("sm"),
    },
    xsParagraph: {
      fontWeight: "normal",
      ...textHelper("xs"),
    },
    xsThin: {
      fontWeight: "thin",
      ...textHelper("xs"),
    },
  },
  buttons: {
    primary: {
      ...buttonHelper,
      bg: "white.700",
      color: "gray.700",
      borderColor: "gray.700",
    },
    secondary: {
      ...buttonHelper,
      bg: "gray.700",
      color: "white",
      borderColor: "gray.700",

      ":hover": {
        bg: "gray.900",
        borderColor: "gray.900",
      },
    },
    tertiary: {
      ...buttonHelper,
      bg: "gray.200",
      color: "gray.500",
      borderColor: "gray.200",
    },
    destructive: {
      ...buttonHelper,
      bg: "red.700",
      color: "white",
      borderColor: "red.700",
    },
    intermediary: {
      ...buttonHelper,
      bg: "#4b4b4b",
      color: "white",
      borderColor: "#4b4b4b",
    },
    outline: {
      ...buttonHelper,
      bg: "white",
      color: "gray.700",
      borderColor: "gray.700",

      ":hover": {
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.25)",
      },
    },
    pill: {
      minWidth: "76px",
      color: "gray.700",
      cursor: "pointer",
      boxShadow: "normal",
      borderRadius: "round",
    },
    link: {
      fontWeight: "normal",
      background: "none",
      border: "none",
      padding: "0",
      color: "gray.700",
      cursor: "pointer",
      borderRadius: "0px",
      outline: "none",
    },
  },
};

export default theme;
