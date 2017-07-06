export async function getListData(cityName, page, next) {
    try {
        const result = await fetch("/api/homeList?cityName=" + cityName + "&page=" + page);
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