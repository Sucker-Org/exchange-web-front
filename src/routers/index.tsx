import { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Loading } from "@/components/Loading";
import { Error403, Error404, Error500 } from "@/components/ErrorMessage";
import {
  HOME_URL,
  C2C_EXPRESS_URL,
  C2C_MARKETS_URL,
  C2C_ORDER_URL,
  MARKETS_URL,
  MARKET_RANK_URL,
  TRADE_SPOT_URL,
  TRADE_CROSS_URL,
  LOGIN_URL,
  REG_URL,
  USER_CENTER_URL,
  FUTURES_URL,
  EARN_URL,
  LEARN_URL
} from "@/config";

const Home = lazy(() => import("../views/home"));
const C2CExpress = lazy(() => import("../views/c2c/express")); //快速买币
const C2CMarkets = lazy(() => import("@/views/c2c/markets")); //自选买币
const C2COrder = lazy(() => import("@/views/c2c/order")); //法币交易订单
const UserCenter = lazy(() => import("@/views/user/")); //用户中心
const MARKETS = lazy(() => import("@/views/markets")); //行情
const MARKET_RANK = lazy(() => import("@/views/markets/ranking")); //排行榜
const TradeSpot = lazy(() => import("@/views/trade")); //现货交易
const TradeCross = lazy(() => import("@/views/trade/tradeCross")); //杠杆交易
const Futures = lazy(() => import("@/views/futures")); //合约交易
const Earn = lazy(() => import("@/views/earn")); //理财
const Learn = lazy(() => import("@/views/learn")); //理财
const Login = lazy(() => import("@/views/login")); //登录
const Register = lazy(() => import("@/views/register")); //注册

const RedirectToHome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(HOME_URL);
  }, [navigate]);
  return null;
};

const AppRouters = () => {
  return (
    <Router>
      <Suspense fallback={<Loading open={true} />}>
        <Routes>
          <Route path="/" element={<RedirectToHome />} />
          <Route path={HOME_URL} element={<Home />} />
          <Route path={C2C_EXPRESS_URL} element={<C2CExpress />} />
          <Route path={C2C_MARKETS_URL} element={<C2CMarkets />} />
          <Route path={C2C_ORDER_URL} element={<C2COrder />} />
          <Route path={TRADE_SPOT_URL} element={<TradeSpot />} />
          <Route path={TRADE_CROSS_URL} element={<TradeCross />} />
          <Route path={USER_CENTER_URL} element={<UserCenter />} />
          <Route path={MARKETS_URL} element={<MARKETS />} />
          <Route path={MARKET_RANK_URL} element={<MARKET_RANK />} />
          <Route path={FUTURES_URL} element={<Futures />} />
          <Route path={EARN_URL} element={<Earn />} />
          <Route path={LEARN_URL} element={<Learn />} />

          <Route path={LOGIN_URL} element={<Login />} />
          <Route path={REG_URL} element={<Register />} />
          <Route path="/403" element={<Error403 />} />
          <Route path="/404" element={<Error404 />} />
          <Route path="/500" element={<Error500 />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouters;
