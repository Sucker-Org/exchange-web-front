/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description:
 */
// import { enqueueSnackbar } from "@/components/CommonSnackbar";

import { useRegStore } from "@/stores/modules/register";
import { LoadingButton } from "@mui/lab";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
// import { useState } from "react";
import { InputPassWord } from "@/components/InputPassWord";
export const RegStep3 = ({ confirm }) => {
  const regStore = useRegStore();

  const { password, uploading, setPassword } = regStore;
  // const [errorText, setErrorText] = useState("");

  const handleCreate = () => {
    confirm();
  };

  return (
    <Card
      variant="outlined"
      sx={{
        minHeight: 510,
        borderRadius: 4,
        p: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: { sm: "50%", lg: "50%", xl: "40%" },
        minWidth: {
          xs: "100%",
          sm: 420,
          md: 500
        }
      }}
    >
      <CardHeader title="设置登录密码" />
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          "& .MuiTextField-root": { mb: 1, width: "100%" },
          "& .MuiInputBase-input:-webkit-autofill": {
            boxShadow: theme => (theme.palette.mode === "dark" ? `0 0 0 1000px #121212 inset` : `none`)
          }
        }}
      >
        <Box>
          <InputPassWord label="输入密码" password={password} setPassword={setPassword} />

          <Box sx={{ mb: 1 }}>
            <Typography
              variant="body2"
              color={theme => theme.palette.text.secondary}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 0.5,
                "& svg": { mr: 0.5, fontSize: 16 }
              }}
            >
              <CheckIcon />
              至少8个字符
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 0.5,
                "& svg": { color: theme => theme.palette.success.main, mr: 0.5, fontSize: 16 }
              }}
            >
              <CheckIcon />
              至少1个大写字母
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 0.5,
                "& svg": { color: theme => theme.palette.error.main, mr: 0.5, fontSize: 16 }
              }}
            >
              <ClearIcon />
              至少1个数字
            </Typography>
          </Box>
          <InputPassWord label="确认密码" password={password} setPassword={setPassword} />
        </Box>
        <LoadingButton
          variant="contained"
          fullWidth
          loading={uploading}
          sx={{ padding: "0.75rem 0", mt: 2 }}
          onClick={handleCreate}
        >
          确定
        </LoadingButton>
      </CardContent>
    </Card>
  );
};
