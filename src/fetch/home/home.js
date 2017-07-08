const paramStr = obj => {
    let param = ""
    for (let [key, value] of Object.entries(obj)) {
        if (value != null) param += "&" + key + "=" + value
    }
    return param.replace("&", "?")
}

export async function getListData(param, next) {
    try {
        const result = await fetch("/api/homeList" + paramStr(param));
        const data = await result.json()
        await next(data)
            // this.setState({ "data": data.result })
    } catch (err) {
        console.error('ES7 Async/products >>>', err);
    }
}

export async function getAdData(next) {
    try {
        const result = await fetch("/foo");
        const data = await result.json()
        await next(data)
            // this.setState({ "data": data.result })
            // return data
    } catch (err) {
        console.error('ES7 Async/products >>>', err);
    }
}