import { IconButton, Stack, Typography } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { memo, useState } from "react";
interface FavoriteProps {
  symbol: string;
  unit: string;
  size?: "small" | "medium" | "large";
  fontSize?: "inherit" | "large" | "medium" | "small";
  textFontSize?: "body2" | "body1" | "subtitle1" | "subtitle2" | "caption" | "overline" | "h6" | "h5" | "h4" | "h3" | "h2" | "h1";
}
export const Favorite: React.FC<FavoriteProps> = memo(
  ({ symbol, unit, size = "small", fontSize = "inherit", textFontSize = "body2" }) => {
    const [isFav, setIsFav] = useState(false);
    const handleFav = (e: { stopPropagation: () => void }) => {
      e.stopPropagation();
      setIsFav(!isFav);
    };
    return (
      <Stack direction="row" spacing={0.5} alignItems="center">
        <IconButton size={size} sx={{ color: isFav ? "#F6D30C" : "text.main" }} onClick={handleFav}>
          {isFav ? <StarIcon fontSize={fontSize} /> : <StarBorderIcon fontSize={fontSize} />}
        </IconButton>
        <Typography variant={textFontSize} color="text.primary">
          {symbol}
          <Typography component="span" variant={textFontSize} color="text.secondary" display="inline">
            /{unit}
          </Typography>
        </Typography>
      </Stack>
    );
  }
);
