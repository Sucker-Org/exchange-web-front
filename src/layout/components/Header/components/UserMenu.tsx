import { useState } from "react";
import {
  Card,
  MenuProps,
  styled,
  Link,
  MenuItem,
  Popper,
  Typography,
  Stack,
  IconButton,
  Divider,
  CardHeader,
  Avatar,
  Button
} from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import styles from "./usermenu.module.scss";
import { useUserStore } from "@/stores/modules/user";
// import { useUserLogout } from "@/api/modules/user";
import { AUTHENTICATION_URL, SECURITY_URL, USER_CENTER_URL } from "@/config";
// import { enqueueSnackbar } from "notistack";
const StyledMenu = styled((props: MenuProps) => (
  <Popper
    {...props}
    style={{
      zIndex: zIndex.tooltip + 1,
      minWidth: 180
    }}
  >
    <Card sx={{ p: 1, background: "#ffffff" }}>{props.children}</Card>
  </Popper>
))(({ theme }) => ({
  "& .MuiBox-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1.4)
  }
}));

const UserCenterMenu = [
  {
    title: "总览",
    href: USER_CENTER_URL,
    icon: "overview"
  },
  {
    title: "安全中心",
    href: SECURITY_URL,
    icon: "security"
  },
  {
    title: "身份认证",
    href: AUTHENTICATION_URL,
    icon: "authentication"
  },
  {
    title: "偏好设置",
    href: "/user/preference",
    icon: "preference"
  }
];

export const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const userStore = useUserStore();
  const { username, id } = userStore.userInfo!;

  // const userLogout = useUserLogout();

  const handleLogoutSuccess = () => {
    userStore.setToken(null);
    userStore.setUserInfo(null);
  };
  const logout = async () => {
    handleLogoutSuccess();
    // const { data } = await userLogout();
    // console.log("userLogout", data);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={() => setAnchorEl(null)}>
      <IconButton aria-describedby="customized-menu" title={"User Center"}>
        <PersonOutlineIcon />
      </IconButton>
      <StyledMenu id="customized-menu" anchorEl={anchorEl} open={open}>
        <CardHeader
          sx={{
            px: 0.5,
            "& .MuiCardHeader-title": {
              color: "text.grey",
              fontWeight: "bold"
            }
          }}
          avatar={
            <Avatar sx={{ bgcolor: "#f2f2f2" }}>
              <PersonRoundedIcon />
            </Avatar>
          }
          title={username}
          subheader={`UID:${id}`}
        />
        <Divider />
        {UserCenterMenu.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => setAnchorEl(null)}
            sx={{
              px: 1,
              py: 1,
              display: "block",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
                borderRadius: "4px"
              }
            }}
          >
            <Link href={item.href} underline="none">
              <Stack direction="row" alignItems="center" spacing={1}>
                <i className={`${styles["menu-icon"]} ${styles[`menu-icon-${item.icon}`]}`} />
                <Typography variant="body2" color="CaptionText">
                  {item.title}
                </Typography>
              </Stack>
            </Link>
          </MenuItem>
        ))}
        <Divider />
        <Button
          component="label"
          fullWidth
          variant="text"
          tabIndex={-1}
          sx={{
            justifyContent: "start",
            color: "#111111"
          }}
          startIcon={<i className={`${styles["menu-icon"]} ${styles["menu-icon-logout"]}`} />}
          onClick={logout}
        >
          退出登录
        </Button>
      </StyledMenu>
    </div>
  );
};
