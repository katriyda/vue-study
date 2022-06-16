import { createApp } from 'vue'
import App from './App.vue'
import Hello1 from './components/ref.vue'
import Computed from './components/Computed.vue'
import Shop from './components/Shop.vue'
import Watch from './components/Watch.vue'
import Card from './components/Card/index.vue'
//全局生效css
import './assets/css/reset.less'
//挂载   component('Card', Card)全局挂载 可以在如何地方使用
let app = createApp(App)

app.component('Card', Card)
//全局函数

type Filter = {
    format: <T>(str: T) => string
}
//声明
declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $filters: Filter,
        $con:string
    }
}
app.config.globalProperties.$filters = {
    format<T>(str: T): string {
        return `返回-${str}`
    }
}
app.config.globalProperties.$con = 'hello'
//引入elementui

app.mount('#app')
// createApp(Hello1).mount('#app2')
// createApp(Computed).mount('#app3')
// createApp(Shop).mount('#shop')
// createApp(Watch).mount('#watch')