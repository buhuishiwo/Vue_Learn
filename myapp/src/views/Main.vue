<template>
    <div>
        <el-container>
            <!-- Aside -->
            <el-aside width="auto">
                <CommonAside/>
            </el-aside>
            <el-container>
                <!-- Header -->
                <el-header>
                    <CommonHeader/>
                </el-header>
                <!-- Tag -->
                <CommonTag/>
                <el-main>
                    <!-- 路由出口 -->
                    <!-- 路由匹配到的组件将渲染在这里 -->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import CommonAside from '../components/CommonAside'
    import CommonHeader from '../components/CommonHeader'
    import CommonTag from '../components/CommonTag'
    export default {    
        components:{CommonAside,CommonHeader,CommonTag}
    }
</script>

<style lang="less" scoped>

.el-header {
    padding: 0px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}
.el-aside {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
}
</style>