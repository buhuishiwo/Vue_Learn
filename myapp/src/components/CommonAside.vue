<template>

    <el-menu 
    class="el-menu-vertical-demo" 
    background-color="#545c64" 
    text-color="#fff" 
    active-text-color="#ffd04b"
    :default-active="this.$route.name"
    :collapse="isCollapse">
        <h3>{{ isCollapse ? '后台' : '618大促管理系统' }}</h3>
        <el-menu-item @click="clickMenu(item)" v-for="item in menuData" :key="item.name" :index="item.name">
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{ item.label }}</span>
        </el-menu-item>
    </el-menu>

</template>

<script>
import Cookie from 'js-cookie'
export default {
    data() {
        return {}
    },
    methods: {
        //点击跳转
        clickMenu(item) {
            this.$router.push(item.path)
            this.$store.commit('selectMenu', item)
            console.log(this.$route.name)
        }
    },
    computed: {
        //没有子菜单
        isCollapse() {
            return this.$store.state.tab.isCollapse
        },
        //动态的 menu 数据
        menuData() {
            //判断 menu 数据是否存在，如无，则从 store 中获取
            return JSON.parse(Cookie.get('menu')) ||this.$store.state.tab.menu
        }
    }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-menu {
    height: 100vh;
    border-right: none;

    h3 {
        font-size: 16px;
        font-weight: 400;
        line-height: 60px;
        text-align: center;
        color: #ffffff;
    }
}
</style>