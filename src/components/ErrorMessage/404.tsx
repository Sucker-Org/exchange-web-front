/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description:404 component
 */
import Img404 from "@/assets/images/404.png";
import "./index.scss";
import { Button } from "@mui/material";
export const Error404 = () => {
  return (
    <div className="not-container">
      <img src={Img404} alt="404" className="not-img" />
      <div className="not-detail">
        <h2>404</h2>
        <Button href="/" variant="contained" color="primary" title="Back to Home">
          返回首页
        </Button>
      </div>
    </div>
  );
};
