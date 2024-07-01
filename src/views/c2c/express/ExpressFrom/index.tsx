import { Box, Card, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import styles from "./index.module.scss";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `swap-tab-${index}`,
    "aria-controls": `swap-tabpanel-${index}`
  };
}

const ExpressFrom = () => {
  const [value, setValue] = useState(0);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Card
      variant="outlined"
      sx={{
        width: 590,
        height: 510,
        borderRadius: 4,
        background: "none"
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          height: 70,
          "& .MuiTabs-indicator": { display: "none" },
          "& .Mui-selected": {
            color: "text.primary",
            bgcolor: "background.default"
          }
        }}
        aria-label="expressFrom"
        variant="fullWidth"
        className={styles.tabs}
      >
        <Tab
          label="购买"
          {...a11yProps(0)}
          sx={{
            borderTopLeftRadius: 4,
            fontSize: 24,
            height: 70
          }}
          className={styles.tab}
        />
        <Tab
          label="出售"
          {...a11yProps(1)}
          sx={{
            borderTopRightRadius: 4,
            fontSize: 24,
            height: 70
          }}
          className={styles.tab}
        />
      </Tabs>

      <CustomTabPanel value={value} index={0}>
        买入
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        卖出
      </CustomTabPanel>
    </Card>
  );
};

export default ExpressFrom;
