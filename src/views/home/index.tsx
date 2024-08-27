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
const Home = () => {
  return (
    <Layout footer>
      <Banner />
      <HotCoins />
      <div style={{ height: "3rem" }} />
      <Guidebook />
      <div style={{ height: "3rem" }} />
      <News />
      <div style={{ height: "3rem" }} />
      <AppDescription />
      <div style={{ height: "3rem" }} />
      <Question />
      <div style={{ height: "1rem" }} />
      <BackToTop />
    </Layout>
  );
};
export default Home;
