/*
 * @Descripttion : 创建项目
 * @version      : v1.0
 * @Author       : 段雄飞
 * @Date         : 2021-11-22 17:13:31
 * @LastEditors  : 段雄飞
 * @LastEditTime : 2021-11-23 12:01:23
 *
 */
const ora = require('ora')
const Inquirer = require('inquirer')
const path = require('path')
const {
    getReposList, getTagsList, downloadTamplateCode, ncp,
} = require('./apis')
const { downloadDir } = require('./constants')

// loading封装
const loadingFn = async (fn, loadingText = 'fetching...') => {
    const spinner = ora(loadingText)
    spinner.start()
    try {
        const res = await fn()
        spinner.succeed()
        return res && res.data
    } catch (error) {
        spinner.succeed()
        console.log(`error:${error}`.error)
        return Promise.reject(error)
    }
}

module.exports = async (projectName) => {
    // 获取项目模板列表
    const reposNamesList = await loadingFn(getReposList, '正在获取模板中...')
    // 获取用户选中的模板
    const { repo } = await Inquirer.prompt({
        name: 'repo',
        type: 'list',
        message: '请选择模板',
        choices: reposNamesList.map((item) => item.name),
    })

    // 获取模板的tags版本号列表
    const repoTagsList = await loadingFn(getTagsList(repo), `正在获取 ${repo} 版本号中...`)
    // 获取用户选中的tag版本号
    const { tag } = await Inquirer.prompt({
        name: 'tag',
        type: 'list',
        message: '请选择版本号',
        choices: repoTagsList.map((item) => item.name),
    })

    // 下载模板到用户的根目录
    const targetPath = `${downloadDir}/${repo}`
    await loadingFn(downloadTamplateCode({
        repo,
        path: targetPath,
        tag,
    }), `正在下载 ${repo} 模板中...`)

    // 1. 简单的模板，直接拷贝
    // 拷贝模板代码到用户执行的目录中
    await ncp({
        source: targetPath,
        target: `${process.cwd()}/${projectName}`,
    })
    console.log('恭喜您，模板创建成功啦'.info)
    console.log(`cd ${projectName} \n yarn \n yarn start`.tip)

    // 2. 复杂的模板，用户选择编译模板
}
