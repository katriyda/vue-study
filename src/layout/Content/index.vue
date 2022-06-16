<template>
    <div class="content">
        <button @click="switchCom">keep切换</button>
        <!-- 会保存状态 -->
        <keep-alive>
            <Login v-if="flag"></Login>
            <Reg v-else></Reg>
        </keep-alive>
        <!-- 动画 -->
        <button @click="switchCom">切换动画</button>
        <!-- 首次加载动画  appear -->
        <transition name="fade" appear appear-active-class="animate__animated animate__bounceIn">
            <div class="boxt box-color" v-if="flag"></div>
        </transition>
        <transition name="fade2" appear appear-from-class="from" appear-active-class="active" appear-to-class="to">
            <div class="boxt" v-if="flag"></div>
        </transition>
        <hr>
        <!-- <YiBu></YiBu> -->
        <!-- 异步加载 -->
        <Suspense>
            <!-- 两个插槽 -->
            <!-- default 用来放异步加载的组件 -->
            <template #default>
                <YiBu></YiBu>
            </template>
            <!-- fallback 用来放加载时的页面 -->
            <template #fallback>
                <div>
                    加载中...
                </div>
            </template>
        </Suspense>
        <p>
            父级元素传递的数组：{{ list }}
        </p>
        <div>
            <!-- 指定插入位置 -->
            <teleport to="body">
                <div>hello</div>
            </teleport>
        </div>
        <ul>
            <li class="content-item" :key="item" v-for="item in 100">
                <!-- 属性传递只能写字符串  变量数据需要用绑定传递 -->
                <Card :title="item.toString()" content="内容"></Card>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import Login from '../../components/Login/index.vue'
import Reg from '../../components/Register/index.vue'
import { defineAsyncComponent, ref } from 'vue'
import 'animate.css'
// import YiBu from './YiBu.vue'
//异步组件加载
const YiBu = defineAsyncComponent(() => import('./YiBu.vue'))
type Props = {
    list: number[]
}
const props = defineProps<Props>()
let li: number[] = [0]
defineExpose({
    //子组件暴露给父组件的数据
    props
})
let flag = ref<boolean>(true)
const switchCom = () => {
    flag.value = !flag.value
}

</script>
<style lang="less" scoped>
.content {
    flex: 1;
    margin: 10px;
    // 设置自适应滑动
    overflow: auto;

    &-item {
        padding: 10px;
        border: 1px solid #ccc;
    }
}

.boxt {
    width: 200px;
    height: 200px;
    background-color: red;
}

//显示动画
.fade-enter-from {
    width: 0;
    height: 0;
}

.fade-enter-active {
    //过渡曲线
    transition: all 0.5s ease;
}

// 一般可以不写
.fade-enter-to {
    // width: 200px;
    // height: 200px;
    // background-color: black;
}

//隐藏动画
.fade-leave-from {}

.fade-leave-active {
    //过渡曲线
    transition: all 0.5s ease;
}

.fade-leave-to {
    width: 0;
    height: 0;
}

.from {
    width: 0;
    height: 0;
}

.active {
    transition: all 0.5s ease;
}

.to {
    // width: 200px;
    // height: 200px;
}

.box-color{
    background-color: blue;
}
</style>