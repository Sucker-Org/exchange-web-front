import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";

// 页面资源加载完成后，移除如何文件index.html中id为appLoading元素
document.addEventListener("DOMContentLoaded", () => {
  const appLoading = document.getElementById("appLoading");
  appLoading?.parentNode?.removeChild(appLoading);
});
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
