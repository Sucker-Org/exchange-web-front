import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import React, { memo } from "react";
import { DirectionEnums, DirectionType } from ".";
import style from "./index.module.scss";
import { formatNumber } from "@/utils";

interface OrderbookTableBodyProps {
  price: string;
  priceDirection: "up" | "down";
  direction: DirectionType;
  decimal: string;
}

const OrderbookTicker = memo(({ price, priceDirection }: { price: string; priceDirection: "up" | "down" }) => {
  return (
    <Stack direction="row" alignItems="center" px={1}>
      <Typography variant="h6" color={priceDirection === "up" ? "var(--rate-green)" : "var(--rate-red)"}>
        {price}
      </Typography>
    </Stack>
  );
});

const OrderbookListItem = memo(({ color, bgcolor, widthPercent }: { color: string; bgcolor: string; widthPercent: string }) => {
  return (
    <ListItem
      alignItems="center"
      sx={{ height: 20, py: 0, px: 1, bgcolor: "transparent" }}
      className={style["orderbook-list-item"]}
    >
      <Typography variant="caption" color={color} className={style["orderbook-list-item-text"]}>
        {formatNumber(57895.88)}
      </Typography>
      <Typography variant="caption" color="text.main" className={style["orderbook-list-item-text"]}>
        {formatNumber(11293.03701)}
      </Typography>
      <Typography variant="caption" color="text.main" className={style["orderbook-list-item-text"]}>
        {formatNumber(11293.03701)}
      </Typography>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: widthPercent,
          backgroundColor: bgcolor,
          zIndex: 1
        }}
      ></div>
    </ListItem>
  );
});

interface OrderbookListProps {
  type: DirectionType;
}
const OrderbookList = memo(({ type }: OrderbookListProps) => {
  const itemCount = 20;

  return (
    <List className={style["orderbook-list-box"]}>
      {Array.from({ length: itemCount }).map((_, index) => (
        <OrderbookListItem
          key={index}
          color={type === DirectionEnums.ASK ? "var(--rate-red)" : "var(--rate-green)"}
          bgcolor={type === DirectionEnums.ASK ? "rgba(245, 108, 108, 0.2)" : "rgba(33, 195, 135, 0.2)"}
          widthPercent={`${Math.floor(Math.random() * 100)}%`}
        />
      ))}
    </List>
  );
});

export const OrderbookTableBody: React.FC<OrderbookTableBodyProps> = memo(({ price, direction, priceDirection }) => {
  return (
    <Box className={style["orderbook-table-body"]}>
      {(direction === DirectionEnums.ASK || direction === DirectionEnums.BOTH) && <OrderbookList type={DirectionEnums.ASK} />}
      <OrderbookTicker price={price} priceDirection={priceDirection} />
      {(direction === DirectionEnums.BID || direction === DirectionEnums.BOTH) && <OrderbookList type={DirectionEnums.BID} />}
    </Box>
  );
});
