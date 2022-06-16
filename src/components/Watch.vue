<template>
    <input type="text" v-model="message.nav.bar.name">
    <button id="btn" @click="stop">停止监听</button>
</template>

<script setup lang = "ts">
import { ref, watch, reactive, watchEffect } from "vue"
let message = reactive({
    nav: {
        bar: {
            name: '夏雨'
        }
    }
})
//监听值的变化
watch(message, (newVal, oldVal) => {
    //对象的新旧值都一样
    console.log('新值：', newVal, '；旧值：', oldVal);
})
//高级监听 监听什么就直接用 非惰性 
const stop = watchEffect((oninvalidate) => {
    //因为有可能为空直接 断言 为 HTMLInputElement
    let ipt: HTMLInputElement = document.querySelector('#btn') as HTMLInputElement
    console.log('元素：', ipt)
    console.log('值', message.nav.bar.name)
    oninvalidate(() => {
        console.log('会首先执行的');
    })
}, {
    //配置项 dom加载完成就可以读取ipt
    flush: 'post'
})
</script>