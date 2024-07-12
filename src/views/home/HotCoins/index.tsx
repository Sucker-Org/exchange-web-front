import { MARKETS_URL, TRADE_SPOT_URL } from "@/config";
import { Box, Stack, Typography, Link, styled, Paper, Container } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Grid from "@mui/material/Unstable_Grid2";
import Icon1 from "@/assets/images/home/icon-coin-01.png";
import Icon2 from "@/assets/images/home/icon-coin-02.png";
import Icon3 from "@/assets/images/home/icon-coin-03.png";

// Mock data
import IconBtc from "@/assets/images/home/icon-btc.png";
import { IconText } from "@/components/IconText";
import { useNavigate } from "react-router-dom";
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
  padding: "1rem 0"
}));

const CoinSection = ({ heading, coins, icon }) => {
  const navigate = useNavigate();

  return (
    <Grid sm={12} md={4}>
      <CoinPaper variant="outlined">
        <Typography
          variant="subtitle1"
          sx={{
            mb: 3,
            mx: "1.5rem",
            background: `url(${icon}) no-repeat 0 center / 16px 16px`,
            pl: 3
          }}
        >
          {heading}
        </Typography>
        {coins.map((coin, index) => (
          <Stack
            key={index}
            direction="row"
            justifyContent="space-between"
            onClick={() => {
              navigate(`${TRADE_SPOT_URL}?symbol=${coin.name}_USDT`);
            }}
            sx={{
              cursor: "pointer",
              mb: 2,
              mx: "0.5rem",
              px: "1rem",
              borderRadius: 1,
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "background.light"
              }
            }}
          >
            <IconText
              icon={coin.icon}
              text={coin.name}
              subText={coin.fullName}
              singleLine={false}
              iconSize={{ height: 26, width: 26 }}
            />
            <Box sx={{ textAlign: "right" }}>
              <Typography variant="body1">{coin.price}</Typography>
              <Typography variant="body1" color={coin.rate == 0 ? "text.primary" : coin.rate > 0 ? "#1C956C" : "#FF314A"}>
                {coin.rate}%
              </Typography>
            </Box>
          </Stack>
        ))}
      </CoinPaper>
    </Grid>
  );
};

const HotCoins = () => {
  return (
    <Container maxWidth="lg">
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
        <Grid container spacing={4} direction={{ xs: "column", sm: "column", md: "row" }}>
          <CoinSection heading="主流币" coins={coinList} icon={Icon1} />
          <CoinSection heading="热门榜" coins={coinList} icon={Icon2} />
          <CoinSection heading="涨幅榜" coins={coinList} icon={Icon3} />
        </Grid>
      </Box>
    </Container>
  );
};
export default HotCoins;
