/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description: Description page  component
 */

import { Box, ButtonBase, Container, Stack, Typography, styled } from "@mui/material";
import ImageApp from "@/assets/images/home/show.webp";
import BgBtnIos from "@/assets/images/home/bg-btn-ios.png";
import BgBtnAndroid from "@/assets/images/home/bg-btn-android.png";
import styles from "./index.module.scss";
const ImageButton = styled(ButtonBase)(() => ({
  height: 39,
  width: 155
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%"
});

const AppDescription = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: "0 !important" }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        随时随地，开启交易
      </Typography>
      <Stack direction="row" justifyContent="space-between" spacing={8}>
        <img src={ImageApp} alt="灰度交易所" style={{ width: 670, marginBottom: 32, marginLeft: "-4%" }} />
        <Stack justifyContent="space-between" sx={{ pb: 10 }} className={styles.text}>
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              安全保障
            </Typography>
            <Typography variant="body2">
              HuiDu交易所采用先进的安全技术和严格的风控措施，保障您的资产安全，让您放心交易。
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              高效便捷
            </Typography>
            <Typography variant="body2">
              HuiDu提供快速的交易执行和即时的资金流动性，让您轻松进行数字资产交易，随时随地抓住投资机会。
            </Typography>
          </Box>
          <Stack direction="row" spacing={2}>
            <ImageButton>
              <ImageSrc style={{ backgroundImage: `url(${BgBtnIos})` }} />
            </ImageButton>
            <ImageButton>
              <ImageSrc style={{ backgroundImage: `url(${BgBtnAndroid})` }} />
            </ImageButton>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
export default AppDescription;
