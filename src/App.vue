<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <RouterLink to="/trigger">触发js异常</RouterLink>
    </nav>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue' 

onMounted(() => {
  // let testNum = null;
  // if(testNum.length > 1) {
    // console.log("测试报错了");
  // }
})
</script>

<style>
nav {
  margin-bottom: 20px;
}

nav a {
  margin-right: 10px;
}
</style>