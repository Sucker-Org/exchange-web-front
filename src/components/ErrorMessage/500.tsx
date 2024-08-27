/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description:500 component
 */
import Img500 from "@/assets/images/500.png";
import "./index.scss";
import { Button } from "@mui/material";
export const Error500 = () => {
  return (
    <div className="not-container">
      <img src={Img500} alt="500" className="not-img" />
      <div className="not-detail">
        <h2>500</h2>
        <Button href="/" variant="contained" color="primary" title="Back to Home">
        返回首页
        </Button>
      </div>
    </div>
  );
};
