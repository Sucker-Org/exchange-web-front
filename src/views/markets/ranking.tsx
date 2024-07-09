import { MARKETS_URL } from "@/config";
import Layout from "@/layout";
import { Typography, Tab, Container, Breadcrumbs, Link, Grid } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import { MarketCard } from "./component/MarketCard";
import { MarketListItem } from "./component/MarketListItem";
import { RankingTable } from "./component/RankingTable";

import { totalData } from "./getData";

const Ranking = () => {
  const [tabIndex, setTabIndex] = useState("0");
  const handleChange = (_event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Layout footer>
      <Container maxWidth="xl" sx={{ minHeight: "calc(100vh - var(--header-height))" }}>
        <Breadcrumbs aria-label="rankin breadcrumb" sx={{ mt: 3 }}>
          <Link underline="hover" color="inherit" href={MARKETS_URL}>
            行情概览
          </Link>
          <Typography variant="inherit" color="text.primary">
            排行榜
          </Typography>
        </Breadcrumbs>

        <Typography variant="h6" color="main" my={4}>
          排行榜
        </Typography>
        <TabContext value={tabIndex}>
          <TabList
            onChange={handleChange}
            aria-label="ranking tabs"
            sx={{
              "& .MuiTabs-indicator": {
                width: "20px !important",
                transform: "translateX(35px) !important"
              },
              "& .Mui-selected": {
                color: theme => theme.palette.text.primary + " !important",
                fontWeight: "bold"
              }
            }}
          >
            <Tab label="总榜" value="0" />
            <Tab label="热门榜" value="1" />
            <Tab label="涨幅榜" value="2" />
            <Tab label="跌幅榜" value="3" />
          </TabList>

          <TabPanel value="0" sx={{ p: 0, pt: 2 }}>
            <Grid container spacing={3}>
              {Object.entries(totalData).map(([key, { cardIcon, title, data }]) => (
                <MarketCard key={key} cardIcon={cardIcon} title={title} cardIconSize={16} titleSize="body2">
                  {data.slice(0, 5).map((item, index) => (
                    <MarketListItem key={index} keyNumber={index+1} {...item} />
                  ))}
                </MarketCard>
              ))}
            </Grid>
          </TabPanel>

          <TabPanel value="1" sx={{ p: 0 }}>
            <RankingTable tableData={totalData.hot.data} />
          </TabPanel>
          <TabPanel value="2" sx={{ p: 0 }}>
            <RankingTable tableData={totalData.up.data} />
          </TabPanel>
          <TabPanel value="3" sx={{ p: 0 }}>
            <RankingTable tableData={totalData.down.data} />
          </TabPanel>
        </TabContext>
      </Container>
    </Layout>
  );
};

export default Ranking;
