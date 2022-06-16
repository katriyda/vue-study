type NameList = {
    name: string
}

export const axioss = (url: string): Promise<NameList[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(url).then(response => response.json()).then(response => {
                resolve(response)
            })
        }, 5000)

    })
}