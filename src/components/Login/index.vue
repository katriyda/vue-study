<template>
    <div>
        <table>
            <tr>
                <td>账号</td>
                <td><input v-model="from.login" type="text"></td>
            </tr>
            <tr>
                <td>密码</td>
                <td><input v-model="from.psd" type="password"></td>
            </tr>
        </table>
        <button @click="submit">登录</button>
    </div>
</template>

<script setup lang="ts">
import { reactive, onActivated, onDeactivated } from 'vue'
const from = reactive({
    login: "",
    psd: ""
})
const submit = () => {
    console.log(from)
}
onActivated(() => {
    console.log('onActivated生明周期触发')
})
onDeactivated(() => {
    console.log('onDeactivated','生命周期触发')
})
</script>