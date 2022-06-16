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
            <tr>
                <td>验证码</td>
                <td><input v-model="from.code" type="text"></td>
            </tr>
        </table>
        <button @click="submit">注册</button>
    </div>
</template>

<script setup lang="ts">
import { reactive, onActivated, onDeactivated } from 'vue'
const from = reactive({
    login: "",
    psd: "",
    code: ""
})
const submit = () => {
    console.log(from)
}
// onActivated(()=>{
//     from.code = ''
// })
onDeactivated(() => {
    from.code = ''
})
</script>