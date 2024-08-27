import { LoadingButton } from "@mui/lab";
import { Box, Button, Card, CardHeader, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const CaptchaInput = ({ onCaptchaChange }) => {
  // 初始化一个长度为6的数组，每个元素都是空字符串
  const [captcha, setCaptcha] = useState(Array(6).fill(""));

  const handleChange = index => event => {
    const newCaptcha = [...captcha];
    newCaptcha[index] = event.target.value;
    setCaptcha(newCaptcha);

    onCaptchaChange(newCaptcha.join(""));
    // 如果当前输入框已填写，并且不是最后一个输入框，则自动跳转到下一个输入框
    if (event.target.value && index < 5) {
      document.getElementById(`captcha-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = index => event => {
    if (event.key === "Backspace" && !captcha[index] && index > 0) {
      // 如果当前输入框为空，并且按下退格键，则跳转到上一个输入框
      document.getElementById(`captcha-${index - 1}`)?.focus();
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
      {captcha.map((value, index) => (
        <TextField
          key={index}
          id={`captcha-${index}`}
          variant="outlined"
          inputProps={{ maxLength: 1, style: { textAlign: "center" } }}
          value={value}
          onChange={handleChange(index)}
          onKeyDown={handleKeyDown(index)}
          sx={{ width: "48px" }}
        />
      ))}
    </Box>
  );
};

export const Step2 = ({ emailPhone, verify }) => {
  const [captchaValue, setCaptchaValue] = useState("");
  const [uploading, setUploading] = useState(false);
  const handleVerify = () => {
    setUploading(true);
    setTimeout(() => {
      verify(captchaValue);
      setUploading(false);
    }, 1000);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Card
        variant="outlined"
        sx={{
          borderRadius: 4,
          px: 5,
          pb: 6,
          pt: 3
        }}
      >
        <CardHeader title="输入验证码" sx={{ px: 0 }} />
        <Typography variant="body2" color="text.primary" sx={{ mt: 2 }}>
          验证码已发送至 {emailPhone}
        </Typography>
        <Box>
          <CaptchaInput onCaptchaChange={setCaptchaValue} />
        </Box>
        <LoadingButton
          loading={uploading}
          variant="contained"
          fullWidth
          sx={{ mt: 4, padding: "0.75rem 0" }}
          onClick={handleVerify}
        >
          下一步
        </LoadingButton>
        <Typography variant="body2" color="text.primary" sx={{ mt: 2 }}>
          收不到验证码？
          <Button
            sx={{
              bgcolor: "transparent !important"
            }}
          >
            重发（56）
          </Button>
        </Typography>
      </Card>
    </Box>
  );
};
