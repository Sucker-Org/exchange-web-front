/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description: Footer component
 */
import { Box, Container, Grid, Link, List, ListItem, Typography } from "@mui/material";

// 定义部分数据结构
// 更新部分数据结构以包含url
const sections = [
  {
    title: "关于我们",
    items: [
      { title: "关于我们", url: "/about" },
      { title: "团队介绍", url: "/team" },
      { title: "产品介绍", url: "/products" },
      { title: "API入口", url: "/api" }
    ]
  },
  {
    title: "帮助中心",
    items: [
      { title: "新手指南", url: "/guide" },
      { title: "常见问题", url: "/faq" },
      { title: "安全保障", url: "/security" },
      { title: "联系客服", url: "/support" }
    ]
  },
  {
    title: "条款协议",
    items: [
      { title: "用户协议", url: "/terms" },
      { title: "隐私政策", url: "/privacy" },
      { title: "法律声明", url: "/legal" },
      { title: "免责声明", url: "/disclaimer" }
    ]
  },
  {
    title: "联系我们",
    items: [
      { title: "客服邮箱", url: "mailto:support@huidu.xyz" },
      { title: "商务合作", url: "/partnerships" },
      { title: "投诉建议", url: "/feedback" },
      { title: "加入我们", url: "/careers" }
    ]
  },
  {
    title: "友情链接",
    items: [
      { title: "非小号", url: "https://www.feixiaohao.com" },
      { title: "巴比特", url: "https://www.8btc.com" },
      { title: "精节点", url: "https://www.jingdian.com" },
      { title: "金色财经", url: "https://www.jinse.com" }
    ]
  }
];

const SectionList = ({ title, items }) => (
  <Grid item xs={2}>
    <Typography variant="body1" color="text.secondary" fontWeight={500}>
      {title}
    </Typography>
    <List>
      {items.map((item, index) => (
        <ListItem key={index} sx={{ px: 0 }}>
          <Link
            href={item.url}
            underline="none"
            color={"text.primary"}
            sx={{
              transition: "color 0.3s ease-in-out",
              fontSize: "0.875rem",
              "&:hover": {
                color: "primary.main"
              }
            }}
          >
            {item.title}
          </Link>
        </ListItem>
      ))}
    </List>
  </Grid>
);

const Footer = () => {
  return (
    <Box bgcolor={theme => (theme.palette.mode === "dark" ? "#0D0E0F" : "rgba(255,255,255,0.9)")} pt={7}>
      <Container maxWidth="lg">
        <Grid container spacing={2} pb={6}>
          {sections.map(section => (
            <SectionList key={section.title} title={section.title} items={section.items} />
          ))}
          <Grid item xs={2}>
            <Link href="/" underline="none" color={"text.primary"}>
              LOGO
            </Link>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 3, mb: 1 }}>
              全球优质数字资产交易所
            </Typography>
            <Typography variant="body1" color="text.secondary">
              ©2024 HUIDU.XYZ
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
