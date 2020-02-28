import axios from 'axios'
import qs from 'qs'

/**
 * 工具说明：
 * 封装axios的http请求方法
 * post，get，put，delete四种请求
 */


/**
 * http的post方法
 * url：请求地址
 * param：传递参数
 * callSuccess：请求成功回调函数
 * callError：请求失败回调函数
 */
function httpPost(url, param, callSuccess, callError){
  let data = qs.stringify(param);
  axios.post(url, data).then((data) => {
    callSuccess(data);
  }).catch((data) => {
    callError(data);
  });
}