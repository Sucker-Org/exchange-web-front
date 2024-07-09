import React, { useMemo } from "react";
import RateText from "@/components/RateText";
import { defaultBorderColor } from "@/config/themeConfig";
import { Box, Link, Stack, Typography } from "@mui/material";

interface IconCardProps {
  icon: string;
  symbol: string;
  price: string;
  rate: number;
  lineData: number[];
}

const calculatePoints = (lineData, svgWidth, svgHeight) => {
  const maxDataValue = Math.max(...lineData);
  const minDataValue = Math.min(...lineData);
  const dataRange = maxDataValue - minDataValue;
  return lineData
    .map((point, index) => {
      const x = (index / (lineData.length - 1)) * svgWidth;
      const y = ((maxDataValue - point) / dataRange) * svgHeight;
      return `${x},${y}`;
    })
    .join(" ");
};

const staticStyles = {
  iconStyle: { height: 34, width: 34, borderRadius: "50%" },
  svgStyle: { overflow: "visible" }
};

const IconCard: React.FC<IconCardProps> = React.memo(({ icon, symbol, price, rate, lineData }) => {
  const svgWidth = 80;
  const svgHeight = 20;
  const points = useMemo(() => calculatePoints(lineData, svgWidth, svgHeight), [lineData, svgWidth, svgHeight]);

  return (
    <Link
      sx={{
        color: "text.primary",
        cursor: "pointer",
        background: theme =>
          `linear-gradient(180deg, ${theme.palette.mode === "dark" ? defaultBorderColor("dark") : defaultBorderColor("light")} 0%, rgba(0, 240, 255, 0) 100%)`,
        borderRadius: 2
      }}
      underline="none"
    >
      <Stack
        direction="row"
        spacing={3}
        position="relative"
        sx={{
          p: 2,
          borderRadius: 2,
          zIndex: 3,
          m: "1px",
          bgcolor: "background.paper"
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <img src={icon} alt="icon" style={staticStyles.iconStyle} aria-label={`${symbol} icon`} />
          <Box>
            <Typography variant="body1">{symbol}</Typography>
            <RateText rate={rate} />
          </Box>
        </Stack>
        <Box sx={{ textAlign: "right" }}>
          <svg width={svgWidth} height={svgHeight} style={staticStyles.svgStyle}>
            <polyline fill="none" stroke={rate > 0 ? "var(--rate-green)" : "var(--rate-red)"} strokeWidth="0.5" points={points} />
          </svg>
          <Typography variant="body2">{price}</Typography>
        </Box>
      </Stack>
    </Link>
  );
});

export default IconCard;
