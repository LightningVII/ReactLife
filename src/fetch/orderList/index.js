import { paramStr } from '../util'

export async function getOrderList(param) {
    try {
        const result = await fetch("/api/orderList" + paramStr(param));
        return await result.json()
    } catch (err) {
        console.error('ES7 Async/products >>>', err);
    }
}