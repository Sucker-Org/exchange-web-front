import { MARKETS_URL } from "@/config";
import Layout from "@/layout";
import { Typography, Tab, Container, Breadcrumbs, Link, Card, Grid } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import { IconText } from "@/components/IconText";
import hotIcon from "@/assets/images/markets/icon-hot.webp";
import upIcon from "@/assets/images/markets/icon-up.webp";
import downIcon from "@/assets/images/markets/icon-down.webp";

const cardStyle = { py: 2, px: 1, borderRadius: 4, bgcolor: "background.default" };

const Ranking = () => {
  const [tabIndex, setTabIndex] = useState("0");
  const handleChange = (_event, newValue) => {
    setTabIndex(newValue);
  };
  return (
    <Layout footer>
      <Container maxWidth="lg" sx={{ padding: "0 !important", minHeight: "calc(100vh - var(--header-height))" }}>
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
            aria-label="kline"
            sx={{
              height: "100%",
              "& .MuiTabs-indicator": {
                width: "30px !important",
                transform: "translateX(30px) !important"
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

          <TabPanel value="0">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Card variant="outlined" sx={cardStyle}>
                  <IconText fz="button" icon={hotIcon} width={16} height={16} text={"热门榜"} />
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card variant="outlined" sx={cardStyle}>
                  <IconText fz="button" icon={upIcon} width={16} height={16} text={"涨幅榜"} />
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card variant="outlined" sx={cardStyle}>
                  <IconText fz="button" icon={downIcon} width={16} height={16} text={"跌幅榜"} />
                </Card>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value="1">热门榜</TabPanel>
          <TabPanel value="2">涨幅榜</TabPanel>
          <TabPanel value="3">跌幅榜</TabPanel>
        </TabContext>
      </Container>
    </Layout>
  );
};

export default Ranking;
