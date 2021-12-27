import { SxStyleProp } from "rebass";

enum Color {
  red = "red",
  green = "green",
  blue = "blue",
  gray = "gray",
  white = "white",
  primary = "primary",
}

type ColorDepth = "100" | "200" | "300" | "400" | "500" | "700" | "900";

enum FontWeight {
  thin = "thin",
  normal = "normal",
  medium = "medium",
  semibold = "semibold",
  bold = "bold",
  extrabold = "extrabold",
}

enum FontSize {
  xs = "xs",
  sm = "sm",
  base = "base",
  med = "med",
  lg = "lg",
  xl = "xl",
}

enum TextVariant {
  heading = "heading",
  xlHeadingBold = "xlHeadingBold",
  lgHeadingBold = "lgHeadingBold",
  medHeadingBold = "medHeadingBold",
  headingBold = "headingBold",
  smHeadingBold = "smHeadingBold",
  xsHeadingBold = "xsHeadingBold",
  xlBold = "xlBold",
  lgBold = "lgBold",
  medBold = "medBold",
  bold = "bold",
  smBold = "smBold",
  xsBold = "xsBold",
  lgDisplay = "lgDisplay",
  medDisplay = "medDisplay",
  display = "display",
  smDisplay = "smDisplay",
  xsDisplay = "xsDisplay",
  emphasis = "emphasis",
  smEmphasis = "smEmphasis",
  xsEmphasis = "xsEmphasis",
  lgParapgrah = "lgParagraph",
  medParagraph = "medParagraph",
  paragraph = "paragraph",
  smParagraph = "smParagraph",
  xsParapgrah = "xsParagraph",
  xsThin = "xsThin",
}

type FontOptions = {
  [key in FontSize]: string;
} & {
  desktop: {
    [key in FontSize]: string;
  };
};

export type Variant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "outline"
  | "intermediary"
  | "destructive";

export default interface Theme {
  breakpoints: string[];
  colors: {
    [colorKey in Color]:
      | string
      | {
          [depthKey in ColorDepth]?: string;
        };
  };
  fonts: {
    text: string;
    heading: string;
  };
  fontWeights: {
    [key in FontWeight]: string;
  };
  fontSizes: FontOptions;
  lineHeights: FontOptions;
  borderRadius: {
    normal: string;
    redesign: string;
    round: string;
  };
  boxShadow: {
    light: string;
    normal: string;
    heavy: string;
  };
  buttons: {
    [key in Variant]: {
      borderRadius: string;
      fontWeight: string;
      minHeight: string;
      minWidth: string;
      wordWrap: string;
      cursor: string;
      letterSpacing: string;
      fontSize: string;
      position: string;
      fontFamily: string;
      lineHeight: string;
      padding: string;
      bg: string;
      color: string;
      borderWidth: string;
      borderStyle: string;
      borderColor: string;
      ":hover"?: SxStyleProp;
    };
  } & {
    pill: {
      minWidth: string;
      color: string;
      cursor: string;
      boxShadow: string;
      borderRadius: string;
    };
    link: {
      fontWeight: string;
      background: string;
      border: string;
      padding: string;
      color: string;
      cursor: string;
      borderRadius: string;
      outline: string;
    };
  };
  text: {
    [key in TextVariant]: SxStyleProp;
  };
}
