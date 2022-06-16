<template>
    <div class="header">
        <!-- 可以直接使用 -->
        {{ title }} <br />
        {{ props }}
    </div>
</template>
<script setup lang="ts">
//可以使用 ？ 代表有无
type Props = {
    title: string,
    def?: string[]
}
//由于setup 语法糖可以直接使用 defineProps 
// withDefaults写默认值 如果父组件没有传递数据 子元素就使用定义的默认值
const props = withDefaults(defineProps<Props>(), {
    def: () => ['默认值', '复杂数据类型需要函数返回一个数据']
})
</script>
<style lang="less" scoped>
.header {
    text-align: center;
    height: 10vh;
    border-bottom: 1px solid #ccc;
}
</style>