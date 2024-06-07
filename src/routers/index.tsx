import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "@/views/home";
import Trade from "@/views/trade";
import Login from "@/views/login";
import { Error403, Error404, Error500 } from "@/components/ErrorMessage";
import { HOME_URL, TRADE_URL, LOGIN_URL } from "@/config";

const RedirectToHome = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate(HOME_URL);
  }, [navigate]);
  return null;
};

const AppRouters = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RedirectToHome />} />
        <Route path={HOME_URL} element={<Home />} />
        <Route path={TRADE_URL} element={<Trade />} />
        <Route path={LOGIN_URL} element={<Login />} />
        <Route path="/403" element={<Error403 />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/500" element={<Error500 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default AppRouters;
