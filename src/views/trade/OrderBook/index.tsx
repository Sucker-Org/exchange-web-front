import {
  Box,
  FormControl,
  List,
  ListItem,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  SxProps,
  Theme,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from "@mui/material";
import TradeLayoutCard from "../TradeLayoutCard";
import Compare from "./Compare";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useThemeStore } from "@/stores/modules/theme";
interface OrderBookProps {
  sx: SxProps<Theme>;
}
const OrderBook: React.FC<OrderBookProps> = ({ sx }) => {
  const themeMode = useThemeStore();
  const [direction, setDirection] = useState<string | null>("both");

  const handleChangeDirection = (_event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    if (newAlignment !== null) {
      setDirection(newAlignment);
    }
  };

  const [decimalList, setDecimalList] = useState(["0.1"]);
  const [decimal, setDecimal] = useState("0.1");
  const handleChangeDecimal = (event: SelectChangeEvent) => {
    setDecimal(event.target.value);
  };

  useEffect(() => {
    setDecimalList(["0.1", "1", "10", "100"]);
  }, []);
  return (
    <TradeLayoutCard sx={{ ...sx }}>
      <Box
        className={`${themeMode.theme === "dark" ? styles["theme-dark"] : styles["theme-light"]}`}
        sx={{
          px: 1,
          display: "flex",
          height: "100%",
          flexDirection: "column",
          py: 1
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{
            height: 20,
            mb: 1
          }}
        >
          <ToggleButtonGroup
            value={direction}
            size="small"
            exclusive
            onChange={handleChangeDirection}
            aria-label="direction"
            className={styles["toggle-button-wrap"]}
          >
            <ToggleButton value="both" aria-label="both" className={styles["toggle-button-both"]}>
              both
            </ToggleButton>
            <ToggleButton value="buy" aria-label="buy" className={styles["toggle-button-buy"]}>
              buy
            </ToggleButton>
            <ToggleButton value="sell" aria-label="sell" className={styles["toggle-button-sell"]}>
              sell
            </ToggleButton>
          </ToggleButtonGroup>

          <FormControl sx={{ m: 0, maxWidth: 100 }} size="small">
            <Select
              sx={{
                height: 20,
                fontSize: 13,
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none"
                },
                "& .MuiSelect-select": {
                  padding: 0
                }
              }}
              style={{
                padding: 0
              }}
              labelId="decimal-select-small-label"
              id="decimal-select-small"
              value={decimal}
              label="decimal"
              onChange={handleChangeDecimal}
            >
              {decimalList.map((item, index) => (
                <MenuItem key={index} sx={{ fontSize: 12, width: 100 }} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <Box
          sx={{
            height: "calc(100% - 40px)"
          }}
        >
          <Stack
            direction={"row"}
            sx={{
              height: "20px",
              width: "100%",
              lineHeight: "20px"
            }}
          >
            <Typography
              variant="caption"
              color="text.grey"
              sx={{
                flex: "1 1",
                overflow: "hidden",
                textAlign: "left",
                textOverflow: "ellipsis"
              }}
            >
              价格(USDT)
            </Typography>
            <Typography
              variant="caption"
              color="text.grey"
              sx={{
                flex: "1 1",
                overflow: "hidden",
                textAlign: "right",
                textOverflow: "ellipsis"
              }}
            >
              数量(BTC)
            </Typography>
            <Typography
              variant="caption"
              color="text.grey"
              sx={{
                flex: "1 1",
                overflow: "hidden",
                textAlign: "right",
                textOverflow: "ellipsis"
              }}
            >
              成交额
            </Typography>
          </Stack>
          <Stack height={"100%"} justifyContent={direction === "both" ? "center" : "flex-start"}>
            {(direction === "sell" || direction === "both") && (
              <List>
                <ListItem>sell data</ListItem>
              </List>
            )}

            <Stack>
              <Typography variant="body1" color="#21C387">
                70,053.3 {direction} {decimal}
              </Typography>
            </Stack>
            {(direction === "buy" || direction === "both") && (
              <List>
                <ListItem>buy data</ListItem>
              </List>
            )}
          </Stack>
        </Box>

        <Compare sx={{ height: 20 }} compareData={{ buy: 75.63, sell: 24.37 }} />
      </Box>
    </TradeLayoutCard>
  );
};
export default OrderBook;
