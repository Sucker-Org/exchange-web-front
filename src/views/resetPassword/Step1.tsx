import { LoadingButton } from "@mui/lab";
import { Alert, Box, Card, CardHeader, TextField } from "@mui/material";
import { useState } from "react";
import { isEmail, isPhone } from "@/utils";
import { checkEmailPhone } from "@/api/modules/user";
import { enqueueSnackbar } from "@/components/CommonSnackbar";
export const Step1 = ({ goToStep2 }) => {
  const [emailPhone, setEmailPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [helperText, setHelperText] = useState("");
  const validateInput = (v: string) => {
    if (v === "") {
      setHelperText("");
      return false;
    } else if (!(isEmail(v) || isPhone(v))) {
      setHelperText("请输入正确的邮箱或手机号码");
      return false;
    } else {
      setHelperText("");
      return true;
    }
  };

  const handleClick = async () => {
    if (!validateInput(emailPhone)) return;

    setLoading(true);
    try {
      const isExist = await checkEmailPhone(emailPhone);
      if (!isExist) {
        setHelperText("邮箱或手机号码不存在");
        setLoading(false);
      } else {
        enqueueSnackbar("验证码已发送，请注意查收", { variant: "success" });
        goToStep2(emailPhone);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleChange = (e: { target: { value: string } }) => {
    const v = e.target.value.trim();
    setEmailPhone(v);
    validateInput(v);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && validateInput(emailPhone)) {
      handleClick();
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Card
        variant="outlined"
        sx={{
          borderRadius: 4,
          px: 5,
          pb: 6,
          pt: 3,
          "& .MuiTextField-root": { mb: 1, width: "100%" }
        }}
      >
        <CardHeader title="重置密码" sx={{ px: 0 }} />
        <Alert severity="warning" sx={{ mt: 2, mb: 5 }}>
          为了保障账户安全，通过「重置密码」功能修改密碼成功后，24 小時内禁止灰度体现、P2P卖币、红包发放。
        </Alert>
        <form>
          <TextField
            id="user-info"
            label="邮箱/手机号码"
            variant="outlined"
            value={emailPhone}
            error={helperText !== ""}
            helperText={helperText}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            sx={{
              "& .MuiFormHelperText-root": { fontSize: 14, pt: 1, mx: 0 },
              "& .MuiInputBase-input:-webkit-autofill": {
                boxShadow: theme => (theme.palette.mode === "dark" ? `0 0 0 1000px #121212 inset` : `none`)
              }
            }}
          />
          <LoadingButton
            disabled={helperText !== "" || emailPhone === ""}
            loading={loading}
            variant="contained"
            fullWidth
            sx={{ mt: 4, padding: "0.75rem 0" }}
            onClick={handleClick}
          >
            获取验证码
          </LoadingButton>
        </form>
      </Card>
    </Box>
  );
};
