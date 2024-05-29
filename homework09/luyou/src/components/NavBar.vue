<template>
    <div class="navbar">
      <router-link to="/">首页</router-link>
      <router-link to="/events">赛事</router-link>
      <router-link to="/gameplay">玩法</router-link>
      <router-link to="/car-management">赛车管理系统</router-link>
    </div>
  </template>
  
  <style>
  .navbar {
    background-color: #333;
    color: white;
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
  }
  .navbar a {
    text-decoration: none;
    color: white;
  }
  </style>