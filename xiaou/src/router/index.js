import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: "/index",
      component: () => import("../components/pages/index"),
      children: [
        {
          path: "/home",
          component: () => import("../components/views/home"),
          meta:{ //自定配置标签
            name:'首页'
          }
        },
        {
          path: "/sort",
          component: () => import("../components/views/sort"),
          meta:{ //自定配置标签
            name:'分类'
          }
        },
        {
          path: "/car",
          component: () => import("../components/views/car"),
          meta:{ //自定配置标签
            name:'购物车'
          }
        },
        {
          path: "/mine",
          component: () => import("../components/views/mine"),
          meta:{ //自定配置标签
            name:'个人中心'
          }
        },
        {
          path: "",
          redirect: "/home"
        }
      ]
    },
    {
      path: "/login",
      component: () => import("../components/pages/login"),
      meta:{
        name:'登录'
      }
    },
    {
      path: "/register",
      component: () => import("../components/pages/register"),
      meta:{
        name:'注册'
      }
    },
    {
      path: "/goodsDetail",
      component: () => import("../components/pages/goodsDetail"),
      meta:{
        name:'商品详情'
      }
    },
    {
      path: "/goodsList",
      component: () => import("../components/pages/goodsList"),
      meta:{
        name:'商品列表'
      }
    },
    {
      path: "*",
      redirect: "/index"
    }
  ]
});
