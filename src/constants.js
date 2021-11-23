/*
 * @Descripttion :
 * @version      : v1.0
 * @Author       : 段雄飞
 * @Date         : 2021-11-22 15:20:53
 * @LastEditors  : 段雄飞
 * @LastEditTime : 2021-11-23 10:48:05
 */
const { version } = require('../package.json')
const T = require('./utils')
const { downloadDirName } = require('./config')

const downloadDir = `${T.getUserPath()}/${downloadDirName}`

module.exports = {
    version,
    downloadDir,
}
