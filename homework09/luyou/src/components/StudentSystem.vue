<template>
  <div>
    <h1 style="text-align: center;">登录成功</h1>
    <h2 style="text-align: center;">你好,这里是学生管理系统</h2>
    <!-- 此处可添加学生系统具体内容 -->
  </div>
</template>

<script>
localStorage.setItem('isAuthenticated', 'false');
export default {
};
</script>