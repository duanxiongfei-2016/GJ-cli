/*
 * @Descripttion : 创建项目
 * @version      : v1.0
 * @Author       : 段雄飞
 * @Date         : 2021-11-22 17:13:31
 * @LastEditors  : 段雄飞
 * @LastEditTime : 2021-11-22 21:07:49
 *
 */
const ora = require('ora')
const Inquirer = require('inquirer')
const { getReposList, getTagsList } = require('./apis')

// loading封装
const loadingFn = async (fn, loadingText = 'fetching...') => {
    const spinner = ora(loadingText)
    spinner.start()
    try {
        const { data } = await fn()
        spinner.succeed()
        return data
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
    console.log(`您选择的模板为:${repo}`.info)
    // 获取模板的tags版本号列表
    const repoTagsList = await loadingFn(getTagsList(repo), `正在获取 ${repo} 版本号中...`)
    // 获取用户选中的tag版本号
    const { tag } = await Inquirer.prompt({
        name: 'tag',
        type: 'list',
        message: '请选择版本号',
        choices: repoTagsList.map((item) => item.name),
    })

    console.log('选择的tag', tag)
}
