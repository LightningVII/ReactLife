import { paramStr } from '../util'

export async function getDetailData(param, next) {
    try {
        const result = await fetch("/api/detail" + paramStr(param));
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