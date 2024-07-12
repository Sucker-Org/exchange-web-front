import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  SxProps,
  Theme,
  ToggleButton,
  ToggleButtonGroup
} from "@mui/material";
import { memo } from "react";
import styles from "./index.module.scss";
import { DirectionEnums, DirectionType } from ".";

interface OrderbookHeaderProps {
  direction: DirectionType;
  handleChangeDirection: (event: React.MouseEvent<HTMLElement>, newAlignment: DirectionType) => void;
  decimal: string;
  handleChangeDecimal: (event: SelectChangeEvent) => void;
  decimalList: string[];
  sx?: SxProps<Theme>;
}

export const OrderbookHeader: React.FC<OrderbookHeaderProps> = memo(
  ({ direction, handleChangeDirection, decimal, handleChangeDecimal, decimalList, sx }) => {
    return (
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{
          height: 20,
          ...sx
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
          <ToggleButton value={DirectionEnums.BOTH} aria-label={DirectionEnums.BOTH} className={styles["toggle-button-both"]}>
            both
          </ToggleButton>
          <ToggleButton value={DirectionEnums.BID} aria-label={DirectionEnums.BID} className={styles["toggle-button-buy"]}>
            buy
          </ToggleButton>
          <ToggleButton value={DirectionEnums.ASK} aria-label={DirectionEnums.ASK} className={styles["toggle-button-ask"]}>
            ask
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
    );
  }
);
