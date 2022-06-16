<!-- 依赖注入 -->
<template>
    <div class="con">
        <h1>我是根组件</h1>
        <A></A>
    </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import A from './Provide2.vue'
provide('flag', ref(false))

</script>     
<style lang="less">
.con {
    width: 300px;
    height: 300px;
    background-color: red;
    color: #fff;
}
</style>
