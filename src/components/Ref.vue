<template>
    <input type="text" v-model="text"><button @click="qh">点击切换</button>
    <p>
        <!-- 自动解包 -->
        {{ text }}
        {{ message }}
        {{ me }}
    </p>
</template>

<script setup lang="ts">
import { ref, Ref, isRef, shallowRef, triggerRef, customRef, reactive } from 'vue'
let text: Ref<string | number> = ref('你好')
let message = shallowRef({
    name: '你好'
})
//复杂数据类型绑定
let me = reactive({
    name: '夏宇',
    age: 20
})

//自定义ref
function MyRef<T>(value: T) {
    return customRef((trank, trigger) => {
        return {
            get() {
                trank()
                return value
            },
            set(newVal: T) {
                console.log('处理set');
                value = newVal
                trigger()
            }
        }
    })
}

let count: number = 0
const qh = () => {
    //ref返回的是一个对象
    text.value = count++
    console.log('是否是ref对象：' + isRef(text));
    console.log('是否是ref对象：' + isRef(text.value));
    //shallowRef只有value是响应式的 必须全改对象 可以节省性能
    message.value.name = '好你'
    //triggerRef手动强制刷新
    triggerRef(message)
    /* 使用更改value刷新
    message.value = {
        name: '好你'
    }
    */
    //reactive可以直接刷新
    me.age = count
}
</script>
    
