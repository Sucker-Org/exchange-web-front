import React from "react";
import Layout from "@/layout";
import { Container, Typography } from "@mui/material";

import { RecommendMarket } from "./component/RecommendMarket";

const Markets = () => {
  return (
    <Layout footer>
      <Container maxWidth={"lg"} sx={{ padding: "0 !important", minHeight: "calc(100vh - var(--header-height))" }}>
        <Typography variant="h6" color="main" my={5}>
          行情概览
        </Typography>
        <RecommendMarket />
      </Container>
    </Layout>
  );
};

export default Markets;
