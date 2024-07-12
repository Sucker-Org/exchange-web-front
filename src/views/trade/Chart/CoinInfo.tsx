import { IconText } from "@/components/IconText";
import { Box, List, ListItem, ListItemText, Stack, SxProps, Theme, Typography, Divider, Link } from "@mui/material";
import Btc from "@/assets/images/home/icon-btc.png";
import { memo, useEffect, useState } from "react";
import { Loading } from "@/components/Loading";

interface CoinInfoProps {
  coinName: string;
  sx?: SxProps<Theme>;
}

interface InfoItemProps {
  primary: string;
  secondary: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ primary, secondary }) => (
  <ListItem
    sx={{ p: 0 }}
    secondaryAction={
      <Typography variant="body2" color="main" sx={{ mr: -2 }}>
        {secondary}
      </Typography>
    }
  >
    <ListItemText
      primary={primary}
      primaryTypographyProps={{
        color: "text.secondary",
        fontSize: 14
      }}
    />
  </ListItem>
);

export const CoinInfo: React.FC<CoinInfoProps> = memo(({ sx }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Box sx={{ position: "relative", ...sx }}>
      <Loading open={loading} fullscreen={false} />
      <Box sx={{ position: "sticky", height: 36, top: 0, width: "100%", zIndex: 1, bgcolor: "background.paper" }}>
        <IconText icon={Btc} text="BTC" subText="Bitcoin" />
      </Box>
      <Stack spacing={3} useFlexGap direction="row" flexWrap="nowrap">
        <Box sx={{ width: "50%" }}>
          <List sx={{ p: 0, m: 0 }}>
            <InfoItem primary="排名" secondary="No. 1" />
            <InfoItem primary="市值" secondary="$1,199,294.48M" />
            <InfoItem primary="市场主导地位指数" secondary="53.23%" />
            <InfoItem primary="流通数量" secondary="19,717,387" />
            <InfoItem primary="总供应量" secondary="21,000,000 BTC" />
            <InfoItem primary="总量" secondary="19,717,387 BTC" />
            <InfoItem primary="发行日期" secondary="2008-11-01" />
            <ListItem
              sx={{ p: 0, mb: 2 }}
              secondaryAction={
                <Typography variant="body2" color="main" sx={{ mr: -2 }}>
                  $73,750.07385037997
                </Typography>
              }
            >
              <ListItemText
                primary="历史最高价"
                primaryTypographyProps={{ color: "text.secondary", fontSize: 14 }}
                secondary="2024-03-14"
                secondaryTypographyProps={{ position: "absolute", right: 0 }}
              />
            </ListItem>
            <ListItem
              sx={{ p: 0, mb: 2 }}
              secondaryAction={
                <Typography variant="body2" color="main" sx={{ mr: -2 }}>
                  $0.04864654
                </Typography>
              }
            >
              <ListItemText
                primary="最低价"
                primaryTypographyProps={{ color: "text.secondary", fontSize: 14 }}
                secondary="2010-07-15"
                secondaryTypographyProps={{ position: "absolute", right: 0 }}
              />
            </ListItem>
          </List>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="caption" color="text.secondary">
            数据由 CMC 提供，仅供参考。数据仅供参考，并不构成任何形式的陈述或保证。
          </Typography>
        </Box>
        <Box sx={{ width: "50%" }}>
          <Typography mb={1}>友情链接</Typography>
          <Stack direction="row" spacing={1}>
            {["官网", "白皮书", "区块链浏览器"].map(text => (
              <Link
                key={text}
                href="https://www.binance.com/"
                target="_blank"
                rel="noreferrer"
                underline="none"
                sx={{
                  whiteSpace: "nowrap",
                  color: "white",
                  fontSize: 12,
                  padding: "3px 5px",
                  borderRadius: "3px",
                  bgcolor: "text.disabled",
                  "&:hover": { bgcolor: "text.secondary" }
                }}
              >
                {text}
              </Link>
            ))}
          </Stack>
          <Typography variant="body2" mt={2} mb={1}>
            介绍
          </Typography>
          <Typography variant="caption" color="text.secondary">
            增加功能的软分叉作为网络可扩展性的解决方案。
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
});
