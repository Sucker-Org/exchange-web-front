/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description: Question page component
 */

import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
const questionLIst = [
  {
    title: "灰度这样的加密货币交易所是如何运作的？",
    description:
      "灰度是一家加密货币交易所，您可以在这里购买、出售和交易超过1700种加密货币。完成注册和认证后，您只需充值入金即可开始购买加密货币。还为您提供交易所钱包来管理您的加密货币资产，以及为您提供实时加密货币市场数据以便您分析市场趋势。"
  },
  {
    title: "如何在灰度购买加密货币？",
    description:
      "在灰度购买加密货币非常简单。首先，您需要注册并完成实名认证。然后，您可以通过银行卡、支付宝、微信等方式进行入金。入金成功后，您可以在灰度上购买您喜欢的加密货币。"
  },
  {
    title: "灰度提供哪些产品？",
    description: "灰度为您提供多种加密货币产品，包括比特币、以太坊、莱特币等。您可以在灰度上购买、出售和交易超过1700种加密货币。"
  },
  {
    title: "灰度是一家安全的加密货币交易所吗？",
    description:
      "灰度是一家安全的加密货币交易所。我们为您提供多重加密技术保护您的资产安全，同时我们还为您提供实时市场数据以便您分析市场趋势。"
  }
];

const Question = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: "0 !important" }}>
      <Typography variant="h5" mb={3}>
        常见问题
      </Typography>
      <Grid container spacing={2} mb={4}>
        {questionLIst.map((item, index) => (
          <Grid xs={6} key={index}>
            <Accordion
              sx={{
                border: theme =>
                  theme.palette.mode === "dark" ? "1px solid rgba(68, 72, 80, 1)" : "1px solid rgba(0, 0, 0, 0.12)",
                boxShadow: 0
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandCircleDownOutlinedIcon />}
                aria-controls={`panel-content-${index}`}
                id={`panel-content-${index}`}
              >
                <Typography variant="h6">{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="#848E9C">{item.description}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h3" sx={{ pt: 5, pb: 8, textAlign: "center" }}>
        全球前50的加密货币交易的加密货币交易所
      </Typography>
    </Container>
  );
};

export default Question;
