<template>
    <div class="header-content">
        <div class="l-content">
            <!-- 打开/收起按钮 -->
            <el-button icon="el-icon-menu" @click="changeMenu()" size="small"></el-button>
            <!-- 面包屑区 -->
            <span class="text">首页</span>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="userpng" src="../assets/anya30.png" alt="" srcset="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>

export default {
    methods:{
        changeMenu(){
            this.$store.commit('collapseMenu')
        }
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
    .userpng{
        width: 40px;
        height: 40px;
        border-radius: 50px;
    }
}
</style>