import { ref } from "vue";

let v = ref<string>('')
let b = ref<boolean>(true)
let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const ck = () => {
    b.value = !b.value
}
type Props = {
    title: string
}

const renderDom = (props: Props) => {
    return (
        // 所有变量都是小括号
        <div>
            <h1>{props.title}</h1>
            <button onClick={ck}>切换</button>
            <input type="text" v-model={v.value} />
            <div>{v.value}</div>
            {b.value ? <div>你好</div> : ''}
            {
                list.map((item, index) => {
                    return <div key={index}>{item}</div>
                })
            }
        </div >
    )
}
export default renderDom    