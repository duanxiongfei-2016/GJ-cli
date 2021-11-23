/*
 * @Descripttion :
 * @version      : v1.0
 * @Author       : 段雄飞
 * @Date         : 2021-11-22 21:41:14
 * @LastEditors  : 段雄飞
 * @LastEditTime : 2021-11-23 10:15:37
 */
const fs = require('fs')

class Utils {
    // 创建文件夹
    mkdirSync(dirName) {
        const path = `${process.cwd()}/${dirName}`
        const dirIsExist = this.dirIsExist(path)

        return new Promise((resolve, reject) => {
            fs.mkdirSync(path, (err) => {
                if (err) {
                    reject(err)
                }
                resolve(path)
            })
        })
    }

    // 判断文件夹是否存在
    dirIsExist(path) {
        return fs.existsSync(path)
    }

    // 判断文件夹是否为空文件夹
    dirIsEmpty(path) {
        fs.promises.readdir(`${process.cwd()}/asd`, (err, files) => {
            if (err) {
                console.log('readdir-err', JSON.stringify(err))
            } else if (files.length) {
                console.log('readdir-files', files)
            }
        })
    }

    // 获取用户的电脑根路径 mac/windows
    getUserPath() {
        return process.env[process.platform === 'darwin' ? 'HOME' : 'USERPROFILE']
    }
}

module.exports = new Utils()
