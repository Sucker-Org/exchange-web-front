/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description: Home component
 */

//views/home/index.tsx
import React from "react";
import Layout from "@/layout";
import Banner from "./Banner";
import HotCoins from "./HotCoins";
import Guidebook from "./Guidebook";
import News from "./News";
import AppDescription from "./Description";
import Question from "./Question";
import BackToTop from "@/components/BackToTop";
import RowGap from "@/components/RowGap";
const Home = () => {
  return (
    <Layout footer>
      <Banner />
      <HotCoins />
      <RowGap size="3rem" />
      <Guidebook />
      <RowGap size="3rem" />
      <News />
      <RowGap size="3rem" />
      <AppDescription />
      <RowGap size="3rem" />
      <Question />
      <RowGap />
      <BackToTop />
    </Layout>
  );
};
export default Home;
