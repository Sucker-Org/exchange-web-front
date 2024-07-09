import { IconText } from "@/components/IconText";
import { Card, Grid, Link, Stack } from "@mui/material";
import { memo } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const cardStyle = { py: 2, px: 1, borderRadius: 4, bgcolor: "background.default" };
const linkStyle = {
  display: "inline-flex",
  alignItems: "center",
  fontSize: 12,
  transition: "color 0.3s",
  "&:hover": { color: "primary.main" }
};

export interface MarketCardProps {
  cardIcon: string;
  cardIconSize?: number;
  titleSize?: "caption" | "body2";
  title: string;
  children?: React.ReactNode;
  more?: string;
}

export const MarketCard: React.FC<MarketCardProps> = memo(
  ({ cardIcon, cardIconSize = 12, title, titleSize = "caption", more, children }) => (
    <Grid item xs={12} sm={6} md={4}>
      <Card variant="outlined" sx={cardStyle}>
        <Stack flexDirection="row" justifyContent="space-between" pl={1} mb={2}>
          <IconText fz={titleSize} icon={cardIcon} text={title} iconSize={{ width: cardIconSize, height: cardIconSize }} />
          {more && (
            <Link href={more} underline="none" color="text.primary" sx={linkStyle}>
              更多
              <KeyboardArrowRightIcon />
            </Link>
          )}
        </Stack>
        {children}
      </Card>
    </Grid>
  )
);
