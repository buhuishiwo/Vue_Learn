<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDOM">点我显示 DOM 元素</button>
        <School ref="sch"></School>
        <Student></Student>
    </div>
</template>

<script>

    import School from './components/School';
    import Student from './components/Student.vue';
    export default {
        name:'App',
        components:{School,Student},
        methods: {
            showDOM(){
                console.log(this.$refs.title)   //得到 DOM 元素
                console.log(this.$refs.btn);    //得到 DOM 元素
                console.log(this.$refs.sch);    //得到 School 组件的实例对象
            }
        }
    }
</script>

