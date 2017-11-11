<template>
<div>
  <router-view ></router-view>
  
    <index-footer></index-footer>

</div>
    
</template>

<script>
import indexFooter from "./components/common/indexFooter.vue"
export default {
  components:{
    indexFooter
  }
  /*
  store:new Vuex.Store({
            state:{
                vipname:"18829719678"
            }, //饭菜s 需要各个组件中间共享的数据
            mutations:{
                //mutaions: pure function :根据actions的要求做出对state的修改
                //
                "changeuser":(state,playload)=>{
                    console.log("step3:收到actions的请求,"+playload);
                    return state.vipname = "123";
                }
            }, //大厨s: 可以修改state中的状态的地方
            actions:{
                //actions:用来接收各个组件发送过来,需要修改state状态的说明
                //actions可以是异步的，ajax.->
                //actions没有修改state的权利,只有提交给mutations
                "user":(store,arg)=>{
                    console.log("step2:收到对应请求,作出反应");
                    new Promise((resolve,reject)=>{
                        store.commit("changeuser",arg)
                        resolve("ok")
                    })
                }
            }, //服务员:用来接收传过的动作说明,并把要求提交给mutations
            getters:{
                "getuser":(state)=>{
                    return state.vipname;
                }
            } //打饭菜的窗口s : 用来返回state中状态的值
        })
        */
}
</script>

<style>
@import './assets/css/public.css';
</style>
