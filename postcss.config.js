/**
 * PostCSS 配置⽂件
 */
module.exports = {
    // 配置要使⽤的 PostCSS 插件
    plugins: {
        // 配置使⽤ autoprefixer 插件
        // 作⽤：⽣成浏览器 CSS 样式规则前缀
        // VueCLI 内部已经配置了 autoprefixer 插件
        // 所以⼜配置了⼀次，所以产⽣冲突了
        // 'autoprefixer': { // autoprefixer 插件的配置
        // // 配置要兼容到的环境信息
        // browsers: ['Android >= 4.0', 'iOS >= 8']
        // },
        // 配置使⽤ postcss-pxtorem 插件
        // 作⽤：把 px 转为 rem
        'postcss-pxtorem': {
            rootValue({ file }) {
                return file.indexOf('vant') !== -1 ? 37.5 : 75
            },
            propList: ['*']
        }
    }
}