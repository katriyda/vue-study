<template>
    <div class="layout">
        <!-- 父级得到子级进行回调函数使用传递过来的参数 -->
        <Menu @on-click="getList" @on-click2="getVar"></Menu>
        <div class="layout-right">
            <Header title="父元素传递值到子元素"></Header>
            <!-- 属性只能传递字符串,传递复杂数据类型需要绑定。 拿到子元素的实例 ref -->
            <Content :list="list" ref="contents"></Content>
        </div>
    </div>
</template>
<script setup lang="ts">
import Header from './Header/index.vue'
import Content from './Content/index.vue'
import Menu from './Menu/index.vue'
import { reactive, ref } from 'vue';
// const list: number[] = reactive([1, 2, 3, 4, 5, 6, 7, 8])
const list: number[] = [1, 2, 3, 4, 5, 6, 7, 8]
//拿到子组件实例
const contents = ref(null)
//获取参数回调
const getList = (list: number[], flag: boolean): void => {
    console.log('父组件获取了子组件传递过来的参数：', list, flag)
}
//处理不存在的值用any
const getVar = (str: string, obj: any): void => {
    console.log(str, obj.name, obj.age)
    console.log(contents)
}


</script>
<!-- scoped 隔离css样式 -->
<style lang="less" scoped>
.layout {
    display: flex;
    height: 100vh;
    overflow: hidden;

    //less 自动拼接 子级
    &-right {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
}
</style>