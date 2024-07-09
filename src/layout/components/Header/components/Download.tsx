import CustomIcon from "@/components/CustomIcon";
import {
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  IconButton,
  MenuProps,
  Popper,
  Typography,
  styled
} from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { useEffect, useState } from "react";
import { useQRCode } from "next-qrcode";
const StyledMenu = styled((props: MenuProps) => (
  <Popper
    {...props}
    style={{
      zIndex: zIndex.tooltip + 1
    }}
  >
    <Card sx={{ p: 1, background: "#ffffff" }}>{props.children}</Card>
  </Popper>
))(({ theme }) => ({
  "& .MuiCard-root": {
    borderRadius: 6,
    textAlign: "center",
    minWidth: 180,
    marginTop: theme.spacing(1.4)
  }
}));

const Download = () => {
  const { Canvas } = useQRCode();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [qrcodeState, setQrcodeState] = useState({
    qrcode: "",
    isLoading: true
  });
  const open = Boolean(anchorEl);
  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setQrcodeState(prevState => ({ ...prevState, qrcode: "后台获取下载地址", isLoading: false }));
    }, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <IconButton title="下载App" aria-label="下载App">
        <CustomIcon name="IconDownload" />
      </IconButton>
      <StyledMenu id="customized-menu" anchorEl={anchorEl} open={open} onClose={handleMouseLeave}>
        <CardHeader sx={{ p: 0 }} title={<Typography color="CaptionText">扫码下载App</Typography>} />
        <CardContent sx={{ position: "relative", height: 120, p: 0, textAlign: "center" }}>
          {qrcodeState.isLoading ? (
            <CircularProgress
              size={24}
              sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            />
          ) : (
            <Canvas
              text={qrcodeState.qrcode}
              options={{ type: "image/jpeg", quality: 0.3, errorCorrectionLevel: "M", scale: 4, width: 120 }}
            />
          )}
        </CardContent>
        <Typography variant="caption" color="text.secondary">
          支持iOS和Android客户端
        </Typography>
      </StyledMenu>
    </div>
  );
};
export default Download;
