import { IconText } from "@/components/IconText";
import { IconButton, Stack, SxProps, Theme, Typography } from "@mui/material";
import TradeLayoutCard from "../components/TradeLayoutCard";
import { useMemo, memo, useState, useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { RateText } from "@/components/RateText";

const AssetItem = memo(({ title, value }: { title: string; value: string }) => {
  return (
    <Stack direction={"column"} useFlexGap mr={4.5}>
      <Typography variant="body2" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="caption">{value}</Typography>
    </Stack>
  );
});

export interface TradeHeaderProps {
  sx?: SxProps<Theme>;
  assetData: {
    coinInfo: {
      icon: string;
      symbol: string;
      volume: string;
    };
    coinPrice: string;
    coinRate: number;
    tradeData: {
      title: string;
      value: string;
    }[];
  };
}

const TradeLayoutCardStyle = (sx?: SxProps<Theme>) => ({
  borderTop: "none",
  px: 2,
  gridArea: "header",
  ...sx
});

const TradeHeader: React.FC<TradeHeaderProps> = memo(
  ({ assetData, sx }) => {
    const [loading, setLoading] = useState(true);
    const { coinInfo, coinPrice, coinRate, tradeData } = assetData;

    const [isFav, setIsFav] = useState(false);
    const handleFav = (e: { stopPropagation: () => void }) => {
      e.stopPropagation();
      setIsFav(!isFav);
    };

    const style = useMemo(() => TradeLayoutCardStyle(sx), [sx]);
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }, []);
    return (
      <TradeLayoutCard isLoading={loading} sx={style}>
        <Stack height={70} direction={"row"} useFlexGap alignItems="center" pt={1}>
          <IconButton title="fav" sx={{ mr: 1, color: isFav ? "var(--fav-yellow)" : "text.primary" }} onClick={handleFav}>
            {isFav ? <StarIcon /> : <StarBorderIcon />}
          </IconButton>
          <IconText
            icon={coinInfo.icon}
            text={coinInfo.symbol}
            subText={coinInfo.volume}
            singleLine={false}
            fz="subtitle1"
            sx={{
              mr: 6,
              "& .symbol": {
                fontWeight: 600
              }
            }}
          />
          <Stack direction={"column"} useFlexGap mr={4.5}>
            <Typography
              variant="body1"
              color={coinRate === 0 ? "text.primary" : coinRate > 0 ? "var(--rate-green)" : "var(--rate-red)"}
            >
              {coinPrice}
            </Typography>
            <RateText rate={coinRate} variant="caption" zeroColor="text.primary" />
          </Stack>
          {tradeData.map((item, index) => (
            <AssetItem key={index} title={item.title} value={item.value} />
          ))}
        </Stack>
      </TradeLayoutCard>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.assetData === nextProps.assetData;
  }
);
export default TradeHeader;
