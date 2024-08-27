import { IconButton, Stack, Typography, TypographyProps } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { memo /* useState */ } from "react";
interface FavoriteProps {
  symbol: string;
  unit: string;
  size?: "small" | "medium" | "large";
  fontSize?: "inherit" | "large" | "medium" | "small";
  textFontSize?: TypographyProps["variant"];
  isFav?: boolean;
}
export const Favorite: React.FC<FavoriteProps> = memo(
  ({ symbol, unit, size = "small", fontSize = "inherit", textFontSize = "body2", isFav = false }) => {
    // const [isFav, setIsFav] = useState(false);
    const handleFav = (e: { stopPropagation: () => void }) => {
      e.stopPropagation();
      // setIsFav(!isFav);
    };
    return (
      <Stack direction="row" spacing={0.5} alignItems="center">
        <IconButton size={size} sx={{ color: isFav ? "var(--fav-yellow)" : "text.primary" }} onClick={handleFav}>
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
