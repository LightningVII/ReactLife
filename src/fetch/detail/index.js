import { paramStr } from '../util'

export async function getDetailData(param, next) {
    try {
        const result = await fetch("/api/detail" + paramStr(param));
        const data = await result.json()
        await next(data)
    } catch (err) {
        console.error('ES7 Async/products >>>', err);
    }
}

export async function getAdData(next) {
    try {
        const result = await fetch("/foo");
        const data = await result.json()
        await next(data)
    } catch (err) {
        console.error('ES7 Async/products >>>', err);
    }
}

export async function getCommentData(param, next) {
    try {
        const result = await fetch("/api/detail/comment/list" + paramStr(param));
        const data = await result.json()
        await next(data)
    } catch (err) {
        console.error('ES7 Async/products >>>', err);
    }
}