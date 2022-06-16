<template>
  <!-- 当标签使用组件就行了 -->
  <Zj1Vue></Zj1Vue>
  <button @click="flag = !flag">改变组件状态</button>
  <!-- 进行复用 -->
  <div>
    <!-- v-if可以销毁组件或者重新载入 -->
    <Zj1Vue v-if="flag"></Zj1Vue>
  </div>
</template>

<script setup lang="ts">
//vue3 直接就能用了 不用注册
import Zj1Vue from './components/Zj1.vue';
import { onMounted, ref } from 'vue'
let flag = ref(true)
</script>

<style>
</style>
