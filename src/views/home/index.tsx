/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description: Home component
 */

//views/home/index.tsx
import React from "react";
import Layout from "@/layout";
import { Box } from "@mui/material";
import Banner from "./Banner";
import HotCoins from "./HotCoins";
import Guidebook from "./Guidebook";
import News from "./News";
import AppDescription from "./Description";
import Question from "./Question";
import BackToTop from "@/components/BackToTop";
const RowGap = () => {
  return <Box sx={{ mb: 6 }} />;
};
const Home = () => {
  return (
    <Layout>
      <Banner />
      <HotCoins />
      <RowGap />
      <Guidebook />
      <RowGap />
      <News />
      <RowGap />
      <AppDescription />
      <RowGap />
      <Question />
      <RowGap />
      <BackToTop />
    </Layout>
  );
};
export default Home;
