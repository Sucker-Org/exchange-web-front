import { SxProps, Theme } from "@mui/material";
import TradeLayoutCard from "../TradeLayoutCard";
interface WatchListProps {
  sx?: SxProps<Theme>;
}
const WatchList: React.FC<WatchListProps> = ({ sx }) => {
  return <TradeLayoutCard sx={{ ...sx }}>WatchList</TradeLayoutCard>;
};
export default WatchList;
