import React from "react";
import { Stack, Typography, SxProps, Theme, TypographyVariant } from "@mui/material";

export interface IconTextProps {
  icon: string;
  text: string;
  singleLine?: boolean;
  fz?: TypographyVariant;
  chip?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
}

const IconText: React.FC<IconTextProps> = React.memo(
  ({ fz, icon, text, chip, width = 26, height = 26, singleLine = true, sx }) => (
    <Stack direction="row" spacing={1} alignItems="center" sx={sx}>
      <img src={icon} alt={text} width={width} height={height} role="img" aria-label={text} />
      <Stack direction={singleLine ? "row" : "column"} spacing={singleLine ? 1 : 0}>
        <Typography variant={fz || "body2"}>{text}</Typography>
        {chip && (
          <Typography variant="caption" color={"text.secondary"}>
            {chip}
          </Typography>
        )}
      </Stack>
    </Stack>
  )
);

export { IconText };
