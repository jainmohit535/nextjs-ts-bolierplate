import React, { RefCallback } from "react";
import {
  Button as RebassButton,
  ButtonProps,
  Text,
  SxStyleProp,
  TextProps,
} from "rebass";
import { Variant } from "../../theme/themeModel";

export interface Props extends Omit<ButtonProps, "children"> {
  text: string;
  textProps?: TextProps;
  "aria-label"?: string;
  disabled?: boolean;
  variant?: Variant;
  sx?: SxStyleProp;
  loading?: boolean;
  type?: "button" | "submit";
  size?: "small" | "normal";
}

const styles = {
  default: {
    WebkitTapHighlightColor: "transparent",
  },
  buttonDisabled: {
    backgroundColor: "gray.200",
    borderColor: "gray.200",
    color: "gray.300",

    "&:hover": {
      backgroundColor: "green.200",
      borderColor: "gray.200",
    },
  },
  small: {
    minHeight: 0,
    padding: 1,
    fontSize: "14px",
  },
};

export default function Button({
  text,
  textProps,
  disabled = false,
  variant = "primary",
  sx = {},
  loading = false,
  type = "button",
  "aria-label": ariaLabel,
  size = "normal",
  ...buttonProps
}: Props) {
  return (
    <RebassButton
      type={type}
      className={variant}
      disabled={disabled || loading}
      variant={variant}
      sx={{
        ...styles.default,
        ...(disabled ? styles.buttonDisabled : {}),
        ...(size === "small" ? styles.small : {}),
        ...sx,
      }}
      aria-label={ariaLabel || text}
      {...buttonProps}
    >
      <Text
        sx={{
          visibility: loading ? "hidden" : "inherit",
        }}
        {...textProps}
      >
        {text}
      </Text>
    </RebassButton>
  );
}
