<template>
    <div>
        <h2>角色名称：{{ name }}</h2>
        <h2>角色住址：{{ address }}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg:'你好'
        }
    },

    //简单声明接收
    // props:['name','address']

    //在接收的同时判断类型
    // props:{
    //     name:String,
    //     address:String
    // }

    //在接收的同时判断类型，判断必要性，添加默认值
    props:{
        name:{
            type:String,
            required:true,
        },
        address:{
            type:String,
            required:true,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>