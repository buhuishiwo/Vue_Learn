<template>
    <div class="category">
        <h3>{{title}}类别</h3>
        <!-- 定义一个插槽，Vue 可以明白 img 放在哪里 -->
        <slot name="center">默认值</slot>
        <slot name="footer">默认值</slot>
    </div>
</template>

<script>
    export default {
        name:'MainCategory',
        props:['listData','title']
    }
</script>

<style>
    .category{
        background-color: aqua;
        width: 200px;
        height: 300px;
    }
    h3{
        background-color: orange;
        text-align: center;
    }
    img{
        width: 200px;
        height: 200px;
    }
</style>