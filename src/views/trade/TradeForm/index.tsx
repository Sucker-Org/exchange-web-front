import TradeLayoutCard from "../components/TradeLayoutCard";
import { SxProps, Theme } from "@mui/material";
interface TradeFormProps {
  sx?: SxProps<Theme>;
}
const TradeForm: React.FC<TradeFormProps> = ({ sx }) => {
  return (
    <TradeLayoutCard sx={{ ...sx }}>
      <div>TradeForm</div>
    </TradeLayoutCard>
  );
};
export default TradeForm;
