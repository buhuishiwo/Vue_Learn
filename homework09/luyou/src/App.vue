<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">温州理工滨海校区</router-link></li>
        <li><router-link to="/chashan">温州理工茶山校区</router-link></li>
        <li><router-link to="/yueqing">温州理工乐清校区</router-link></li>
        <li><router-link to="/student-system">学生管理系统</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
nav {
  background-color: #333;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

nav ul {
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin-right: 20px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
}

nav ul li a:hover {
  color: #ccc;
}
</style>