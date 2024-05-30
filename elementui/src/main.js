import Vue from 'vue'
import App from './App.vue'
import { Button,Container,Header,Main,Footer,TableColumn,Table,Input,Dialog,Form,FormItem} from 'element-ui'
Vue.config.productionTip = false
Vue.component('el-button',Button)
Vue.component('el-container',Container)
Vue.component('el-header',Header)
Vue.component('el-main',Main)
Vue.component('el-footer',Footer)
Vue.component('el-table-column',TableColumn)
Vue.component('el-table',Table)
Vue.component('el-input',Input)
Vue.component('el-dialog',Dialog)
Vue.component('el-form',Form)
Vue.component('el-form-item',FormItem)
new Vue({
  render: h => h(App),
}).$mount('#app')
