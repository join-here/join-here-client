import { useEffect } from "react";
import PageWrapper from "@components/common/PageWrapper";
import Banner from "@components/home/Banner";
import Category from "@components/home/Category";
import useFooterColor from "@hooks/useFooterColor";

export default function Home() {
  const { setFooterColor } = useFooterColor();

  useEffect(() => {
    setFooterColor("dark");
    return () => setFooterColor("white");
  }, []);

  return (
    <PageWrapper theme="white">
      <Banner />
      <Category />
    </PageWrapper>
  );
}
