export async function getCityListData(next) {
    try {
        const result = await fetch("/api/cityList");
        const data = await result.json()
        await next(data)
    } catch (err) {
        console.error('ES7 Async/products >>>', err);
    }
}