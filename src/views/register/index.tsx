/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description:
 */
import Layout from "@/layout";
import { memo, useEffect } from "react";
import { useLocation } from "react-router-dom";

import SwipeableViews from "react-swipeable-views";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import bgImg from "@/assets/images/login/bg-register.webp";

import { RegStep1 } from "./RegStep1";
import { getCodeByReg, register } from "@/api/modules/user";
import { useRegStore } from "@/stores/modules/register";
import { RegStep2 } from "./RegStep2";
import { RegStep3 } from "./RegStep3";
const Register = () => {
  const regStore = useRegStore();
  const { account, password, code, promotion, setAccount, setUploading } = regStore;

  const [stepIndex, setStepIndex] = useState(0);

  // TODO: 获取从首页输入注册手机号或者邮箱
  const location = useLocation();
  useEffect(() => {
    if (location && location.state?.username) {
      console.log(location && location.state?.username);
      setAccount(location.state?.username);
    }
  }, [location, setAccount]);

  // 发送验证码
  const goToStep2 = async () => {
    setUploading(true);
    try {
      await getCodeByReg(account);
      setAccount(account);
      setStepIndex(1);
    } catch (error) {
      console.log((error as { message: string }).message);
    } finally {
      setUploading(false);
    }
  };

  // 创建账号 参数为邮箱或手机号码、验证码、密码、邀请码、是否同意用户协议,其中邀请码可选; 返回用户信息2
  const handleCreateAccount = () => {
    const res = register(password, account, code, promotion);
    try {
      console.log("handleCreateAccount", res);
    } catch (error) {
      console.log("handleCreateAccount error", error);
    }
  };

  return (
    <Layout>
      <Grid
        container
        sx={{
          height: "calc(100vh - var(--header-height))",
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
            <Box
              sx={{
                width: { sm: "50%", lg: "50%", xl: "40%" },
                minWidth: {
                  xs: "100%",
                  sm: 420,
                  md: 500
                }
              }}
            >
              <SwipeableViews index={stepIndex}>
                <RegStep1 goToStep2={goToStep2} />
                <RegStep2 goToStep3={() => setStepIndex(2)} />
                <RegStep3 confirm={handleCreateAccount} />
              </SwipeableViews>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default memo(Register);
