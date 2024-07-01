/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description:Home Guidebook component
 */

import { Box, Button, Typography, Grid, Card, Container } from "@mui/material";
import Img01 from "@/assets/images/home/guidebook-01@2x.png";
import Img02 from "@/assets/images/home/guidebook-02@2x.png";
import Img03 from "@/assets/images/home/guidebook-03@2x.png";
import { REG_URL, TRADE_SPOT_URL } from "@/config";
import { useNavigate } from "react-router-dom";

const GuidebookContent = [
  {
    title: "创建账号",
    buttonText: "立即注册",
    description: "全方位金融风控系统和防盗系统，多签系统保证资金安全",
    image: Img01,
    url: REG_URL
  },
  {
    title: "账户充值",
    buttonText: "立即充值",
    description: "充值提现最快3分钟，24H人工在线审核，不错过最佳投资机会",
    image: Img02,
    url: "/register"
  },
  {
    title: "开始交易",
    buttonText: "立即交易",
    description: "全球业务服务网络覆盖，投资全球加密资产，与全球用户交易",
    image: Img03,
    url: TRADE_SPOT_URL
  }
];

const Guidebook = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg" sx={{ padding: "0 !important" }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        新手指南
      </Typography>
      <Grid container spacing={5}>
        {GuidebookContent.map((item, index) => (
          <Grid item xs={4} key={index}>
            <Card
              sx={{
                pt: 3,
                pb: 2,
                px: 4,
                minHeight: 340,
                borderRadius: 1.5,
                bgcolor: theme => (theme.palette.mode === "dark" ? "#000" : "#fff")
              }}
              variant="outlined"
            >
              <img src={item.image} alt={item.title} style={{ width: 100, marginBottom: 32 }} />
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 1, mb: 3 }}>
                {item.description}
              </Typography>
              <Box>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ borderRadius: 5, fontSize: 14, width: 84 }}
                  onClick={() => {
                    navigate(item.url);
                  }}
                >
                  {item.buttonText}
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Guidebook;
