<template>
    <div>
        <button @click="flag = !flag">切换按钮{{ flag }}</button>
        <!-- 自定义 -->
        <Modelx v-model:title.aaa="aaa" v-model:title="title" v-model="flag" v-model.test="flag"></Modelx>
    </div>

</template>

<script setup lang="ts">
import Modelx from './Model1.vue'
import { ref } from 'vue'
let flag = ref<boolean>(true)
let title = ref<string>('山友')
let aaa = ref<string>('山友')
</script>
<style lang="less">
</style>