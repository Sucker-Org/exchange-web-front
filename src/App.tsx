import "./App.css";
import CommonSnackbar from "./components/CommonSnackbar";
import { enqueueSnackbar } from "notistack";
function App() {
  return (
    <CommonSnackbar>
      <div className="container">
        <button
          onClick={() => {
            enqueueSnackbar("请求错误！请您稍后重试", { variant: "error" });
          }}
        >
          测试
        </button>
      </div>
    </CommonSnackbar>
  );
}

export default App;
