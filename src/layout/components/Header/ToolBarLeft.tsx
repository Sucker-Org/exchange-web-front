import { Box, BoxProps, Link } from "@mui/material";
import { TRADE_CONVERT_URL, MARKETS_URL, TRADE_SPOT_URL, TRADE_CROSS_URL, FUTURE_URL, FINANCE_URL, LEARN_URL } from "@/config";
import { NavMenu } from "./components/NavMenu";
import { IconName } from "@/components/CustomIcon";
const Item = (props: BoxProps) => {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        mr: 2,
        display: "flex",
        alignItems: "center",
        ...sx
      }}
      {...other}
    />
  );
};

const linkList: {
  href?: string;
  title: string;
  menuList?: {
    title: string;
    description: string;
    icon: IconName;
    href: string;
  }[];
}[] = [
  { href: TRADE_CONVERT_URL, title: "买币" },
  { href: MARKETS_URL, title: "行情" },
  {
    title: "交易",
    menuList: [
      {
        title: "现货交易",
        description: "使用先进工具，在现货市场交易",
        icon: "IconTradeSpot",
        href: TRADE_SPOT_URL
      },
      {
        title: "杠杆交易",
        description: "借币交易，放大收益",
        icon: "IconTradeCross",
        href: TRADE_CROSS_URL
      }
    ]
  },

  { href: FUTURE_URL, title: "合约" },
  { href: FINANCE_URL, title: "理财" },
  { href: LEARN_URL, title: "新手学院" },
  { href: "/more", title: "更多" }
];

const ToolBarLeft = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Item className="logo" sx={{ mr: 4 }} id="back-to-top-anchor">
        <Link href="/" underline="none">
          LOGO
        </Link>
      </Item>
      {linkList.map((link, index) => (
        <Item key={index} sx={!link.href ? { mr: 0, ml: 0.5 } : {}}>
          {link.href ? (
            <Link
              href={link.href}
              sx={{
                ml: 2,
                color: "text.primary",
                transition: "color 0.3s ease-in-out",
                "&:hover": {
                  color: "primary.main"
                }
              }}
              underline="none"
            >
              {link.title}
            </Link>
          ) : (
            <NavMenu menuName={link.title} menuList={link.menuList} />
          )}
        </Item>
      ))}
    </Box>
  );
};

export default ToolBarLeft;
