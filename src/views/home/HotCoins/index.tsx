import { MARKETS_URL } from "@/config";
import { Box, Stack, Typography, Link, styled, Paper, Container } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Grid from "@mui/material/Unstable_Grid2";
import Icon1 from "@/assets/images/home/icon-coin-01.png";
import Icon2 from "@/assets/images/home/icon-coin-02.png";
import Icon3 from "@/assets/images/home/icon-coin-03.png";

// Mock data
import IconBtc from "@/assets/images/home/icon-btc.png";
const coinList = [
  {
    icon: IconBtc,
    name: "NPXS",
    fullName: "NPXS",
    price: "￥ 123,456",
    rate: "0"
  },
  {
    icon: IconBtc,
    name: "BTC",
    fullName: "Bitcoin",
    price: "￥ 123,456",
    rate: "1.23"
  },
  {
    icon: IconBtc,
    name: "ETH",
    fullName: "Bitcoin",
    price: "￥ 123,456",
    rate: "-1.23"
  },
  {
    icon: IconBtc,
    name: "BCH",
    fullName: "Bitcoin",
    price: "￥ 123,456",
    rate: "-8.23"
  },
  {
    icon: IconBtc,
    name: "ITH",
    fullName: "Bitcoin",
    price: "￥ 123,456",
    rate: "1.23"
  }
];

const CoinPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#000000" : "#ffffff",
  ...theme.typography.body2,
  borderRadius: 10,
  padding: "1rem 1.5rem"
}));

const CoinSection = ({ heading, coins, icon }) => {
  return (
    <Grid xs={4}>
      <CoinPaper variant="outlined">
        <Typography
          variant="subtitle1"
          sx={{
            mb: 3,
            background: `url(${icon}) no-repeat 0 center / 16px 16px`,
            pl: 3
          }}
        >
          {heading}
        </Typography>
        {coins.map((coin, index) => (
          <Box key={index} sx={{ cursor: "pointer", mb: 2 }}>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" spacing={2} alignItems="center">
                <img src={coin.icon} alt="icon" style={{ height: 26, width: 26 }} />
                <Box>
                  <Typography variant="body1">{coin.name}</Typography>
                  <Typography variant="caption" color={"text.secondary"}>
                    {coin.fullName}
                  </Typography>
                </Box>
              </Stack>
              <Box sx={{ textAlign: "right" }}>
                <Typography variant="body1">{coin.price}</Typography>
                <Typography variant="body1" color={coin.rate == 0 ? "text.primary" : coin.rate > 0 ? "#1C956C" : "#FF314A"}>
                  {coin.rate}%
                </Typography>
              </Box>
            </Stack>
          </Box>
        ))}
      </CoinPaper>
    </Grid>
  );
};

const HotCoins = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: "0 !important" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
        <Typography variant="h5">热门货币销售趋势</Typography>
        <Link
          href={MARKETS_URL}
          underline="none"
          color="text.primary"
          sx={{
            display: "flex",
            transition: "color 0.3s",
            "&:hover": {
              color: "primary.main"
            }
          }}
          alignItems="center"
        >
          查看所有币种 <KeyboardArrowRightIcon />
        </Link>
      </Stack>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5}>
          <CoinSection heading="主流币" coins={coinList} icon={Icon1} />
          <CoinSection heading="热门榜" coins={coinList} icon={Icon2} />
          <CoinSection heading="涨幅榜" coins={coinList} icon={Icon3} />
        </Grid>
      </Box>
    </Container>
  );
};
export default HotCoins;
