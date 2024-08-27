import Layout from "@/layout";
import { Box, Typography } from "@mui/material";
import { memo } from "react";
import under from "@/assets/images/under.webp";

const Futures = () => {
  return (
    <Layout>
      <Box alignItems="center" justifyContent="center" flexDirection="column" display="flex" height="80vh">
        <img src={under} alt="under" />
        <Typography variant="h6" mt={2}>
          合约暂未开放
        </Typography>
      </Box>
    </Layout>
  );
};

export default memo(Futures);
