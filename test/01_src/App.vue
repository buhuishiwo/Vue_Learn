<template>
    <div>
        <Student name='张三' :address="1"/>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Student from './components/Student.vue'

export default {
    name: 'App',
    components: {
        Student
    }
}
</script>

<style></style>
