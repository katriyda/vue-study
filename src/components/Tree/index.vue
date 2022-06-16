<!-- 递归组件 -->
<template>
    <div>
        <ul style="padding-left: 1px;">
            <li :key="index" @click.stop="clickon(item)" v-for="(item, index) in data">
                <span> {{ item.name }}</span>
                <!-- 递归子元素传递数据到父级元素  -->
                <TreeItem @on-click="clickon" v-if="item?.children?.length" :data="item.children"></TreeItem>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import TreeItem from './index.vue'

type Treelist = {
    name: string,
    icon?: string,
    children?: Treelist[] | []
}
type Props = {
    data?: Treelist[]
}
defineProps<Props>()
const emit = defineEmits(['on-click'])
const clickon = (item: Treelist) => {
    // console.log('点击了：', item)
    emit('on-click', item)
}



</script>
<!-- <script lang="ts">
export default {
    name: 'TreeItem'
}
</script> -->
<style scoped lang="less">
ul {
    padding-left: 5px;
}
</style>