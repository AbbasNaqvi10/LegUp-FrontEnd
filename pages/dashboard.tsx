import type { NextPage } from "next";
import { Content } from "../components/home/content";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Layout } from "../components/layout/layout";

const Home: NextPage = () => {
  const lightTheme = createTheme({
    type: "light",
    theme: {
      colors: {},
    },
  });

  const darkTheme = createTheme({
    type: "dark",
    theme: {
      colors: {},
    },
  });

  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        //dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Layout>
          <Content />;
        </Layout>
      </NextUIProvider>
    </NextThemesProvider>
  );
};

export default Home;
