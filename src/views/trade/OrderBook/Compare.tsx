import { Box, Stack, SxProps, Theme, Typography } from "@mui/material";
import React, { memo } from "react";

interface CompareProps {
  sx?: SxProps<Theme>;
  buy: number;
  sell: number;
}

interface CompareIndicatorProps {
  label: string;
  percentage: string;
  position: "left" | "right";
  color: string;
  borderColor: string;
}

const commonBoxStyles = {
  flex: "auto",
  height: "100%",
  minWidth: "75px",
  overflow: "hidden",
  position: "relative",
  "&::after": {
    bgcolor: "background.default",
    content: "''",
    position: "absolute",
    height: "100%",
    transform: "rotate(-75deg)",
    width: "100%"
  }
};

const CompareIndicator: React.FC<CompareIndicatorProps> = memo(({ label, percentage, position, color, borderColor }) => {
  const alignStyle = position === "left" ? { left: 0 } : { right: 0 };
  const marginStyle = position === "left" ? { marginRight: "6px" } : { marginLeft: "6px" };
  const spanStyle: React.CSSProperties = {
    height: "100%",
    width: "18px",
    lineHeight: "18px",
    textAlign: "center",
    fontSize: "14px",
    color,
    border: `1px solid ${borderColor}`,
    ...marginStyle
  };
  return (
    <div style={{ alignItems: "center", display: "inline-flex", height: "100%", position: "absolute", ...alignStyle }}>
      {position === "left" && <span style={spanStyle}>{label}</span>}
      <Typography variant="caption" lineHeight={20}>
        {percentage}
      </Typography>
      {position === "right" && <span style={spanStyle}>{label}</span>}
    </div>
  );
});

export const Compare: React.FC<CompareProps> = memo(({ buy, sell, sx }) => {
  return (
    <Stack direction="row" alignItems="center" sx={{ ...sx }}>
      <Box
        sx={{
          ...commonBoxStyles,
          bgcolor: "rgba(33, 195, 135, 0.2)",
          width: `${buy}%`,
          "&::after": { ...commonBoxStyles["&::after"], transformOrigin: "top right" }
        }}
      >
        <CompareIndicator
          label="B"
          percentage={`${buy}%`}
          position="left"
          color="var(--rate-green)"
          borderColor="var(--rate-green)"
        />
      </Box>
      <Box
        sx={{
          ...commonBoxStyles,
          width: `${sell}%`,
          bgcolor: "rgba(245, 108, 108, 0.2)",
          "&::after": { ...commonBoxStyles["&::after"], transformOrigin: "bottom left" }
        }}
      >
        <CompareIndicator
          label="S"
          percentage={`${sell}%`}
          position="right"
          color="var(--rate-red)"
          borderColor="var(--rate-red)"
        />
      </Box>
    </Stack>
  );
});
