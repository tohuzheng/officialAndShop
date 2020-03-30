/**
 * 记录登录状态工具类
 */
// 添加
export const saveLogin = function(token) {
    let storage=window.sessionStorage;
    storage.setItem('token',token);
}
// 清空
export const deleteLogin = function() {
    let storage=window.sessionStorage;
    storage.clear();
}
// 修改
export const updateLogin = function(token) {
    let storage=window.sessionStorage;
    storage.setItem('token',token);
}
// 获取
export const getToken = () => { let storage=window.sessionStorage; return storage.getItem('token'); }

// 存用户名
export const saveUserName = function(name){
    let storage=window.sessionStorage;
    storage.setItem('username',name);
}

// 取用户名
export const getUserName = () => { let storage=window.sessionStorage; return storage.getItem('username'); }