// src/utils/icons.ts
import IconDownload from "@/assets/icons/icon-download.svg";
import IconFollowOrder from "@/assets/icons/icon-follow-order.svg";
import IconTradeCross from "@/assets/icons/icon-trade-cross.svg";
import IconTradeSpot from "@/assets/icons/icon-trade-spot.svg";
import IconNodata from "@/assets/icons/icon-nodata.svg";

export const Icons = {
  IconDownload,
  IconFollowOrder,
  IconTradeCross,
  IconTradeSpot,
  IconNodata
};

export type IconName = keyof typeof Icons;
