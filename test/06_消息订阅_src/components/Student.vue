<template>
    <div class="student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生地址：{{ address }}</h2>
        <button @click="sendName">传数据</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return{
                name:'张三',
                address:'浙江温州'
            }
        },
        methods:{
            sendName(){
                PubSub.publish('hello',666)
            }
        },
    }
</script>

<style scoped>
/* 局部样式 */
.student{
    width: 200px;
    height: 300px;
    background-color: bisque;
}
</style>

