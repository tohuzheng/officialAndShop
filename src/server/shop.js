/**
 * 商城模块请求API接口
 */
import {httpPost, httpGet} from "@/utils/httpUtils.js"

// 提交登录
export const loginCheck = (body) => httpPost("/api/customer/checkLogin",body);
// 获取RSA公钥
export const getPublicKey = () => httpGet("/api/customer/getPublicKey");