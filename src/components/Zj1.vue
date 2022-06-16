<template>
    <h1>组件1</h1>
    <p @click="count++">{{ count }}</p>
</template> 

<script setup lang="ts">
//组件生命周期 钩子函数
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, ref } from 'vue'
console.log('首先执行 Script');
//dom创建之前执行 onBeforeMount 没有dom 不能获取dom
onBeforeMount(() => {
    console.log('dom创建之前执行 ->', 'onBeforeMount');
    console.log('创建dom之前没有：', document.querySelectorAll('h1'))
})
//  组件渲染完成执行 onMounted 有dom 可以获取了
onMounted(() => {
    console.log('创建之后有了dom：', document.querySelectorAll('h1'))
})
let count = ref(0)
// 组件更新前 onBeforeUpdate
onBeforeUpdate(() => {
    console.log('onBeforeUpdate', '更新触发前')
})
// 组件更新后 onUpdated
onUpdated(() => {
    console.log('onUpdated', '更新触发后')
})
// 卸载之前 onBeforeUnmount
onBeforeUnmount(() => {
    console.log('onBeforeUnmount', '卸载之前');
})
// 卸载之后 onUnmounted
onUnmounted(() => {
    console.log('onUnmounted', '卸载之后');
})
</script>