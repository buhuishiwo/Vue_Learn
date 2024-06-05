import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import './api/mock'
import store from './store'
import Cookie from 'js-cookie'
import {
  Container,
  Aside,
  Header,
  Main,
  RadioGroup,
  RadioButton,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Row,
  Card,
  Col,
  Table,
  TableColumn,
  Empty,
  Breadcrumb,
  BreadcrumbItem,
  Tag,
  Dialog,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  DatePicker,
  Pagination
} from 'element-ui'
Vue.component('el-container',Container)
Vue.component('el-aside',Aside)
Vue.component('el-header',Header)
Vue.component('el-main',Main)
Vue.component('el-radio-group',RadioGroup)
Vue.component('el-radio-button',RadioButton)
Vue.component('el-menu',Menu)
Vue.component('el-submenu',Submenu)
Vue.component('el-menu-item-group',MenuItemGroup)
Vue.component('el-menu-item',MenuItem)
Vue.component('el-button',Button)
Vue.component('el-dropdown',Dropdown)
Vue.component('el-dropdown-item',DropdownItem)
Vue.component('el-dropdown-menu',DropdownMenu)
Vue.component('el-row',Row)
Vue.component('el-col',Col)
Vue.component('el-card',Card)
Vue.component('el-table',Table)
Vue.component('el-table-column',TableColumn)
Vue.component('el-empty',Empty)
Vue.component('el-breadcrumb',Breadcrumb)
Vue.component('el-breadcrumb-item',BreadcrumbItem)
Vue.component('el-tag',Tag)
Vue.component('el-dialog',Dialog)
Vue.component('el-button',Button)
Vue.component('el-form',Form)
Vue.component('el-form-item',FormItem)
Vue.component('el-input',Input)
Vue.component('el-select',Select)
Vue.component('el-option',Option)
Vue.component('el-date-picker',DatePicker)
Vue.component('el-table',Table)
Vue.component('el-table-column',TableColumn)
Vue.component('el-pagination',Pagination)
Vue.config.productionTip = false


//添加全局前置导航守卫
router.beforeEach((to,from,next) => {
  const token = Cookie.get('token')

  if(!token && to.name !== 'login') {
    //如果 token 不存在且不再 login 页面
    //则跳转到 login 页面
    next({name:'login'})
  }else if(token && to.name === 'login'){
    //如果 token 存在且处于 login 页面
    //则跳转到 home 页面
    next({name:'home'})
  }else {
    //其他情况则正常跳转
    next()
  }
})
new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    store.commit('addMenu',router)
  }
}).$mount('#app')
