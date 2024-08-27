import { Box, List, ListItem, ListItemButton, Stack, Typography } from "@mui/material";
import React, { memo } from "react";
import { DirectionEnums, DirectionType } from ".";
import style from "./index.module.scss";
import { formatNumber } from "@/utils";

interface OrderbookTableBodyProps {
  newPrice: string;
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

interface OrderbookListItemProps {
  price: string;
  amount: string;
  total: string;
  widthPercent: string;
}

const OrderbookListItem: React.FC<OrderbookListItemProps> = memo(({ price, amount, total, widthPercent }) => {
  const handleClick = () => {
    console.log("test");
  };
  return (
    <ListItem
      alignItems="center"
      sx={{ height: 20, py: 0, px: 1.5, overflow: "hidden", bgcolor: "transparent" }}
      className={style["orderbook-list-item"]}
    >
      <ListItemButton
        sx={{
          height: "100%",
          py: 0,
          px: 0,
          alignItems: "center",
          "& .MuiTypography-root": {
            lineHeight: "22px"
          }
        }}
        onClick={() => handleClick}
      >
        <Typography variant="caption" className={style["orderbook-list-item-text"]}>
          {formatNumber(price)}
        </Typography>
        <Typography variant="caption" color="text.primary" className={style["orderbook-list-item-text"]}>
          {formatNumber(amount)}
        </Typography>
        <Typography variant="caption" color="text.primary" className={style["orderbook-list-item-text"]}>
          {formatNumber(total)}
        </Typography>
        <div className={style["orderbook-list-item-bar"]} style={{ width: widthPercent }}></div>
      </ListItemButton>
    </ListItem>
  );
});

const OrderbookList = memo(
  ({ type, itemCount, direction }: { type: DirectionType; itemCount: number; direction: DirectionType }) => {
    return (
      <Box
        className={
          style["orderbook-list-wrapper"] +
          " " +
          (type === DirectionEnums.ASK ? style["orderbook-list-wrapper-ask"] : style["orderbook-list-wrapper-bid"])
        }
        sx={{
          height: direction === DirectionEnums.BOTH ? 380 : 760
        }}
      >
        <List className={style["orderbook-list-box"]}>
          {Array.from({ length: itemCount }).map((_, index) => (
            <OrderbookListItem
              key={index}
              price="511293.03701"
              amount="8767,6589"
              total="6511293.037"
              widthPercent={`${Math.floor(Math.random() * 100)}%`}
            />
          ))}
        </List>
      </Box>
    );
  }
);

export const OrderbookTableBody: React.FC<OrderbookTableBodyProps> = memo(({ newPrice, direction, priceDirection }) => {
  const itemCount = direction === DirectionEnums.BOTH ? 19 : 100;
  return (
    <Box className={style["orderbook-table-body"]}>
      {(direction === DirectionEnums.ASK || direction === DirectionEnums.BOTH) && (
        <OrderbookList type={DirectionEnums.ASK} itemCount={itemCount} direction={direction} />
      )}
      <OrderbookTicker price={newPrice} priceDirection={priceDirection} />
      {(direction === DirectionEnums.BID || direction === DirectionEnums.BOTH) && (
        <OrderbookList type={DirectionEnums.BID} itemCount={itemCount} direction={direction} />
      )}
    </Box>
  );
});
