import { enqueueSnackbar } from "@/components/CommonSnackbar";
import { PasswordInput } from "@/components/PasswordInput";
import { LoadingButton } from "@mui/lab";
import { Box, Card, CardHeader } from "@mui/material";
import { useState } from "react";

export const Step3 = ({ confirm }) => {
  const [loading, setLoading] = useState(false);
  const handleConfirm = () => {
    setLoading(true);

    setTimeout(() => {
      setTimeout(() => {
        confirm();
        enqueueSnackbar("密码重置成功", { variant: "success" });
        setLoading(false);
      }, 3000);
    });
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
        <CardHeader title="创建新密码" sx={{ px: 0 }} />

        <PasswordInput label={"请输入新密码"} />
        <PasswordInput label={"再次输入新密码"} />

        <LoadingButton
          loading={loading}
          variant="contained"
          fullWidth
          sx={{ mt: 4, padding: "0.75rem 0" }}
          onClick={handleConfirm}
        >
          确认修改
        </LoadingButton>
      </Card>
    </Box>
  );
};
