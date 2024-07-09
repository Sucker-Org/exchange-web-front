import Layout from "@/layout";
import { Container } from "@mui/material";
import { TradeHeader, WatchList, Chart, OrderBook, TradeForm, Account } from "./component";

// mock data img
import Btc from "@/assets/images/home/icon-btc.png";
import { TradeHeaderProps } from "./TradeHeader";
const TradeSpot: React.FC = () => {
  const layoutStyle = {
    padding: 0,
    display: "grid",
    gap: "10px",
    minHeight: "calc(100vh - 150px)",
    gridTemplateAreas:
      "'left header header header right' 'left orderBook chart watchList right' 'left orderBook tradeForm watchList right' 'left account account account right'",
    gridTemplateColumns: "1fr minmax(253px, 320px) minmax(510px, 880px) minmax(253px, 320px) 1fr",
    gridTemplateRows: "70px 500px minmax(360px, auto) 360px"
  };
  const tradeHeaderData: TradeHeaderProps = {
    assetData: {
      coinInfo: {
        icon: Btc,
        symbol: "BTC/USDT",
        volume: "776.44m"
      },
      coinPrice: "70,053.44",
      coinRate: 7.5,
      tradeData: [
        { title: "人民币价格", value: "70,053.44" },
        { title: "24小时最低", value: "70,053.44" },
        { title: "24小时最高", value: "70,053.44" },
        { title: "24小时量(BTC)", value: "70,053.44" },
        { title: "24小时量(USDT)", value: "70,053.44" }
      ]
    }
  };

  return (
    <Layout>
      <Container className="trade-wrap" maxWidth={false} style={layoutStyle}>
        <TradeHeader {...tradeHeaderData} sx={{ gridArea: "header" }} />
        <OrderBook sx={{ gridArea: "orderBook" }} />
        <Chart sx={{ gridArea: "chart" }} />
        <TradeForm sx={{ gridArea: "tradeForm" }} />
        <WatchList sx={{ gridArea: "watchList" }} />
        <Account sx={{ gridArea: "account" }} />

        <div style={{ gridArea: "left" }}></div>
        <div style={{ gridArea: "right" }}></div>
      </Container>
    </Layout>
  );
};
export default TradeSpot;
