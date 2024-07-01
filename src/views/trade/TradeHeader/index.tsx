import { IconText } from "@/components/IconText";
import { Stack, SxProps, Theme, Typography } from "@mui/material";
import TradeLayoutCard from "../TradeLayoutCard";
import { useMemo, memo } from "react";

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
  px: 4,
  gridArea: "header",
  ...sx
});

const TradeHeader: React.FC<TradeHeaderProps> = memo(
  ({ assetData, sx }) => {
    const { coinInfo, coinPrice, coinRate, tradeData } = assetData;
    const style = useMemo(() => TradeLayoutCardStyle(sx), [sx]);
    return (
      <TradeLayoutCard sx={style}>
        <Stack height={70} direction={"row"} useFlexGap alignItems="center" pt={1}>
          <IconText icon={coinInfo.icon} text={coinInfo.symbol} chip={coinInfo.volume} singleLine={false} sx={{ mr: 6 }} />
          <Stack
            direction={"column"}
            useFlexGap
            mr={4.5}
            color={coinRate === 0 ? "text.main" : coinRate > 0 ? "#21C387" : "#FF314A"}
          >
            <Typography variant="body1">{coinPrice}</Typography>
            <Typography variant="caption">{coinRate > 0 ? `+${coinRate}%` : `${coinRate}%`}</Typography>
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
