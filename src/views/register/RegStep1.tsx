import { enqueueSnackbar } from "@/components/CommonSnackbar";
import { LOGIN_URL } from "@/config";
import { useRegStore } from "@/stores/modules/register";
import { isEmail, isPhone } from "@/utils";
import { LoadingButton } from "@mui/lab";
import { Box, Card, CardContent, CardHeader, Checkbox, FormControlLabel, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const RegStep1 = ({ goToStep2 }) => {
  const regStore = useRegStore();
  const { account, setAccount, promotion, setPromotion, uploading } = regStore;
  const [usernameHelperText, setUsernameHelperText] = useState("");
  const [inviteCodeHelperText, setInviteCodeHelperText] = useState("");

  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const validateUsername = (v: string) => {
    if (v === "") {
      setUsernameHelperText("请输入正确的邮箱或手机号码");
      return false;
    } else if (!(isEmail(v) || isPhone(v))) {
      setUsernameHelperText("请输入正确的邮箱或手机号码");
      return false;
    } else {
      setUsernameHelperText("");
      return true;
    }
  };
  // 验证邀请码
  const validatePromotion = (v: string | null) => {
    // 如果有输入邀请码、必须是6位数字，否则不验证,已经输出了又清空了，不再验证
    if (v === "") {
      setInviteCodeHelperText("");
      return false;
    } else if (v && !/^\d{6}$/.test(v)) {
      setInviteCodeHelperText("邀请码错误");
      return false;
    } else {
      setInviteCodeHelperText("");
      return true;
    }
  };

  const handleAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.trim();
    setAccount(v);
  };

  const handlePromotionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.trim();
    setPromotion(v);
    if (v === "") {
      setInviteCodeHelperText("");
    }
  };

  const handleCreate = () => {
    if (!validateUsername(account)) {
      return;
    }
    // 如果有输入邀请码、必须是6位数字，否则不验证
    if (promotion?.length > 0 && !/^\d{6}$/.test(promotion)) {
      setInviteCodeHelperText("邀请码错误");
      return;
    }

    if (!checked) {
      enqueueSnackbar("请先阅读并同意用户协议", { variant: "warning" });
      return;
    }
    goToStep2();
  };

  return (
    <Card
      variant="outlined"
      sx={{
        minHeight: 510,
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
      <CardHeader title="创建账号" />
      <CardContent>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { mb: 1, width: "100%" },
            "& .MuiInputBase-input:-webkit-autofill": {
              boxShadow: theme => (theme.palette.mode === "dark" ? `0 0 0 1000px #121212 inset` : `none`)
            }
          }}
        >
          <Box sx={{ mb: 2 }}>
            <TextField
              id="u-name"
              label="邮箱/手机号码"
              variant="outlined"
              autoComplete="random-string"
              name="u-name"
              value={account}
              error={usernameHelperText !== ""}
              helperText={usernameHelperText}
              onChange={handleAccountChange}
              onBlur={() => validateUsername(account)}
            />
          </Box>
          <TextField
            id="user-promotion"
            label="邀请码(选填)"
            variant="outlined"
            autoComplete="random-string"
            name="u-promotion"
            value={promotion || ""}
            error={inviteCodeHelperText !== ""}
            helperText={inviteCodeHelperText}
            onChange={handlePromotionChange}
            onBlur={() => validatePromotion(promotion)}
          />
          <Box sx={{ my: 4, mb: 2 }}>
            <FormControlLabel
              value="end"
              control={<Checkbox checked={checked} onChange={handleCheckboxChange} inputProps={{ "aria-label": "controlled" }} />}
              label={
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  我已阅读并同意
                  <Link
                    underline="none"
                    href="# "
                    variant="body2"
                    sx={{
                      color: "primary.main"
                    }}
                  >
                    《用户协议》
                  </Link>
                </Typography>
              }
              labelPlacement="end"
            />
          </Box>
          <LoadingButton variant="contained" fullWidth loading={uploading} sx={{ padding: "0.75rem 0" }} onClick={handleCreate}>
            创建账号
          </LoadingButton>
          <Typography variant="body2" sx={{ mt: 2.5 }}>
            已有账号？
            <Link
              underline="none"
              href={LOGIN_URL}
              variant="body2"
              sx={{
                color: "primary.main"
              }}
            >
              立即登录
            </Link>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
