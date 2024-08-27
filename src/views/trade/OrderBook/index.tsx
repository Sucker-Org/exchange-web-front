import { Box, SelectChangeEvent, SxProps, Theme, useTheme } from "@mui/material";
import TradeLayoutCard from "../components/TradeLayoutCard";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Compare } from "./Compare";
import { OrderbookHeader } from "./OrderbookHeader";
import { ListTableHeader } from "../components/ListTableHeader";
import { OrderbookTableBody } from "./OrderbookTableBody";

export const DirectionEnums = {
  BOTH: "both",
  BID: "bid",
  ASK: "ask"
};
export type DirectionType = (typeof DirectionEnums)[keyof typeof DirectionEnums];
interface OrderBookProps {
  sx: SxProps<Theme>;
}
const OrderBook: React.FC<OrderBookProps> = ({ sx }) => {
  const themeMode = useTheme();
  const [loading, setLoading] = useState(true);

  const [direction, setDirection] = useState<DirectionType>(DirectionEnums.BOTH);
  const handleChangeDirection = (_event, newAlignment: DirectionType) => {
    if (newAlignment !== null) {
      setDirection(newAlignment);
    }
  };

  const [decimalList, setDecimalList] = useState(["0.1"]);
  const [decimal, setDecimal] = useState("0.1");
  const handleChangeDecimal = (event: SelectChangeEvent) => {
    setDecimal(event.target.value);
  };

  const compareData = {
    buy: 22.63,
    sell: 77.37
  };

  useEffect(() => {
    setDecimalList(["0.1", "1", "10", "100"]);
    setLoading(false);
  }, []);

  const headers = [
    { title: "价格(USDT)", align: "left" },
    { title: "数量(BTC)", align: "right" },
    { title: "成交额", align: "right" }
  ];
  return (
    <TradeLayoutCard isLoading={loading} sx={{ ...sx }}>
      <Box
        sx={{
          display: "flex",
          // height: "100%",
          flexDirection: "column"
        }}
      >
        <Box
          className={`${themeMode.palette.mode === "dark" ? styles["theme-dark"] : styles["theme-light"]}`}
          sx={{
            display: "flex",
            height: "100%",
            flexDirection: "column"
          }}
        >
          <OrderbookHeader
            direction={direction}
            handleChangeDirection={handleChangeDirection}
            decimal={decimal}
            handleChangeDecimal={handleChangeDecimal}
            decimalList={decimalList}
            sx={{ height: 20, ml: 1, my: 1 }}
          />
          <ListTableHeader headers={headers} />

          <OrderbookTableBody newPrice={"76892.76"} priceDirection={"down"} decimal={decimal} direction={direction} />
          <Compare sx={{ height: 20, px: 1.5 }} {...compareData} />
        </Box>
      </Box>
    </TradeLayoutCard>
  );
};
export default OrderBook;
