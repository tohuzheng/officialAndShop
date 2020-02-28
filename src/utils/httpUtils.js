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
export function httpPost(url, params, callSuccess, callError){
  // 序列化参数
  let data = qs.stringify(params, { indices: false });
  // 发送请求
  axios.post(url, data).then((data) => {
    if(callSuccess != null){
      callSuccess(data);
    }
  }).catch((data) => {
    if(callError != null){
      callError(data);
    }
  });
}


/**
 * http的get方法
 * url：请求地址
 * param：传递参数
 * callSuccess：请求成功回调函数
 * callError：请求失败回调函数
 */
export function httpGet(url, param, callSuccess, callError){
    // 序列化参数
    let data = qs.stringify(params, { indices: false });
    // 发送请求
    axios.get(url,{params:data}).then((data) => {
      if(callSuccess != null){
        callSuccess(data);
      }
    }).catch((data) => {  
      if(callError != null){
        callError(data);
      }
    });
}


/**
 * http的delete方法
 * url：请求地址
 * param：传递参数
 * callSuccess：请求成功回调函数
 * callError：请求失败回调函数
 */
export function httpDelete(url, param, callSuccess, callError){
        // 序列化参数
        let data = qs.stringify(params, { indices: false });
        // 发送请求
        axios.delete(url,{params:data}).then((data) => {
          if(callSuccess != null){
            callSuccess(data);
          }
        }).catch((data) => {  
          if(callError != null){
            callError(data);
          }
        });
}


/**
 * http的put方法
 * url：请求地址
 * param：传递参数
 * callSuccess：请求成功回调函数
 * callError：请求失败回调函数
 */
export function httpPut(url, param, callSuccess, callError){
      // 序列化参数
      let data = qs.stringify(params, { indices: false });
      // 发送请求
      axios.put(url, data).then((data) => {
        if(callSuccess != null){
          callSuccess(data);
        }
      }).catch((data) => {
        if(callError != null){
          callError(data);
        }
      });
}

/**
 * RESTful接口风格中，用不同的请求方式干不同的事。
 * get一般用于获取数据：就像select
 * post一般用于新增数据，就像insert
 * put一般用于修改数据，就像update
 * delete一般用于删除数据，就像delete
 */