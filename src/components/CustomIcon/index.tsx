import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { Icons, IconName } from "./icons";
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
