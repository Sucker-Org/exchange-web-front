/*
 * @Email: allen0101stanton@outlook.com
 * @Author: Eric
 * @Description:
 */
import Layout from "@/layout";
import { memo } from "react";
import { useLocation } from "react-router-dom";

const Register = memo(() => {
  const location = useLocation();

  console.log(location && location.state?.username);
  return (
    <Layout>
      <div className="register">Register</div>
    </Layout>
  );
});
export default Register;
