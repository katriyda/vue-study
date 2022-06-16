<template>
    <div class="card">
        <div class="card-header">
            <h2>{{ title }}</h2>
        </div>
        <div v-if="content" class="card-content">
            {{ content }}
        </div>
    </div>
</template>
<script setup lang="ts">
type Props = {
    title?: string,
    content?: string,
}
defineProps<Props>()

</script>
<script lang="ts">
export default {
    name: "Card"
}
</script>
<style scoped lang="less">
//定义变量
@border: #ccc;

.card {
    //直接使用变量
    border: 1px solid @border;

    &-header {
        border-bottom: 1px solid @border;
    }

    &-content {
        padding: 10px;
    }
}
</style>