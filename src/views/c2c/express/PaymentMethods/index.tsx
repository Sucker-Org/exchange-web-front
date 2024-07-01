import Un from "@/assets/images/trade/un.png";
import Alipay from "@/assets/images/trade/alipay.png";
import WeChart from "@/assets/images/trade/weChart.png";
import { Stack } from "@mui/material";
interface PaymentMethodsProps {
  gap: number;
}
export const PaymentMethods: React.FC<PaymentMethodsProps> = ({ gap = 1 }) => {
  return (
    <Stack spacing={1} direction="row" component="span" sx={{ ml: gap, display: "inline-block", verticalAlign: "top" }}>
      <img src={Un} alt="银联" />
      <img src={Alipay} alt="支付宝" />
      <img src={WeChart} alt="微信" />
    </Stack>
  );
};
