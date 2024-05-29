import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    //render 可以将模板渲染出来
    //因为我们引入的是一个残缺版的 Vue，它无法将模板解析并渲染
    //我们使用 render 函数就能吧模板解析出来
    // renfer(createElement){
    //     return createElement('h1','hello')
    // }
    //render的完整语法就像上面这样
    //使用箭头函数就能简化成下面的格式。
    //所以下面这行代码就是讲 App 中的模板渲染出来
  render: h => h(App),
}).$mount('#app')
