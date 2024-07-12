import Layout from "@/layout";
import { Box, Typography } from "@mui/material";
import { memo } from "react";

const LEARN = () => {
  return (
    <Layout>
      <Box alignItems="center" justifyContent="center" display="flex" height="80vh">
        <Typography variant="h6">[新手学院] 暂未开放...</Typography>
      </Box>
    </Layout>
  );
};

export default memo(LEARN);
