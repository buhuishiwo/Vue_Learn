<template>
    <div>
        <button @click="isShow = !isShow">点击隐藏或显示</button>
        <transition appear
        name="animate__animated animate__bounce" 
        enter-active-class="animate__zoomInDown"
        leave-active-class="animate__zoomOutDown"
        >
            <h1 v-show="isShow">过渡动画</h1>
        </transition>
        
    </div>
</template>

<script>
    // 引入第三方动画库
    import 'animate.css'
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
    margin: 0 auto;
    text-align: center;
    width: 600px;
    height: 100px;
    background-color: aqua;
}

</style>