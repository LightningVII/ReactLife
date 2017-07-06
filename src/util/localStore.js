// var paths = require('../..//paths');
// var getClientEnvironment = require('./env');
// var publicPath = paths.servedPath;
// var publicUrl = publicPath.slice(0, -1);
// var env = getClientEnvironment(publicUrl);
// console.log(env)


export default {
    getItem: function(key) {
        let value
        try {
            value = localStorage.getItem(key)
        } catch (ex) {
            // 开发环境下提示error
            // if (__DEV__) {
            console.error('localStorage.getItem报错, ', ex.message)
                // }
        } finally {
            return value
        }
    },
    setItem: function(key, value) {
        try {
            // ios safari 无痕模式下，直接使用 localStorage.setItem 会报错
            localStorage.setItem(key, value)
        } catch (ex) {
            // 开发环境下提示 error
            // if (__DEV__) {
            console.error('localStorage.setItem报错, ', ex.message)
                // }
        }
    }
}