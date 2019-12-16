/*
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-06 15:39:44
 * @LastEditors: your name
 * @LastEditTime: 2019-12-14 14:55:49
 */
module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    "plugins": [
        [
            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            }
        ]
    ]
}