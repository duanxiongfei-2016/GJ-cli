/*
 * @Descripttion :
 * @version      : v1.0
 * @Author       : 段雄飞
 * @Date         : 2021-11-22 19:52:45
 * @LastEditors  : 段雄飞
 * @LastEditTime : 2021-11-23 11:30:16
 */

// github接口文档： https://docs.github.com/cn/rest/reference/repos#list-organization-repositories

const axios = require('axios')
const { promisify } = require('util')
const { gitRepo } = require('../config')

const downloadGitRepo = promisify(require('download-git-repo'))
const ncp = promisify(require('ncp'))

module.exports = {
    // 获取github组织下面的仓库列表
    getReposList: async () => await axios.get(`${gitRepo}/orgs/GJ-cli/repos`),

    // 获取仓库Tag版本号列表
    getTagsList: (repo) => async () => await axios.get(`${gitRepo}/repos/GJ-cli/${repo}/tags`),

    // 下载指定仓库的版本号的模板代码到指定路径
    downloadTamplateCode: ({ repo, path, tag }) => async () => await downloadGitRepo(`GJ-cli/${repo}${tag ? `#${tag}` : ''}`, path),

    // 拷贝目录
    ncp: async ({ source, target }) => await ncp(source, target),

}
