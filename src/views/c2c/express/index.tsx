/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description: C2C Express component
 */
import Layout from "@/layout";
import StepDesc from "./StepDesc";
import ExpressQuestion from "./ExpressQuestion";
import { Box, Container, Stack, Typography } from "@mui/material";
import ExpressFrom from "./ExpressFrom";
import { PaymentMethods } from "./PaymentMethods";
import BackToTop from "@/components/BackToTop";
import C2CNavigation from "../../../components/C2CNavigation";
import React from "react";

const Express = () => {
  const renderText = () => {
    return (
      <Box sx={{ pt: 10, width: "45%", ml: "8%" }}>
        <Typography variant="h3" gutterBottom>
          C2C快捷买币
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" mb={8}>
          安全、快捷、简单地使用法币购买加密货币
        </Typography>

        <Typography variant="subtitle1" color="text.secondary">
          接受的付款方式：
          <PaymentMethods gap={1} />
        </Typography>
      </Box>
    );
  };
  return (
    <Layout footer>
      <C2CNavigation sx={{ mb: 4 }} />
      <Container sx={{ maxWidth: { xl: "xl" } }}>
        <Stack direction={"row"} useFlexGap mb="5rem">
          {renderText()}
          <ExpressFrom />
        </Stack>
        <StepDesc />
        <div style={{ height: "4rem" }} />
        <ExpressQuestion />
        <div style={{ height: "4rem" }} />
      </Container>

      <BackToTop />
    </Layout>
  );
};
export default Express;
