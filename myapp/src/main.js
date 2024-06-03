import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import './api/mock'
import store from './store'
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
  Empty
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
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
