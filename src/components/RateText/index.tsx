import { Typography, TypographyProps } from "@mui/material";
import { memo } from "react";

const RateText = ({ rate, variant, zeroColor }: { rate: number; variant?: TypographyProps["variant"]; zeroColor?: any }) => {
  return (
    <Typography
      variant={variant || "body2"}
      sx={{
        color:
          rate === 0 ? zeroColor || "text.secondary" : rate > 0 ? "var(--rate-green) !important" : "var(--rate-red) !important"
      }}
    >
      {rate > 0 ? `+${rate}` : rate}%
    </Typography>
  );
};
export default memo(RateText);
