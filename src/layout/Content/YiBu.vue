<!-- 异步加载组件 -->
<template>
    <div>
        <h1>异步组件</h1>
        <ul>
            <li v-for="item in list">
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { axioss } from './server';
//vue3 语法糖直接使用await 自定义函数需要
const list = await axioss('./data.json')
console.log(list)
</script>

