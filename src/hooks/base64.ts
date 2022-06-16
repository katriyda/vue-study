import { onMounted } from 'vue'
type Options = {
    el: string
}
const base64 = (el: HTMLImageElement) => {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    canvas.width = el.width
    canvas.height = el.height
    ctx?.drawImage(el, 0, 0, el.width, el.height)
    return canvas.toDataURL('image/png')
}
export default function (options: Options): Promise<{ base64: string }> {
    return new Promise((resolve) => {
        //onMounted Dom挂载完毕  生命周期
        onMounted(() => {
            let img: HTMLImageElement = document.querySelector(options.el) as HTMLImageElement
            img.addEventListener("load", () => {
                resolve({
                    base64: base64(img)
                })
            })
        })
    })
}