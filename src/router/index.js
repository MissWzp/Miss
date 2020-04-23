import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/map',
    name: 'map',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/home/Map')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('../components/Category.vue')
  },
  {
    path: '/goodsdetail',
    name: 'goodsDetail',
    component: () => import('../components/GoodsDetail')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/order/Order')
  },
  {
    path: '/eat',
    name: 'eat',
    component: () => import('../components/Eat.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart/Cart.vue'),
    meta: {
        keepAlive: true
    }
},
{
  path: '/mine',
  name: 'mine',
  component: () => import('../views/mine/Mine.vue')
},
{
  path: '/login',
  name: 'login',
  component: () => import('../views/login/Login')
},
{
  path: '/myorder',
  name: 'myOrder',
  component: () => import('../views/mine/Children/MyOrder')
},

{
  path: '/usercenter',
  name: 'userCenter',
  component: () => import('../views/mine/Children/UserCenter')
},
{
  path: '/changeNickName',
  name: 'ChangeNickName',
  component: () => import('../views/mine/Children/ChangeNickName')
},
{
  path: '/couponList',
  name: 'couponList',
  component: () => import('../views/mine/Children/CouponList')
},
{
  path: '/order/myaddress',
  name: 'myAddress',
  component: () => import('../views/order/MyAddress')
},
{
  path: '/order/myAddress/addAddress',
  name: 'addAddress',
  component: () => import('../views/order/AddAddress')
},
{
  path: '/editaddress',
  name: 'editAddress',
  component: () => import('../views/order/EditAddress')
},
{
  path: '/switchLanguage',
  name: 'switchLanguage',
  component: () => import('../views/mine/Children/SwitchLanguage')
},
]


const router = new VueRouter({
  routes
})

//路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
      if (state.userInfo.token) {
          next()
      } else {
          next({
              path: '/login'
          })
      }
  } else {
      next()
  }
})

export default router
