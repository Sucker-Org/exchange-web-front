import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface InputPassWordProps {
  label: string;
  password: string;
  setPassword: (password: string) => void;
}

export const InputPassWord: React.FC<InputPassWordProps> = props => {
  const { label,password,setPassword } = props;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl fullWidth sx={{ mt: 2, mb: 1.5 }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              sx={{
                color: "text.secondary"
              }}
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(show => !show)}
              onMouseDown={event => event.preventDefault()}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
        autoComplete="current-password"
        value={password}
        onChange={e => setPassword(e.target.value.trim())}
      />
    </FormControl>
  );
};
