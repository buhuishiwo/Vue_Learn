<template>
    <div>
        <button @click="isShow = !isShow">点击隐藏或显示</button>
        <transition appear>
            <h1 v-show="isShow">过渡动画</h1>
        </transition>
        
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
/* 动画写法 */
.v-enter-active{
    animation: test 1s;
}
.v-leave-active{
    animation: test 1s reverse;
}
@keyframes test {
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0px);
    }
}
</style>