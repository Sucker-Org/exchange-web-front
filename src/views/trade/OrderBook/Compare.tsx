import { Box, Stack, SxProps, Theme, Typography } from "@mui/material";
import { memo } from "react";

interface CompareProps {
  sx?: SxProps<Theme>;
  compareData: {
    buy: number;
    sell: number;
  };
}

const CompareIndicator = ({ label, percentage, position, color, borderColor }) => {
  const alignStyle = position === "left" ? { left: 0 } : { right: 0 };
  return (
    <div
      style={{
        alignItems: "center",
        display: "inline-flex",
        height: "100%",
        position: "absolute",
        ...alignStyle
      }}
    >
      {position === "left" && (
        <span
          style={{
            height: "100%",
            width: "18px",
            textAlign: "center",
            fontSize: "14px",
            color: color,
            border: `1px solid ${borderColor}`,
            marginRight: "6px"
          }}
        >
          {label}
        </span>
      )}
      <Typography variant="caption">{percentage}</Typography>
      {position === "right" && (
        <span
          style={{
            height: "100%",
            width: "18px",
            textAlign: "center",
            fontSize: "14px",
            color: color,
            border: `1px solid ${borderColor}`,
            marginLeft: "6px"
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
};

const Compare: React.FC<CompareProps> = memo(({ compareData, sx }) => {
  const { buy, sell } = compareData;
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

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      sx={{
        ...sx
      }}
    >
      <Box
        sx={{
          ...commonBoxStyles,
          bgcolor: "rgba(33, 195, 135, 0.2)",
          width: `${buy}%`,
          "&::after": { ...commonBoxStyles["&::after"], transformOrigin: "top right" }
        }}
      >
        <CompareIndicator label="B" percentage={buy + "%"} position="left" color="#21C387" borderColor="#21C387" />
      </Box>
      <Box
        sx={{
          ...commonBoxStyles,
          width: `${sell}%`,
          bgcolor: "rgba(245, 108, 108, 0.2)",
          "&::after": { ...commonBoxStyles["&::after"], transformOrigin: "bottom left" }
        }}
      >
        <CompareIndicator label="S" percentage={sell + "%"} position="right" color="#F56C6C" borderColor="#F56C6C" />
      </Box>
    </Stack>
  );
});

export default Compare;
