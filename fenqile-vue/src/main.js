// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'//第三方插件
import $ from 'jquery'
import axios from 'axios'
import Vuex from 'vuex'
import './assets/css/swiper-3.4.2.min.css'
import './assets/js/swiper-3.4.2.min'
import './assets/css/iconfont/iconfont.css'
import 'mint-ui/lib/style.css'
import VueLazyload from 'vue-lazyload'
import VueLazyComponent from '@xunlei/vue-lazy-component'
// import myajax from './assets/js/my_tools.js'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
	preLoad:0.7,
	//error: 'dist/error.png',//这个是请求失败后显示的图片
	loading: '../static/lazy.png',//这个是加载的loading过渡效果
	try: 2 // 这个是加载图片数量
})
Vue.use(Mint);
Vue.use(Vuex);
Vue.use(VueLazyComponent)
Vue.prototype.$http = axios
/* eslint-disable no-new */


        //store
        let store= new Vuex.Store({
          state:{
              vipname:""
          }, //饭菜s 需要各个组件中间共享的数据
          mutations:{
              //mutaions: pure function :根据actions的要求做出对state的修改
              //
              "changeuser":(state,playload)=>{
                  console.log("step3:收到actions的请求,"+playload);
                  return state.vipname =playload.username;
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
      });

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})








        
