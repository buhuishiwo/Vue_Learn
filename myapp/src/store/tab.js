import Cookie from 'js-cookie'
export default {
    state: {
        isCollapse:false,    //控制菜单展开/收起
        tabsList:[
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 's-home',
                url: 'Home/Home'
            }
        ],            //面包屑数据
        menu:[]

    },
    mutations:{
        //修改菜单展开/收起的方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        //更新面包屑数据
        selectMenu(state,val) {
            console.log(val)
            //判断添加的数据是否为首页
            if(val.name !== 'home') {
               const index =  state.tabsList.findIndex(item => item.name === val.name)
                //如果不存在
                if(index === -1) {
                    state.tabsList.push(val)
                } else {
                    //如果是已有页面，则该页面之后的数据全部删除
                    state.tabsList.splice(index+1)
                }
            }else {
                //当回到首页时，删除之后的所有数据
                if(state.tabsList.length>=1)
                    {
                        state.tabsList.splice(1)
                    }
            }
        },
        //删除指定数据
        closeTag(state,item) {
            console.log(item);
            const index = state.tabsList.findIndex(val => val.name === item.name)
            state.tabsList.splice(index,1)
        },
        //设置 menu 的数据
        setMenu(state,val) {
            state.menu = val
            Cookie.set('menu',JSON.stringify(val))
        },
        //动态注册路由
        addMenu(state,router) {
            //判断当前 Cookie 中是否有数据
            if(!Cookie.get('menu')) return
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            //处理动态路由数据
            const menuArry = []
            menu.forEach(item => {
                if(item.children) {
                   item.children = item.children.map(item => {
                        item.component = () => import(`../views/${item.url}`)
                        return item
                    })
                    menuArry.push(...item.children)
                }else {
                    item.component = () => import(`../views/${item.url}`)
                    menuArry.push(item)
                }              
            })
            menuArry.forEach(item => {
                router.addRoute('Main', item)
            })
        }
    }
}