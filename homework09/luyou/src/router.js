// src/router/index.js
import Vue from 'vue'
import Router from 'vue-router'
import CampusBinhai from './components/CampusBinhai.vue'
import CampusChashan from './components/CampusChashan.vue'
import CampusYueqing from './components/CampusYueqing.vue'
import Login from './components/LoginForm.vue'
import StudentSystem from './components/StudentSystem.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', component: CampusBinhai },
    { path: '/chashan', component: CampusChashan },
    { path: '/yueqing', component: CampusYueqing },
    { path: '/login', component: Login },
    { path: '/studentsystem', component: StudentSystem, meta: { requiresAuth: false } }
  ]
})

// 路由守卫
router.beforeEach((to,from,next) => {
  // 直接检查目标路由是否需要认证，如果是则重定向到登录页面
  console.log(to,from)
  if(to.path === '/student-system'){
    if(localStorage.getItem('isAuthenticated') === "true")
      {
        next('/studentsystem')
      }else{
        next('/login')
      }
  }else{
    next()
  }
})

export default router