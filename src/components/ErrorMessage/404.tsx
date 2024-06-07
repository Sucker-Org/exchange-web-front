/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description:404 component
 */
import Img404 from "@/assets/images/404.png";
import "./index.scss";
export const Error404 = () => {
  return (
    <div className="not-container">
      <img src={Img404} alt="404" />
    </div>
  );
};
