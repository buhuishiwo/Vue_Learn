<template>
  <div id="app">
    <h1>购物车</h1>
    <ListGoods></ListGoods>
  </div>
</template>

<script>
import ListGoods from "./components/ListGoods"

export default {
  name: 'App',
  data(){
    return {
      
    }
  },
  components: {
    ListGoods
  }
}
</script>

<style>
h1{
  text-align: center;
}
</style>


