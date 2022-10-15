import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/global_styles";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/images/favicon/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles></GlobalStyles>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
