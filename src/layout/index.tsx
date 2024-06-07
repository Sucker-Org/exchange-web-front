/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description:Layout component
 */
import React from "react";
import ToolBarLeft from "./components/Header/ToolBarLeft";
import "./index.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <div className="header">
        <ToolBarLeft />
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
