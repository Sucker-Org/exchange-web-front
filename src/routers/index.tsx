import { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
// import Trade from "@/views/trade";
import Login from "@/views/login";
import { FullScreenLoading } from "@/components/Loading/fullScreen";
import { Error403, Error404, Error500 } from "@/components/ErrorMessage";
import { HOME_URL, TRADE_CONVERT_URL, MARKETS_URL, LOGIN_URL, REG_URL } from "@/config";

const Home = lazy(() => import("@/views/Home"));
const Trade = lazy(() => import("@/views/trade"));
const MARKETS = lazy(() => import("@/views/markets"));
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
          <Route path={TRADE_CONVERT_URL} element={<Trade />} />
          <Route path={MARKETS_URL} element={<MARKETS />} />

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
