/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description:
 */

import { Loading } from "@/components/Loading";
import { Card, SxProps, Theme } from "@mui/material";
interface TradeLayoutCardProps {
  children: React.ReactNode;
  isLoading?: boolean;
  sx?: SxProps<Theme>;
}
const TradeLayoutCard: React.FC<TradeLayoutCardProps> = ({ children, isLoading = true, sx }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        position: "relative",
        padding: 0,
        margin: 0,
        borderRadius: 0,
        ...sx
      }}
    >
      <Loading open={isLoading} fullscreen={false} />
      {children}
    </Card>
  );
};
export default TradeLayoutCard;
