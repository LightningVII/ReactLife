import { paramStr } from '../util'
export async function getListData (param, next) {
  try {
    const result = await fetch('/api/home/list' + paramStr(param))
    const data = await result.json()
    await next(data)
    // this.setState({ "data": data.result })
  } catch (err) {
    console.error('ES7 Async/products >>>', err)
  }
}

export async function getAdData (next) {
  try {
    const result = await fetch('/api/foo')
    const data = await result.json()
    await next(data)
    // this.setState({ "data": data.result })
    // return data
  } catch (err) {
    console.error('ES7 Async/products >>>', err)
  }
}
