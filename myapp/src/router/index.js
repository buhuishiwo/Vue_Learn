import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home"
import User from '../views/User'
import Main from '../views/Main'
import Mall from '../views/Mall'
import PageOne from '../views/PageOne'
import PageTwo from '../views/PageTwo'
Vue.use(VueRouter)
//将路由和组件进行映射
//创建 router 实例
const routes = [
    //主路由
    {
        path:'/',
        component:Main,
        redirect:'/home',   //重定向
        children: [
            //子路由
            {path:'home',component:Home},
            {path:'mall',component:Mall},
            {path:'user',component:User},
            {path:'page1',component:PageOne},
            {path:'page2',component:PageTwo},
            
        ]
    }

]

const router = new VueRouter({
    routes      //routes:routes的简写
})

export default router