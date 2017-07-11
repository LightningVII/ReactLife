export function paramStr(obj) {
    let param = ""
    for (let [key, value] of Object.entries(obj)) {
        if (value != null) param += "&" + key + "=" + value
    }
    return param.replace("&", "?")
}