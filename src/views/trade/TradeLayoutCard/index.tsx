/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description:
 */

import { Card, SxProps, Theme } from "@mui/material";
interface TradeLayoutCardProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}
const TradeLayoutCard: React.FC<TradeLayoutCardProps> = ({ children, sx }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        padding: 0,
        margin: 0,
        borderRadius: 0,
        ...sx
      }}
    >
      {children}
    </Card>
  );
};
export default TradeLayoutCard;
