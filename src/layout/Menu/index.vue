<template>
    <div class="menu">
        <button @click="ctop">子组件传递参数到父组件</button>
        <button @click="ctop2">子组件传递参数到父组件二号</button>
        <Tree @on-click="getitem" :data="data"></Tree>
        <ul>
            <li :key="item.name" v-for="item in datat">
                <button @click="talget(item)">{{ item.name }}</button>
            </li>
        </ul>
        <component :is="current.comName">
            <template v-slot:AC>
                <span>你好</span>
            </template>
            <!-- 自定义插槽名字 -->
            <template #A>
                <span>A号</span>
            </template>
            <!-- 作用域插槽 简写#default -->
            <template v-slot="{ datae, index }">
                <div>{{ datae.name }} {{ index }}</div>
            </template>
        </component>
    </div>
</template>
<script setup lang="ts">
import { reactive, markRaw } from 'vue'
import Tree from '../../components/Tree/index.vue'
import A from '../Content/A.vue'
import B from '../Content/B.vue'
import C from '../Content/C.vue'
const list = reactive<number[]>([1, 2, 3, 4, 5, 6, 7])

//子组件传递参数到父组件 子元素传递需要通过事件传递
const emit = defineEmits(['on-click', 'on-click2'])
const ctop = () => {
    //传递给父级 父级使用on-click接收 ,后边写参数
    emit('on-click', list, true)
}
const ctop2 = () => {
    emit('on-click2', '传递了二号参数', {
        name: '小明',
        age: 19
    })
}
//递归组件
type Treelist = {
    name: string,
    icon?: string,
    children?: Treelist[] | []
}
const data = reactive<Treelist[]>([
    {
        name: 'no.1',
        children: [
            {
                name: 'no.1-1',
                children: [
                    {
                        name: 'no.1-1-1'
                    }
                ]
            }
        ]
    }, {
        name: 'no.2',
        children: [
            {
                name: 'no.2-1'
            }
        ]
    }, {
        name: 'no.3'
    }
])
const getitem = (item: Treelist): void => {
    console.log(item, '父组件');
}
//动态组件
type Tabs = {
    name: string,
    comName: any
}

const datat = reactive<Tabs[]>([
    {
        name: 'A组件',
        //使用markRaw避免造成不必要的开销
        comName: markRaw(A)
    },
    {
        name: 'B组件',
        comName: markRaw(B)
    },
    {
        name: 'C组件',
        comName: markRaw(C)
    }
])
//Pick 从类型定义的属性中，选取指定一组属性，返回一个新的类型定义。 ts泛型工具
type Com = Pick<Tabs, 'comName'>
let current = reactive<Com>({
    //设置默认的值
    comName: datat[0].comName
})
const talget = (item: Tabs) => {
    current.comName = item.comName
}
</script>
<style lang="less" scoped>
.menu {
    width: 10vw;
    border-right: 2px solid #ccc;
    text-align: center;
}
</style>