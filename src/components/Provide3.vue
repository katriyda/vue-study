<!-- 依赖注入 -->
<template>
    <div class="con3">
        <h1>我B组件</h1>
        <button @click="change">change data</button>
        <p>{{ data }}</p>
    </div>
</template>

<script setup lang="ts">
import { inject, Ref, ref } from 'vue'
//解决方案
let data = inject<Ref<boolean>>('flag', ref(false))
const change = () => {
    data.value = !data.value
}
</script>

<style lang="less">
.con3 {
    width: 200px;
    height: 200px;
    background-color: coral;
    color: #fff;
}
</style>
