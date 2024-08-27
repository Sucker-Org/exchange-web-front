/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description:
 */
// import { enqueueSnackbar } from "@/components/CommonSnackbar";

import { useRegStore } from "@/stores/modules/register";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Card, CardContent, CardHeader, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { checkRegCode } from "@/api/modules/user";

const styleFocused = {
  position: "absolute",
  left: "0",
  top: "0",
  bottom: "0",
  right: "0",
  borderRadius: 1,
  boxShadow: "0 0 0 4px rgba(58, 151, 212, 0.28)"
};
export const RegStep2 = ({ goToStep3 }) => {
  const CODE_LENGTH = new Array(6).fill(0);
  const { account, code, uploading, setCode } = useRegStore();

  const [focused, setFocused] = useState(false);
  const textFieldRef = useRef<HTMLInputElement>(null);
  const selectedIndex = code.split("").length < CODE_LENGTH.length ? code.split("").length : CODE_LENGTH.length - 1;

  const handleClick = () => {
    if (textFieldRef.current) {
      textFieldRef.current.focus();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (code.length > CODE_LENGTH.length) {
      return;
    } else {
      setCode(value);
    }
  };

  const handleKeyUp = (e: { key: string }) => {
    if (e.key === "Backspace") {
      setCode(code.slice(0, code.length - 1));
    }
  };

  const handleNext = () => {
    if (code.length < CODE_LENGTH.length) {
      return;
    }
    checkRegCode(account, code).then(res => {
      if (res) {
        goToStep3();
      }
    });
  };

  return (
    <form>
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
        <CardHeader title="验证码" />
        <CardContent
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            "& .MuiInputBase-input:-webkit-autofill": {
              boxShadow: theme => (theme.palette.mode === "dark" ? `0 0 0 1000px #121212 inset` : `none`)
            }
          }}
        >
          <Box
            sx={{ mb: 2, display: "flex", flexDirection: "row", justifyContent: "space-between", position: "relative" }}
            onClick={handleClick}
          >
            {CODE_LENGTH.map((_v, index) => {
              const selected = code.length === index;
              const filled = code.length === CODE_LENGTH.length && index === CODE_LENGTH.length - 1;
              return (
                <Box
                  key={index}
                  sx={{
                    width: 40,
                    height: 50,
                    position: "relative",
                    lineHeight: "50px",
                    textAlign: "center",
                    border: "1px solid",
                    borderColor: theme => (theme.palette.mode === "dark" ? "#888888" : "#121212"),
                    borderRadius: 1
                  }}
                >
                  {code.split("")[index]}
                  {(selected || filled) && focused && <Box sx={styleFocused} className="shadows" />}
                </Box>
              );
            })}
            <TextField
              sx={{
                position: "absolute",
                width: "0px",
                height: "0px",
                borderRadius: 1,
                textAlign: "center",
                top: 0,
                bottom: 0,
                left: `${selectedIndex * 32}px`,
                "& .MuiInputBase-input": { border: "none" },
                "& .MuiOutlinedInput-input": { py: "12px" },
                "& .MuiOutlinedInput-notchedOutline": { display: "none" }
              }}
              hiddenLabel
              inputRef={textFieldRef}
              id="user-code"
              variant="outlined"
              autoComplete="random-string"
              name="u-code"
              value={code || ""}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onKeyUp={handleKeyUp}
              onChange={handleChange}
            />
          </Box>
          <Box>
            <LoadingButton variant="contained" fullWidth loading={uploading} sx={{ padding: "0.75rem 0" }} onClick={handleNext}>
              下一步
            </LoadingButton>
            <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
              {/* TODO：重发验证码加上倒计时 */}
              收不到验证码？<Button>重新发送</Button>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </form>
  );
};
