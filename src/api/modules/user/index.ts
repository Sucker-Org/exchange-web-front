import http from "@/api";
import { User } from "../../interface";
import { ContentTypeEnum } from "@/enums/httpEnum";
import { AxiosRequestHeaders } from "axios";

/**
 * @description user login
 * @param {string} username username
 * @param {string} password password
 * @param {number} type 1: phone, 2: email
 * @return {() => User.UserInfo} A function that when called, returns a promise with the existence information
 */

export const userLogin = (username: string, password: string, type: number) => {
  return http.post<User.UserInfo>("/uc/login", { username, password, type });
};

/**
 * @description: user logout
 * @param {*}
 * @return {*}
 */
export const userLogout = () => {
  return http.post("/uc/logout");
};

/**
 * @description: 创建账号发送验证码
 * @param {string} account 邮箱或手机号码
 * @return {boolean}
 */
export const getCodeByReg = (account: string) => {
  const isEmail = account.includes("@");
  const isPhone = account.length === 11;

  if (!isEmail && !isPhone) {
    return Promise.reject("请输入正确的邮箱或手机号码");
  }
  const url = isEmail ? "/uc/code/reg/email" : "/uc/code/reg/mobile";
  const data = isEmail ? { email: account } : { phone: account, country: "中国" };
  const headers = { "Content-Type": ContentTypeEnum.FORM_URLENCODED } as AxiosRequestHeaders;

  return http.post<string>(url, data, { headers });
};

/**
 * @description: 校验注册验证码是否正确
 * @param {string} account 邮箱或手机号码
 * @param {string} code 验证码
 * @return {boolean}
 */
export const checkRegCode = (account: string, code: string) => {
  return http.post<boolean>("/uc/code/reg/checkCode", {
    account,
    code,
    type: account.includes("@") ? 2 : 1
  });
}

/**
 * @description 创建用户
 * @param {string} account 用户的电子邮件地址或者手机号
 * @param {string} code 验证码
 * @param {string} password 用户设置的密码
 * @param {string|null} [promotion] 可选参数，邀请码
 * @return {Promise<User.UserInfo>} 返回一个包含用户信息的 Promise
 */
export const register = (password: string, account: string, code: string, promotion?: string | null) => {
  const isEmail = account.includes("@");
  const url = isEmail ? "/uc/register/for_email" : "/uc/register/for_phone";
  const regAccount = isEmail ? { email: account } : { phone: account };
  return http.post<User.UserInfo>(url, {
    code,
    password,
    regAccount,
    promotion
  });
};

/**
 * @description Get user information
 * @param
 * @return {() => User.UserInfo} A function that when called, returns a promise with the existence information
 */
export const getUserInfo = () => {
  return http.get<User.UserInfo>("/uc/user/info");
};

/**
 * @description Use this hook to check if an email or phone number exists
 * @param {string} emailPhone Email or phone number to check
 * @return {() => Promise<ResultData<boolean>>} A function that when called, returns a promise with the existence information
 */
export const checkEmailPhone = (emailPhone: string) => {
  return http.get<boolean>("/uc/code/update/password", { emailPhone });
};

/**
 * @description 重置密码发送验证码
 * @param {string} emailPhone Email or phone number
 * @return {() => Promise<ResultData<boolean>>} A function that when called, returns a promise with the existence information
 */
export const sendVerificationCode = (emailPhone: string) => {
  return http.get<boolean>("/uc/code/reset/password", { emailPhone });
};
