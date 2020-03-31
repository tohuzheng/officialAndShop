/**
 * 商城模块请求API接口
 */
import {httpPost, httpGet} from "@/utils/httpUtils.js"

// 提交登录
export const loginCheck = (body) => httpPost("/api/customer/checkLogin", body);
// 获取RSA公钥
export const getPublicKey = () => httpGet("/api/customer/getPublicKey");
// 注册信息提交
export const registerCustomer = (body) => httpPost("/api/customer/register", body);
// 获取产品类型
export const getProductClass = () => httpGet("/api/productClass/queryAllProductClass");
// 获取用户名
export const getUserNameApi = () => httpGet("/api/customer/getUserName");
// 官网首页提交建议
export const submitSuggestApi = (body) => httpPost("/api/suggest/addSuggest", body);
// 查询产品防伪码信息
export const searchOnlyCodeApi = (body) => httpPost("/api/onlyCode/queryOnlyCode", body);