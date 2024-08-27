/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description: Login component
 */
import React, { useState } from "react";
import Layout from "@/layout";
import { Box, Card, CardContent, CardHeader, Link, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import bgImg from "@/assets/images/login/bg-login.webp";
import { FORGET_PASSWORD_URL, REG_URL } from "@/config";
import { LoadingButton } from "@mui/lab";
import { userLogin } from "@/api/modules/user";
import { useUserStore } from "@/stores/modules/user";
import { useNavigate } from "react-router-dom";
import { isEmail, isPhone } from "@/utils";
import { InputPassWord } from "@/components/InputPassWord";
const Login = () => {
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);
  const [username, setUsername] = useState("");
  const [usernameHelperText, setUsernameHelperText] = useState("");
  const [password, setPassword] = useState("");
  const validateUsername = (v: string) => {
    if (v === "") {
      setUsernameHelperText("");
      return false;
    } else if (!(isEmail(v) || isPhone(v))) {
      setUsernameHelperText("请输入正确的邮箱或手机号码");
      return false;
    } else {
      setUsernameHelperText("");
      return true;
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.trim();
    setUsername(v);
  };

  const userStore = useUserStore();

  const handleUserLogin = async () => {
    console.log("登录");
    // 验证用户名和密码长度
    if (!validateUsername(username) || password.length < 6) return;
    // 开始登录操作，显示加载状态
    setUploading(true);
    try {
      const type = isEmail(username) ? 2 : 1;
      const { data } = await userLogin(username, password, type);
      console.log(data);
      userStore.setToken(data.token);
      userStore.setUserInfo({ ...data });
      navigate("/");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Layout>
      <Grid
        container
        sx={{
          height: "calc(100vh - var(--header-height))",
          // background: theme => (theme.palette.mode === "dark" ? `url(${bgImg}) no-repeat center center` : `#f5f5f5`),
          background: `url(${bgImg}) no-repeat center center`,
          backgroundSize: "cover",
          flexDirection: { xs: "column", sm: "column", md: "row" }
        }}
      >
        <Grid xs={12} sm={12} md={6} mb="2rem">
          <Box sx={{ px: "10%" }}>
            <Typography variant="h4" sx={{ color: "#fff", mt: 10 }}>
              安心交易上灰度
            </Typography>
            <Typography variant="h6" sx={{ color: "#fff", mt: 2 }}>
              灰度交易所具有国家机构担保，确保资金安全
            </Typography>
          </Box>
        </Grid>

        <Grid xs={12} sm={12} md={6}>
          <Box
            sx={{
              display: "flex",
              height: "100%",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Card
              variant="outlined"
              sx={{
                borderRadius: 4,
                p: 5,
                width: { sm: "50%", lg: "50%", xl: "40%" },
                minWidth: {
                  xs: "100%",
                  sm: 420,
                  md: 500
                }
              }}
            >
              <CardHeader title="登录" />
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { mb: 1, width: "100%" },
                    "& .MuiInputBase-input:-webkit-autofill": {
                      boxShadow: theme => (theme.palette.mode === "dark" ? `0 0 0 1000px #121212 inset` : `none`)
                    }
                  }}
                  autoComplete="off"
                >
                  <TextField
                    id="user-basic"
                    label="邮箱/手机号码"
                    variant="outlined"
                    autoComplete="off"
                    value={username}
                    error={usernameHelperText !== ""}
                    helperText={usernameHelperText}
                    onChange={handleUsernameChange}
                    onBlur={() => validateUsername(username)}
                  />
                  <InputPassWord label="登录试试密码" password={password} setPassword={setPassword} />

                  <Box sx={{ mb: 3, textAlign: "right" }}>
                    <Link
                      underline="none"
                      href={FORGET_PASSWORD_URL}
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        "&:hover": {
                          color: "primary.main"
                        }
                      }}
                    >
                      忘记密码？
                    </Link>
                  </Box>
                  <LoadingButton
                    variant="contained"
                    fullWidth
                    loading={uploading}
                    sx={{ padding: "0.75rem 0" }}
                    onClick={handleUserLogin}
                  >
                    登录
                  </LoadingButton>
                  <Typography variant="body2" sx={{ mt: 2.5 }}>
                    没有账号？
                    <Link
                      underline="none"
                      href={REG_URL}
                      variant="body2"
                      sx={{
                        color: "primary.main"
                      }}
                    >
                      注册账号
                    </Link>
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Login;
