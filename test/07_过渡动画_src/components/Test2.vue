<template>
    <div>
        <button @click="isShow = !isShow">点击隐藏或显示</button>
        <!-- 多个标签在一个 transition -->
        <transition-group appear>
            <h1 v-show="isShow" key="1">过渡动画</h1>
            <h1 v-show="isShow" key="2">过渡动画</h1>
        </transition-group>
        
    </div>
</template>

<script>
    export default {
        name:'MyTest',
        data() {
            return {
                isShow:true
            }
        },
    }
</script>

<style scoped>
h1{
    text-align: center;
    width: 600px;
    height: 100px;
    background-color: aqua;

}
/* 过渡写法 */
.v-enter,.v-leave-to{
    transform: translateX(-100%);
}
.v-enter-to,.v-leave{
    transform: translateX(0%);
}
.v-enter-active,.v-leave-active {
    transition: 1s;
}
</style>