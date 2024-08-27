// src/layout/Header/components/NavMenu.tsx
import { useState } from "react";
import { Button, Card, MenuProps, styled, Link, MenuItem, Popper, Box, Typography, Stack } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import zIndex from "@mui/material/styles/zIndex";
import { IconName } from "@/components/CustomIcon/icons";
import CustomIcon from "@/components/CustomIcon";

const StyledMenu = styled((props: MenuProps) => (
  <Popper
    {...props}
    style={{
      zIndex: zIndex.tooltip + 1
    }}
  >
    <Card sx={{ p: 1, background: "#ffffff" }}>{props.children}</Card>
  </Popper>
))(({ theme }) => ({
  "& .Mui": {
    borderRadius: 6,
    marginTop: theme.spacing(1.4),
    minWidth: 280
  }
}));

export interface NavMenuProps {
  isHovered?: boolean;
  menuList?: {
    title: string;
    description: string;
    icon: IconName;
    href: string;
  }[];
  menuName: string;
}

export const NavMenu: React.FC<NavMenuProps> = ({ menuName = "MenuName", menuList = [] }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const open = Boolean(anchorEl);
  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setIsHovered(true);
    setAnchorEl(event.currentTarget);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setAnchorEl(null);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Button
        aria-describedby="customized-menu"
        type="button"
        size="large"
        onClick={handleMouseEnter}
        sx={{
          color: "text.primary",
          "&:hover": {
            backgroundColor: "transparent",
            color: "primary.main"
          }
        }}
        endIcon={isHovered ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        title={menuName}
      >
        {menuName}
      </Button>
      <StyledMenu id="customized-menu" anchorEl={anchorEl} open={open} onClose={handleMouseLeave}>
        {menuList.map((item, index) => (
          <MenuItem
            key={index}
            onClick={handleMouseLeave}
            sx={{
              px: 1,
              display: "block",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
                borderRadius: "4px"
              }
            }}
          >
            <Link href={item.href} underline="none">
              <Stack direction="row" alignItems="center" spacing={1}>
                <CustomIcon name={item.icon} />
                <Box sx={{ border: "none !important" }}>
                  <Typography variant="body2" color="CaptionText" sx={{ fontWeight: "bold" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </Stack>
            </Link>
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};
