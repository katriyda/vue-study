<template>
    <div>
        <input v-model="num.current" type="number" step="20">
        <div>
            <!-- 数字过渡 -->
            {{ num.tweenedNumber.toFixed(0) }}
        </div>
        <br />
        <button @click="random">random</button>
        <!-- 平移动画 过渡列表 -->
        <transition-group tag="div" class="wraps" move-class="movediv">
            <div class="item" v-for="item in list" :key="item.id">{{ item.number }}</div>
        </transition-group>

    </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import lodash from 'lodash'
import gsap from 'gsap'

let list = ref(Array.apply(null, { length: 81 } as Number[])
    .map((_, index) => {
        return {
            id: index,
            number: (index % 9) + 1
        }
    }))
const random = () => {
    list.value = lodash.shuffle(list.value)
}
const num = reactive({
    current: 0,
    tweenedNumber: 0
})
watch(() => num.current, (newVal, oldVal) => {
    gsap.to(num, {
        duration: 1,
        tweenedNumber: newVal
    })
})
</script>

<style lang="less">
.wraps {
    display: flex;
    flex-wrap: wrap;
    width: calc(50px * 10);

    .item {
        width: 50px;
        height: 50px;
        border: 1px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .movediv {
        transition: all .5s;
    }
}
</style>