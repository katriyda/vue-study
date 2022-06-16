<template>
    <span>BBBBBBBBBBBBBBBBBBBBB</span>
    <slot name="AC"></slot>
    <div >
        <!-- 传递给父级元素 -->
        <slot v-for="(item, index) in datae" :datae="item" :Key="item.name" :index="index"></slot>
    </div>

</template>

<script lang="ts" setup>
import { reactive } from 'vue'

type Tabs = {
    name: string,
    comName: any
}
const datae = reactive<Tabs[]>([
    {
        name: 'A组件',
        //使用markRaw避免造成不必要的开销
        comName: 'markRaw(A)'
    },
    {
        name: 'B组件',
        comName: 'markRaw(B)'
    },
    {
        name: 'C组件',
        comName: 'markRaw(C)'
    }
])
</script>
