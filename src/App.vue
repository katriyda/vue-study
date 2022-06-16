<!-- 自定义插件 -->
<template>
  <!-- <layout></layout> -->
  <!-- <NumberBox></NumberBox> -->
  <!-- <Provide></Provide> -->
  <!-- <renderDom title="tsx语法"></renderDom> -->
  <!-- <Model></Model> -->
  <!-- <Diyvue></Diyvue> -->
  <!-- <MoveBox></MoveBox> -->
  <div>
    <img id="img" src="./assets/logo.png" alt="">
    {{ $filters.format('啊') }}
    {{ $filters.format($con) }}
    <div>
      <Table></Table>
    </div>
  </div>
</template>

<script setup lang="ts">
import layout from "./layout/index.vue"
import NumberBox from "./components/NumberBox.vue"
import Provide from './components/Provide.vue'
import renderDom from "./App";
import Model from "./components/Model.vue"
import Diyvue from './components/Diyvue.vue'
import MoveBox from './components/MoveBox.vue'
import useBase64 from './hooks/base64'
import Table from "./components/Table.vue"
useBase64({ 
  el: '#img'
}).then(then => {
  console.log(then.base64)
})

</script>

<style lang="less">
</style>

