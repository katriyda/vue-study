<!-- 依赖注入 -->
<template>
    <div class="con2">
        <h1>我A组件</h1>
    
        <p>读取到的值：{{ data }}</p>
        <B></B>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import B from './Provide3.vue'
let data = inject('flag')
</script>
<style lang="less">
.con2 {
    width: 260px;
    height: 260px;
    background-color: blue;
    color: #fff;
}
</style>
