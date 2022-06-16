<!-- 计算属性 -->
<template>
    <input type="text" v-model="a">
    <input type="text" v-model="b">
    <div>
        {{ a }}---{{ b }}
    </div>
    <div>
        计算属性：{{ com }}
    </div>
    <button @click="change">对象变化</button>
    <div>
        计算属性(对象监听)：{{ pcomputed }}
    </div>
</template>
<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
let a = ref('')
let b = ref('')
//使用计算属性 回调函数
const com = computed(() => {
    return a.value + '----' + b.value
})
interface Person {
    name: string;
    age: number;
}
const person: Person = reactive({
    name: '小明',
    age: 20,
})
let pcomputed = computed(() => {
    return person
})
const change = () => {
    person.age++
    console.log(person);
}

</script>