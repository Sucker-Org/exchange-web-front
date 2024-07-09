import { Typography, Stack } from "@mui/material";
import { IconText } from "@/components/IconText";
import RateText from "@/components/RateText";

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
export interface MarketListItemProps {
  keyNumber: number;
  coin: string;
  name: string;
  volume: string;
  price: string;
  turnover?: string | undefined;
  rate: number;
}

export const MarketListItem: React.FC<MarketListItemProps> = ({ keyNumber, coin, name, price, rate }) => {
  return (
    <Stack direction="row" alignItems="center" sx={listItemStyle}>
      <Typography variant="body2" color="text.secondary" sx={{ width: 10, flex: "10 1 0%" }}>
        {keyNumber}
      </Typography>
      <IconText
        icon={coin}
        iconSize={{ width: 24, height: 24 }}
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
        ${price}
      </Typography>
      <Typography variant="h2" sx={{ width: 52, flex: "52 1 0%", textAlign: "right" }}>
        <RateText rate={rate} />
      </Typography>
    </Stack>
  );
};
