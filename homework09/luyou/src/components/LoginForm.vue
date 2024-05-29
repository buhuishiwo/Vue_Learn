<template>
  <div>
    <h2 style="text-align: center;">登录</h2>
    <input v-model="username" type="text" placeholder="用户名">
    <input v-model="password" type="password" placeholder="密码">
    <button @click="login">登录</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      username: 'admin',
      password: '123456'
    };
  },
  methods: {
    login() {
      if (this.username === 'admin' && this.password === '123456') {
        localStorage.setItem('isAuthenticated', 'true');
        this.$router.push('/studentsystem');
      } else {
        alert('用户名或密码错误！');
      }
    }
  }
};
</script>