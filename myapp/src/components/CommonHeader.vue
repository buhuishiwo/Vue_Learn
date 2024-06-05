<template>
    <div class="header-content">
        <!-- 左侧面包屑区 -->
        <div class="l-content">
            <!-- 打开/收起按钮 -->
            <el-button style="margin-right: 20px;" icon="el-icon-menu" @click="changeMenu()" size="small"></el-button>
            <!-- 面包屑区 -->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item  v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!-- 右侧头像区 -->
        <div class="r-content">
            <el-dropdown @command="handleClick">
                <span class="el-dropdown-link">
                    <img class="userpng" src="../assets/anya30.png" alt="" srcset="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="usercenter">个人中心</el-dropdown-item>
                    <el-dropdown-item command="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import{mapState} from'vuex'
import Cookie from 'js-cookie'
import { Message} from 'element-ui'
export default {
    methods: {
        //点击折叠菜单栏方法
        changeMenu() {
            this.$store.commit('collapseMenu')
        },
        handleClick(command) {
            //如果点击登出按钮时
            if(command === 'logout') {
                //清除 token 数据
                Cookie.remove('token')
                //清除 Cookie 中的 menu
                Cookie.remove('menu')
                //跳转到登录页面
                this.$router.push('/login')
                Message({
                    type:'warning',
                    message:'已登出'
                })
            }else if(command === 'usercenter') {
                this.$router.push('/usercenter')
            }
        }
    },
    computed: {
        ...mapState({
            tags:state => state.tab.tabsList
        })
    }
}
</script>

<style lang="less" scoped>
.header-content {
    padding: 0 20px;
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
    }
    .userpng {
        width: 40px;
        height: 40px;
        border-radius: 50px;
    }
    .l-content {
        display: flex;
        align-items: center;
        /deep/ .el-breadcrumb__item {
            .el-breadcrumb__inner {
                font-weight: normal;
                &.is-link {
                    color: #666;
                }
            }
            &:last-child {
                .el-breadcrumb__inner {
                    color: #fff;
                }
            }
        }
    }
}
</style>