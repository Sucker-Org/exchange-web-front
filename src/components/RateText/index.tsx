// RateText.tsx
import { Typography, TypographyProps } from "@mui/material";
import { memo } from "react";

interface RateTextProps {
  rate: number;
  variant?: TypographyProps["variant"];
  zeroColor?: string; // Assuming zeroColor is a string. Adjust the type as necessary.
}

const RateText: React.FC<RateTextProps> = ({ rate, variant, zeroColor }) => {
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

const MemoizedRateText = memo(RateText);

export { MemoizedRateText as RateText };
