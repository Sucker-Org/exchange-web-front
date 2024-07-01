import { IconText } from "@/components/IconText";
import { Box, List, ListItem, ListItemText, Stack, SxProps, Theme, Typography, Divider, Link } from "@mui/material";
import Btc from "@/assets/images/home/icon-btc.png";

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

export const CoinInfo: React.FC<CoinInfoProps> = ({ sx }) => {
  return (
    <Box sx={{ position: "relative", ...sx }}>
      <Box sx={{ position: "sticky", height: 36, top: 0, width: "100%", zIndex: 1, bgcolor: "background.paper" }}>
        <IconText icon={Btc} text="BTC" chip="Bitcoin" />
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
            比特币(BTC)是一种点对点加密货币，旨在充当独立于任何中央机构的一种交易手段。BTC可以安全，可验证和不变的方式进行电子现金转移。BTC于2009年推出，是通过在交易信息广播到比特币网络中的所有节点之前加盖交易时间戳的"第一种解决双重支出问题的虚拟数字货币"。比特币协议通过blockchain网络结构为拜占庭容错问题提供了解决方案，该概念最初由Stuart
            Haber和W. Scott Stornetta创建1991年。Bitcoin的白皮书由个人或一个团体以化名"Satoshi
            Nakamoto"于2008年发表，其基本身份尚未得到验证。比特币协议使用基于SHA-256d的工作量证明(PoW)算法达成网络共识。其网络的目标出块时间为10分钟，最大供应量为2100万个代币，代币的产生速率不断下降。为了防止拥堵时间的波动，通过基于过去2016年拥堵时间的算法重新调整了网络的出块难度。区块大小上限为1兆字节，比特币协议同时支持Lightning
            Network支付渠道的多层基础结构，以及隔离见证，这是一个增加功能的软分叉作为网络可扩展性的解决方案。
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};
