/**
 * Store中央状态管理配置
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        userInfo:{
            username:'',
            imgUrl:''
        }
    },
    mutations:{
        addInfo(state, user){
            state.userInfo.username = user.username; 
        },
        delInfo(state){
            state.userInfo.username = '';
        }
    },
    actions:{
        actionAddInfo(context, user){
            context.commit("addInfo", user);
        }
    },
    getters:{
        getUserInfo(state){
            return state.userInfo;
        }
    }
});