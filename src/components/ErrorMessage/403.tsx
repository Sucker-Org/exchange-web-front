/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description:403 component
 */
import Img403 from "@/assets/images/403.png";
import "./index.scss";
import { Button } from "@mui/material";
export const Error403 = () => {
  return (
    <div className="not-container">
      <img src={Img403} alt="403" className="not-img" />
      <div className="not-detail">
        <h2>403</h2>
        <Button href="/" variant="contained" color="primary" title="Back to Home">
          Back to Home
        </Button>
      </div>
    </div>
  );
};
