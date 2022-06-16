<template>
    <div v-move class="box">
        <div class="header"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, Directive, DirectiveBinding } from 'vue'
const vMove: Directive<any, void> = (el: HTMLElement, bingding: DirectiveBinding) => {
    let moveElement: HTMLDivElement = el.firstElementChild as HTMLDivElement
    console.log(moveElement)
    const mouseDown = (e: MouseEvent) => {
        console.log(e);
        el.style.left = e.clientX + 'px'
        el.style.top = e.clientY + 'px'
    }
    moveElement.addEventListener('mousedown', mouseDown)
}
</script>

<style lang="less" scoped>
.box {
    position: fixed;
    left: 50%;
    right: 50%;
    // transform: translate(50%, 50%);
    width: 200px;
    height: 200px;
    border: 3px solid #000;

    .header {
        height: 10%;
        background-color: #000;
        color: #fff;
        cursor: move;

    }
}
</style>