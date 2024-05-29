<template>
    <div class="school">
        <h2 @click="showName">学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
    //引入mixin混合
    import {mixin} from '../mixin'
    export default {
        name:'School',
        data() {
            return{
                name:'温州理工',
                address:'浙江温州'
            }
        },
        mixins:[mixin]
    }
</script>

<style>
.school{
    width: 200px;
    height: 300px;
    background-color: bisque;
}
</style>