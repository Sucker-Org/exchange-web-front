import { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from "@/views/login";
import { FullScreenLoading } from "@/components/Loading/fullScreen";
import { Error403, Error404, Error500 } from "@/components/ErrorMessage";
import {
  HOME_URL,
  C2C_EXPRESS_URL,
  C2C_MARKETS_URL,
  C2C_ORDER_URL,
  MARKETS_URL,
  MARKET_RANK_URL,
  TRADE_SPOT_URL,
  LOGIN_URL,
  REG_URL,
  USER_CENTER_URL
} from "@/config";

const Home = lazy(() => import("../views/home"));
const C2CExpress = lazy(() => import("../views/c2c/express"));
const C2CMarkets = lazy(() => import("@/views/c2c/markets"));
const C2COrder = lazy(() => import("@/views/c2c/order"));
const UserCenter = lazy(() => import("@/views/user/"));
const MARKETS = lazy(() => import("@/views/markets"));
const MARKET_RANK = lazy(() => import("@/views/markets/ranking"));
const TradeSpot = lazy(() => import("@/views/trade"));
const Register = lazy(() => import("@/views/register"));

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
      <Suspense fallback={<FullScreenLoading open={true} />}>
        <Routes>
          <Route path="/" element={<RedirectToHome />} />
          <Route path={HOME_URL} element={<Home />} />
          <Route path={C2C_EXPRESS_URL} element={<C2CExpress />} />
          <Route path={C2C_MARKETS_URL} element={<C2CMarkets />} />
          <Route path={C2C_ORDER_URL} element={<C2COrder />} />
          <Route path={TRADE_SPOT_URL} element={<TradeSpot />} />
          <Route path={USER_CENTER_URL} element={<UserCenter />} />
          <Route path={MARKETS_URL} element={<MARKETS />} />
          <Route path={MARKET_RANK_URL} element={<MARKET_RANK />} />

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
