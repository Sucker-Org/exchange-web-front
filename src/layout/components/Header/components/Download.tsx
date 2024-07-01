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
import { useState } from "react";
import downloadImage from "@/assets/images/download.png";
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
  const [isLoading, setIsLoading] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMouseLeave = () => {
    setAnchorEl(null);
  };
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <IconButton title="下载App">
        <CustomIcon name="IconDownload" />
      </IconButton>
      <StyledMenu id="customized-menu" anchorEl={anchorEl} open={open} onClose={handleMouseLeave}>
        <CardHeader sx={{ pb: 1 }} title={<Typography color="CaptionText">扫码下载App</Typography>}></CardHeader>
        <CardContent
          sx={{
            position: "relative",
            height: 120,
            p: 0,
            mb: 1,
            textAlign: "center"
          }}
        >
          {isLoading && (
            <CircularProgress
              size={24}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-12px",
                marginLeft: "-12px"
              }}
            />
          )}

          <img
            src={downloadImage}
            alt="Download"
            style={{ height: 120, width: 120, display: isLoading ? "none" : "inline-block" }}
            onLoad={() => setIsLoading(false)}
          />
        </CardContent>

        <Typography variant="caption" color="text.secondary">
          支持iOS和Android客户端
        </Typography>
      </StyledMenu>
    </div>
  );
};
export default Download;
