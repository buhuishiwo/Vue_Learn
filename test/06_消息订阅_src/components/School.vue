<template>
    <div class="school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>

    </div>
</template>

<script>

    import pubsub from 'pubsub-js'
    export default {
        name:'School',
        data() {
            return{
                name:'温州理工',
                address:'浙江温州'
            }
        },
        mounted(){
            this.pubid = pubsub.subscribe('hello',function(){
                console.log('有人发布了 hello 消息，hello 消息回调了');
            })
        },
        beforeDestroy(){
            pubsub.unsubscribe(this.pubid)
        }
    }
</script>

<style>
.school{
    width: 200px;
    height: 300px;
    background-color: bisque;
}
</style>