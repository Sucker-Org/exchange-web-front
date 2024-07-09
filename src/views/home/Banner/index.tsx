/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description:Home page banner component
 */
import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import BgSlideImg from "@/assets/images/home/bg-slide.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { REG_URL } from "@/config";
import IconCard from "./IconCard";
import IconBtc from "@/assets/images/home/icon-btc.png";
type StateProps = string;

const Banner = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState<StateProps>("");
  const handleRegister = () => {
    navigate(REG_URL, { state: { username: register } });
  };
  return (
    <Container maxWidth="lg">
      <Stack py={12} direction="row" justifyContent="space-between" alignItems="center" useFlexGap>
        <Box>
          <Typography sx={{ mb: 3, fontWeight: 500, fontSize: 72, lineHeight: 1.1 }}>
            全球前50的数字
            <br />
            货币交易所
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 6 }}>
            国家机构担保资产安全
          </Typography>

          <Stack direction="row" spacing={1} mb={8} useFlexGap>
            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              fullWidth
              aria-label="邮箱/手机号"
              placeholder="邮箱/手机号"
              inputProps={{
                autoComplete: "off",
                "aria-label": "邮箱/手机号"
              }}
              onChange={e => setRegister(e.target.value)}
              sx={{
                width: 360,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "5rem"
                }
              }}
              hiddenLabel
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ flexShrink: 0, borderRadius: "5rem", width: 120 }}
              onClick={handleRegister}
            >
              立即注册
            </Button>
          </Stack>

          <Stack direction="row" spacing={2}>
            <IconCard
              icon={IconBtc}
              symbol="BTC/USDT"
              price="￥ 123,456"
              rate={-1.23}
              lineData={[
                68000, 68600, 67030, 68900, 70600, 71000, 70040, 69008, 68800, 68000, 68600, 67000, 68900, 70000, 71000, 70040,
                69008, 68800
              ]}
            />
            <IconCard icon={IconBtc} symbol="ETH/USDT" price="￥ 123,456" rate={8.23} lineData={[1, 3, 4, 6, 7, 8, 3, 4, 5]} />
            <IconCard icon={IconBtc} symbol="HDC/USDT" price="￥ 99" rate={-1.23} lineData={[1, 3, 4, 6, 7, 8, 3, 4, 5]} />
          </Stack>
        </Box>
        <Box>
          <Box
            sx={{
              height: { sm: "415px", md: "588px" }
            }}
          >
            <img
              src={BgSlideImg}
              alt="bg"
              style={{
                height: "100%"
              }}
            />
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};
export default Banner;
