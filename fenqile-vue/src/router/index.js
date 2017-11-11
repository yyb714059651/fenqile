import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index.vue'
import goodlist from '@/pages/goodlist.vue'
import goodsdetail from '@/pages/goodsdetail.vue'
import shopcart from '@/pages/shopcart.vue'
import classify from  "@/pages/classify.vue"
import lecoco from  "@/pages/lecoco.vue"
import my from '@/pages/my.vue'
import YybFqlDl from '@/pages/YybFqlDl.vue'
import YybFqlZc from '@/pages/YybFqlZc.vue'
import YybFqlIm from '@/pages/YybFqlIm.vue'
import tuijian from '@/pages/tuijian.vue'
import index1 from '@/pages1/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/class',
      name: 'classify',
      component: classify
    },
    {
      path: '/leka',
      name: 'lecoco',
      component: lecoco
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/list',
      name: 'list',
      component: goodlist
    },
    {
      path: '/detail',
      name: 'goodsdetail',
      component: goodsdetail
    },
    {
      path: '/cart',
      name: 'shopcart',
      component: shopcart
    },
    {
      path: '/Dl',
      name: 'Dl',
      component:YybFqlDl
    },
    {
      path: '/Zc',
      name: 'Zc',
      component:YybFqlZc
    },
    {
      path: '/Im',
      name: 'Im',
      component:YybFqlIm
    },
    {
      path: '/tuijian',
      name: 'tuijian',
      component: tuijian
    }
  ]
})
