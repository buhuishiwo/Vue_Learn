import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home"
import User from '../views/User'
import Main from '../views/Main'
import Mall from '../views/Mall'
import Login from '../views/Login'
import Other from '../views/Other'
import UserCenter from '../views/UserCenter'

Vue.use(VueRouter)

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
 
//将路由和组件进行映射
//创建 router 实例
const routes = [
    //主路由
    {
        path:'/',
        component:Main,
        name:'Main',
        redirect:'/home',   //重定向
        children: [
            // 子路由
            // // {path:'home',name:'home',component:Home},
            // {path:'mall',name:'mall',component:Mall},
            // {path:'user',name:'user',component:User},
            // {path:'other',name:'other',component:Other},
        ]
    },
    {
        path:'/login',
        name:'login',
        component:Login
    },
    {
        path:'/usercenter',
        name:'usercenter',
        component: UserCenter
    }

]

const router = new VueRouter({
    routes      //routes:routes的简写
})

export default router