/**
 * 封装网关域名及所有接口的方法名
 */

const BASE_URL = "http://120.79.254.54:3001";

export default {
  // 用户注册
  EXECUTE_USER_REGISTER: `${BASE_URL}/users/register`,
  // 用户登录
  EXECUTE_USER_LOGIN: `${BASE_URL}/users/login`,
  // 图片
  PUBLIC_IMAGES: `${BASE_URL}/public/images`,
  // 根路径
  ROOT: `${BASE_URL}`,
};
