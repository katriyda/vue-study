<!-- 简写自定义指令 函数形式 只有 update 和 unmount触发 -->
<template>
    <div>
        <input type="text" v-model="color">
        <div class="box" v-color="{ backgroundColor: color }">
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, Directive, DirectiveBinding } from 'vue'
let color = ref('red')
type Dir = {
    backgroundColor: string
}
const vColor: Directive = (el: HTMLElement, bingding: DirectiveBinding<Dir>) => {
    el.style.backgroundColor = bingding.value.backgroundColor
}
</script>
<style lang="less" scope>
.box {
    width: 300px;
    height: 300px;
}
</style>