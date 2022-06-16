<template>
    <div>
        <button @click="updateV">子元素按钮切换</button>
        <div class="box" v-if="modelValue">
            <h1>{{ title }}</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
type Props = {
    modelValue: boolean,
    title: string,
    modelModifiers?: {
        test: boolean
    },
    titleModifiers?: {
        aaa: string
    }
}
const props = defineProps<Props>()
//双向绑定
const emit = defineEmits(['update:modelValue', 'update:title'])
const updateV = () => {
    emit('update:modelValue', !props.modelValue)
    emit('update:title', '三友')
    // console.log(props?.modelModifiers?.test);
    console.log(props.titleModifiers?.aaa);
}

</script>

<style lang="less" >
.box {
    background-color: aqua;
    width: 300px;
    height: 300px;
}
</style>