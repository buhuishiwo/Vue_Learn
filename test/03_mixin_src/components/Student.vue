<template>
    <div class="student">
        <h2 @click="showName">学生姓名：{{ name }}</h2>
        <h2>学生地址：{{ address }}</h2>
    </div>
</template>

<script>
    import {mixin} from '../mixin'
    export default {
        name:'Student',
        data() {
            return{
                name:'张三',
                address:'浙江温州'
            }
        },
        mixins:[mixin]
    }
</script>

<style>
.student{
    width: 200px;
    height: 300px;
    background-color: bisque;
}
</style>