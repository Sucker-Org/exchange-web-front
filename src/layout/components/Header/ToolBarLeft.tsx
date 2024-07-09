import React, { useMemo } from "react";
import { Box, BoxProps, Drawer, Link } from "@mui/material";
import { MARKETS_URL, TRADE_SPOT_URL, TRADE_CROSS_URL, FUTURES_URL, EARN_URL, LEARN_URL, C2C_EXPRESS_URL } from "@/config";
import { NavMenu } from "./components/NavMenu";

const Item = ({ sx, ...other }: BoxProps) => (
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

const NavigationItem = ({ link }) => (
  <Item sx={!link.href ? { mr: 0, ml: 0.5 } : {}}>
    {link.href ? (
      <Link
        href={link.href}
        sx={{
          ml: 2,
          py: 1,
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
);

const ToolBarLeft: React.FC<ToolBarLeftProps> = ({ drawerVisible, closeDrawer }) => {
  const linkList = useMemo(
    () => [
      { href: C2C_EXPRESS_URL, title: "买币" },
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
      { href: FUTURES_URL, title: "合约" },
      { href: EARN_URL, title: "理财" },
      { href: LEARN_URL, title: "新手学院" },
      { href: "/more", title: "更多" }
    ],
    []
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Item className="logo" sx={{ mr: 4 }} id="back-to-top-anchor">
        <Link href="/" underline="none">
          LOGO
        </Link>
      </Item>
      <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
        {linkList.map((link, index) => (
          <NavigationItem key={index} link={link} />
        ))}
      </Box>
      <Drawer anchor="right" open={drawerVisible} onClose={closeDrawer} sx={{ "& .MuiDrawer-paper": { p: 2, minWidth: 200 } }}>
        {linkList.map((link, index) => (
          <NavigationItem key={index} link={link} />
        ))}
      </Drawer>
    </Box>
  );
};

export default ToolBarLeft;

interface ToolBarLeftProps {
  drawerVisible: boolean;
  closeDrawer: () => void;
}
