import { useMemo } from "react";
import Theme from "../theme/themeModel";
import { SxStyleProp } from "rebass";
import { useTheme as emotionUseTheme } from "emotion-theming";

export function useTheme() {
  return emotionUseTheme();
}

export function makeStyles<
  R extends Record<string, SxStyleProp>,
  T extends (theme: Theme) => R
>(styleCreator: T): () => R;
export function makeStyles<T extends Record<string, SxStyleProp>>(styles: T): T;
// This is used for easier type inference of non-inline style overrides
// // eslint-disable-next-line @typescript-eslint/ban-types
export function makeStyles(arg: Function | object): Function | object {
  if (typeof arg === "function") {
    return () => {
      const theme = useTheme();
      return useMemo(() => arg(theme), [theme]);
    };
  }
  return Object.freeze(arg);
}
