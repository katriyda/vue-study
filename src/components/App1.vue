<template>
  <div v-if="flag" @click="f2">
    <!-- 阻止冒泡 @click有很多修饰符 绑定class 可以写条件表达式 -->
    <div @click.stop="f1" :class="['a', 'b', flag ? 'c' : 'd']">{{ message }}</div>
    <!-- 绑定arr -->
    <div v-text="message" v-bind:style="style"></div>
    <input type="text" v-model="message">
    <div>{{ message }}</div>
    <div>{{ message }}</div>
    <!-- 使用对象添加 -->
    <div :class="stc">
      class类
    </div>
    <!-- 循环 -->
    <div :key="item" v-for="item in Ary">遍历数组：{{ item }}</div>

  </div>
  <div v-else="flag">你</div>
  <button @click="c1">点击切换真假</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
//ref 使用了proxy 进行数据劫持 变成响应式的  定义类型使用泛型，联合类型 string和number
let message = ref<string | number>("Hello world!")
let flag: boolean = true
const f1 = () => {
  console.log('子点击事件');
}
const f2 = () => {
  console.log('父级元素点击')
}

type Style = {
  color: string,
  fontSize: string
}
const style: Style = {
  fontSize: '2rem',
  color: 'red'
}
type Stc = {
  a: boolean,
  d: boolean,
}
const stc: Stc = {
  a: true,
  d: false,
}
const c1 = () => {
  if (flag)
    flag = false
  else
    flag = true
}
const Ary: Array<number> = [123223, 5, 5, 1565, 45, 6, 1, 12, 32]
</script>

<style>
.a {
  background-color: aqua;
  height: 10vh;
}

.b {
  font-size: 2rem;
}

.c {
  color: black;
}

.d {
  color: blue;
}
</style>
