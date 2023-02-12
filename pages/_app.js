import cookies from "next-cookies";
import Head from "next/head";
import "@styles/global.scss";
import Layout from "@components/Layout";
import { FooterColorProvider } from "@contexts/footerColor";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>조인히어</title>
      </Head>
      <FooterColorProvider>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </FooterColorProvider>
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const { user_id } = cookies(ctx);

  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps = {
    ...pageProps,
    loginInfo: {
      isLoggedIn: user_id ? true : false,
      userName: user_id || "조인히어",
    },
  };

  return { pageProps };
};
