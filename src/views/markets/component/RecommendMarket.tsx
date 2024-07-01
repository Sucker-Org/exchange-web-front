import React from "react";
import { Card, Typography, Grid, Stack, Link } from "@mui/material";
import { IconText } from "@/components/IconText";
import hotIcon from "@/assets/images/markets/icon-hot.webp";
import upIcon from "@/assets/images/markets/icon-up.webp";
import downIcon from "@/assets/images/markets/icon-down.webp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import iconBtc from "@/assets/images/home/icon-btc.png";
import { MARKET_RANK_URL } from "@/config";

// Common styles
const cardStyle = { py: 2, px: 1, borderRadius: 4, bgcolor: "background.default" };
const linkStyle = {
  display: "inline-flex",
  alignItems: "center",
  fontSize: 12,
  transition: "color 0.3s",
  "&:hover": { color: "primary.main" }
};
const listItemStyle = {
  mb: 2,
  p: 1,
  borderRadius: 1,
  transition: "background-color 0.3s",
  "&:hover": {
    cursor: "pointer",
    bgcolor: "background.light"
  }
};

interface MarketCardProps {
  cardIcon: string;
  title: string;
  coinData: MarketListItemProps[];
}

interface MarketListItemProps {
  coin: string;
  name: string;
  volume: string;
  rate: number;
}

const MarketCard: React.FC<MarketCardProps> = React.memo(({ cardIcon, title, coinData }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Card variant="outlined" sx={cardStyle}>
      <Stack flexDirection="row" justifyContent="space-between" pl={1} mb={2}>
        <IconText fz="caption" icon={cardIcon} width={12} height={12} text={title} />
        <Link href={MARKET_RANK_URL} underline="none" color="text.primary" sx={linkStyle}>
          更多
          <KeyboardArrowRightIcon />
        </Link>
      </Stack>
      {coinData.map((coinInfo, index) => (
        <MarketListItem key={index} {...coinInfo} />
      ))}
    </Card>
  </Grid>
));

const MarketListItem: React.FC<MarketListItemProps> = ({ coin, name, volume, rate }) => {
  return (
    <Stack direction="row" alignItems="center" sx={listItemStyle}>
      <IconText
        icon={coin}
        width={24}
        height={24}
        text={name}
        sx={{
          width: 90,
          flex: "90 1 0%",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }}
      />
      <Typography
        variant="body2"
        sx={{ display: "flex", width: 85, flex: "85 1 0%", overflow: "hidden", textOverflow: "ellipsis" }}
      >
        ${volume !== "" ? volume : "--"}
      </Typography>
      <Typography
        variant="body2"
        color={rate === 0 ? "text.primary" : rate > 0 ? "#1C956C" : "#FF314A"}
        sx={{ width: 52, flex: "52 1 0%", textAlign: "right" }}
      >
        {rate === 0 ? 0 : rate > 0 ? "+" + rate : rate}%
      </Typography>
    </Stack>
  );
};

export const RecommendMarket: React.FC = () => {
  const marketData = {
    hot: {
      cardIcon: hotIcon,
      title: "热门币种",
      data: [
        { coin: iconBtc, name: "BTC", volume: "50000", rate: 2.3 },
        { coin: iconBtc, name: "ETH", volume: "3000", rate: -1.1 },
        { coin: iconBtc, name: "BNB", volume: "500", rate: 0 }
      ]
    },
    up: {
      cardIcon: upIcon,
      title: "涨幅榜",
      data: [
        { coin: iconBtc, name: "HDC", volume: "100", rate: 5.3 },
        { coin: iconBtc, name: "ETH", volume: "3000", rate: 2.1 },
        { coin: iconBtc, name: "HIGH", volume: "0.5", rate: 1.1 }
      ]
    },
    down: {
      cardIcon: downIcon,
      title: "跌幅榜",
      data: [
        { coin: iconBtc, name: "ETC", volume: "100", rate: -5.3 },
        { coin: iconBtc, name: "DOGE", volume: "0.3", rate: -2.1 },
        { coin: iconBtc, name: "W", volume: "0.5", rate: -1.1 }
      ]
    }
  };
  return (
    <Grid container spacing={2}>
      {Object.entries(marketData).map(([key, { cardIcon, title, data }]) => (
        <MarketCard key={key} cardIcon={cardIcon} title={title} coinData={data} />
      ))}
    </Grid>
  );
};
