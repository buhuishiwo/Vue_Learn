<template>
    <div>
        <el-container>
            <el-aside width="auto">
                <CommonAside/>
            </el-aside>
            <el-container>
                <el-header>
                    <CommonHeader/>
                </el-header>
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
    export default {    
        components:{CommonAside,CommonHeader}
    }
</script>

<style lang="less" scoped>

.el-header {
    padding: 0px;
}

</style>