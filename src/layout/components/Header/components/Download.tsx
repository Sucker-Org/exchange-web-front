import CustomIcon from "@/components/CustomIcon";
import { Card, CardHeader, CardMedia, IconButton, MenuProps, Popper, Typography, styled } from "@mui/material";
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
    <Card sx={{ p: 1, textAlign: "center" }}>
      <CardHeader sx={{ pb: 1 }} title={<Typography>扫码下载App</Typography>}></CardHeader>
      <CardMedia sx={{ height: 120, width: 120, mx: "auto", mb: 1 }} image={downloadImage} title="Download" />
      <Typography variant="caption" color="text.secondary">
        支持iOS和Android客户端
      </Typography>
    </Card>
  </Popper>
))(() => ({
  "& .MuiBox-root": {
    borderRadius: 6,
    minWidth: 180
  }
}));

const Download = () => {
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
      <StyledMenu id="customized-menu" anchorEl={anchorEl} open={open} onClose={handleMouseLeave}></StyledMenu>
    </div>
  );
};
export default Download;
