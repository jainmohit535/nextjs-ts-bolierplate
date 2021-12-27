import type { AppProps } from "next/app";
import { ThemeProvider } from "emotion-theming";
import { HeaderFooterPage } from "../components/HeaderFooterPage";
import Theme from "../shared-components/theme/index";
import Button from "../shared-components/components/Button";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <HeaderFooterPage>
        <Button text="Sample button" />
        <Button text="Sample button" variant="secondary" />
        <Button text="Sample button" variant="destructive" />

        <Component {...pageProps} />
      </HeaderFooterPage>
    </ThemeProvider>
  );
}

export default MyApp;
