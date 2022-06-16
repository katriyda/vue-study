<template>
    <h1>商品</h1>
    <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>数量</th>
                <th>价格</th>
                <th>删除</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="item.name" v-for="(item, index) in data">
                <td>{{ item.name }}</td>
                <td>
                    <button @click="AddAnbSub(item, false)">-</button>
                    {{ item.num < 10 ? '&nbsp;&nbsp;' + item.num : item.num }} <button @click="AddAnbSub(item, true)">
                        +</button>
                </td>
                <td>{{ item.num * item.price }}</td>
                <td><button @click="del(index)">删除</button></td>
            </tr>
        </tbody>
    </table>
    <h3>总价：{{ sumPrice }}</h3>
</template>
<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
type Shop = {
    name: string,
    num: number,
    price: number
}
//数据
const data = reactive<Shop[]>([
    {
        name: '衣服',
        num: 1,
        price: 500
    },
    {
        name: '裤子',
        num: 1,
        price: 300
    },
    {
        name: '鞋子',
        num: 1,
        price: 900
    },
    {
        name: '帽子',
        num: 1,
        price: 100
    },
])
//加减数量函数
const AddAnbSub = (item: Shop, type: boolean = false): void => {
    if (type && item.num < 99) {
        item.num++
    } else if (item.num > 0) {
        item.num--
    }
}
//计算属性
const sumPrice = computed<number>(() => {
    return data.reduce((prev, next) => {
        return prev + (next.num * next.price)
    }, 0)
})
//删除函数
const del = (index: number): void => {
    data.splice(index, 1)
}

</script>

<style>
h1 {
    text-align: center;
}

h3 {
    text-align: end;
}

table,
table tr th,
table tr td {
    border: .2rem solid black;
}

table {
    width: 100%;
    min-height: 25px;
    line-height: 25px;
    text-align: center;
    border-collapse: collapse;
    text-align: center;
}

td,
th {
    width: 25%;
}
</style>