import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

import IconDownload from "@/assets/icons/icon-download.svg";
import IconFollowOrder from "@/assets/icons/icon-follow-order.svg";
import IconTradeCross from "@/assets/icons/icon-trade-cross.svg";
import IconTradeSpot from "@/assets/icons/icon-trade-spot.svg";

export const Icons = {
  IconDownload,
  IconFollowOrder,
  IconTradeCross,
  IconTradeSpot
};

export type IconName = keyof typeof Icons;

export interface CustomIconProps extends SvgIconProps {
  name: IconName;
}

const CustomIcon: React.FC<CustomIconProps> = ({ name, ...props }) => {
  const IconComponent = Icons[name];
  const iconElement = React.createElement(IconComponent, {
    fill: "currentColor"
  });
  return (
    <SvgIcon
      {...props}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: props.color,
        ...props.sx
      }}
    >
      {iconElement}
    </SvgIcon>
  );
};

export default CustomIcon;
