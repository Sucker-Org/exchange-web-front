import Layout from "@/layout";
import { Box } from "@mui/material";
import bgImg from "@/assets/images/login/bg-reset.webp";
import SwipeableViews from "react-swipeable-views";
import { useState } from "react";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { useNavigate } from "react-router-dom";
import { LOGIN_URL } from "@/config";

const ResetPassword = () => {
  const navigator = useNavigate();
  const [stepIndex, setStepIndex] = useState(0);

  const [emailPhone, setEmailPhone] = useState("");

  // 发送验证码
  const goToStep2 = value => {
    console.log("goToStep2", value);
    setEmailPhone(value);
    setStepIndex(1);
  };

  //校验验证码
  const verify = captcha => {
    console.log("verify", captcha);
    setStepIndex(2);
  };

  //确认修改密码
  const confirm = newPassword => {
    console.log("confirm", newPassword);
    console.log(emailPhone);
    navigator(LOGIN_URL);
  };

  return (
    <Layout>
      <Box
        sx={{
          height: "calc(100vh - var(--header-height))",
          background: `url(${bgImg}) no-repeat top center`,
          backgroundSize: "cover",
          pl: "50%"
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Box
            sx={{
              width: { sm: "50%", lg: "50%", xl: "40%" },
              minWidth: 420
            }}
          >
            <SwipeableViews index={stepIndex}>
              <Step1 goToStep2={goToStep2} />
              <Step2 emailPhone={emailPhone} verify={verify} />
              <Step3 confirm={confirm} />
            </SwipeableViews>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default ResetPassword;
