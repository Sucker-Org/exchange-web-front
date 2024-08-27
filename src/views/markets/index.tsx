import React from "react";
import Layout from "@/layout";
import { Box, Container, Stack, Tab, Typography } from "@mui/material";

import { RecommendMarket } from "./component/RecommendMarket";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { RankingTable } from "./component/RankingTable";
import { totalData } from "./getData";

const Markets = () => {
  const [tabIndex, setTabIndex] = React.useState("0");
  const handleChangeTab = (_event, newValue) => {
    setTabIndex(newValue);
  };
  return (
    <Layout footer>
      <Container sx={{ minHeight: "calc(100vh - var(--header-height))", maxWidth: { xl: "xl" } }}>
        <Typography variant="h6" color="main" my={5}>
          行情概览
        </Typography>
        <RecommendMarket />

        <TabContext value={tabIndex}>
          <Stack direction={{ sm: "row" }} justifyContent="space-between" alignItems="center" sx={{ mt: 3 }}>
            <TabList
              onChange={handleChangeTab}
              aria-label="ranking tabs"
              sx={{
                pt: 2,
                "& .MuiTabs-indicator": {
                  width: "15px !important",
                  transform: "translateX(7px) !important"
                },
                "& .Mui-selected": {
                  color: theme => theme.palette.text.primary + " !important",
                  fontWeight: "bold"
                }
              }}
            >
              <Tab label="自选" value="0" sx={{ p: 0, pr: 1, minWidth: 0, mr: 2 }} />
              <Tab label="现货" value="1" sx={{ p: 0, pr: 1, minWidth: 0 }} />
            </TabList>
            <Box>Search</Box>
          </Stack>
          <TabPanel value="0" sx={{ px: 0 }}>
            <RankingTable tableData={totalData.market.data} />
          </TabPanel>

          <TabPanel value="1" sx={{ px: 0 }}>
            <RankingTable tableData={totalData.market.data} showHighLow />
          </TabPanel>
        </TabContext>
      </Container>
    </Layout>
  );
};

export default Markets;
