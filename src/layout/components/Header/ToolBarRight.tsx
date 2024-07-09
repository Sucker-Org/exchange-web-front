/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description:Header ToolBarRight component
 */

import { IconButton, Box, BoxProps, Button } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { LOGIN_URL, REG_URL } from "@/config";
import { useThemeStore } from "@/stores/modules/theme";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import Download from "./components/Download";

const Item = (props: BoxProps) => {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        ml: 0.5,
        display: "flex",
        alignItems: "center",
        ...sx
      }}
      {...other}
    />
  );
};
interface ToolBarLeftProps {
  openDrawer: () => void;
}
const ToolBarRight = ({ openDrawer }: ToolBarLeftProps) => {
  const navigate = useNavigate();

  const setTheme = useThemeStore(state => state.setTheme);
  const currentTheme = useThemeStore(state => state.theme);

  const toggleTheme = () => {
    if (currentTheme === "light" || currentTheme === null) {
      setTheme("dark");
      document.body.style.setProperty("--color-disabled-text", "#5e6673");
    } else {
      setTheme("light");
      document.body.style.setProperty("--color-disabled-text", "#B7BDC6");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        justifyItems: "center",
        justifyContent: "center"
      }}
    >
      <Item>
        <Button
          sx={{ color: "text.primary", borderRadius: "5rem" }}
          size="small"
          onClick={() => navigate(LOGIN_URL)}
          title="登录"
        >
          登录
        </Button>
      </Item>
      <Item sx={{ mr: 1 }}>
        <Button
          sx={{
            color: "background.paper",
            bgcolor: "text.primary",
            borderRadius: "5rem",
            "&:hover": { bgcolor: "text.primary" }
          }}
          size="small"
          title="注册"
          onClick={() => navigate(REG_URL)}
        >
          注册
        </Button>
      </Item>
      <Item>
        <Download />
      </Item>
      <Item>
        <IconButton onClick={toggleTheme} title="切换主题">
          {currentTheme === "dark" || currentTheme === null ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Item>

      <Item>
        <IconButton title="通知公告">
          <NotificationsNoneOutlinedIcon />
        </IconButton>
      </Item>

      <Item
        sx={{
          display: { xs:"flex", sm: "flex", md: "none" }
        }}
        onClick={openDrawer}
      >
        <IconButton title="菜单">
          <MenuIcon />
        </IconButton>
      </Item>
    </Box>
  );
};

export default ToolBarRight;
