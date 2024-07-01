import { SxProps, Theme } from "@mui/material";
import TradeLayoutCard from "../TradeLayoutCard";
interface AccountProps {
  sx?: SxProps<Theme>;
}
const Account: React.FC<AccountProps> = ({ sx }) => {
  return (
    <TradeLayoutCard
      sx={{
        ...sx
      }}
    >
      <div>Account</div>
    </TradeLayoutCard>
  );
};
export default Account;
