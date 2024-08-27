import { LOGIN_URL, REG_URL } from "@/config";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const LoginOrRegText: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Button
        onClick={() => {
          navigate(LOGIN_URL);
        }}
      >
        登录
      </Button>
      或
      <Button
        onClick={() => {
          navigate(REG_URL);
        }}
      >
        立即注册
      </Button>
      开始交易
    </Box>
  );
};
