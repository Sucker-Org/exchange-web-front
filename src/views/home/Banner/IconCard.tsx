import { Box, Link, Stack, Typography } from "@mui/material";
interface IconCardProps {
  icon: string;
  symbol: string;
  price: string;
  rate: number;
  lineData: number[];
}

export const IconCard: React.FC<IconCardProps> = ({ icon, symbol, price, rate, lineData }) => {
  const svgWidth = 80;
  const svgHeight = 20;
  const maxDataValue = Math.max(...lineData);
  const minDataValue = Math.min(...lineData);
  const dataRange = maxDataValue - minDataValue;
  const points = lineData
    .map((point, index) => {
      const x = (index / (lineData.length - 1)) * svgWidth;
      const y = ((maxDataValue - point) / dataRange) * svgHeight;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <Link
      sx={{
        color: "text.primary",
        cursor: "pointer",
        background: "linear-gradient(180deg, rgba(10, 201, 255, 1) 0%, rgba(0, 240, 255, 0) 100%)",
        borderRadius: 2
      }}
      underline="none"
    >
      <Stack
        direction="row"
        spacing={5}
        position="relative"
        sx={{
          p: 2,
          borderRadius: 2,
          zIndex: 3,
          m: "1px",
          background: theme => (theme.palette.mode === "dark" ? "rgba(0,40,83,1)" : "rgba(255, 255, 255, 1)")
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <img src={icon} alt="icon" style={{ height: 34, width: 34, borderRadius: "50%" }} />
          <Box>
            <Typography variant="body1">{symbol}</Typography>
            <Typography variant="body2" color={rate == 0 ? "text.primary" : rate > 0 ? "#1C956C" : "#FF314A"}>
              {rate > 0 ? "+" + rate : rate}%
            </Typography>
          </Box>
        </Stack>
        <Box sx={{ textAlign: "right" }}>
          <svg width={svgWidth} height={svgHeight} style={{ overflow: "visible" }}>
            <polyline fill="none" stroke={rate > 0 ? "#21C387" : "#FF314A"} strokeWidth="0.5" points={points} />
          </svg>
          <Typography variant="body2">{price}</Typography>
        </Box>
      </Stack>
    </Link>
  );
};
