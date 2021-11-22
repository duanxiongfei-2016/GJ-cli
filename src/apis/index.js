/*
 * @Descripttion :
 * @version      : v1.0
 * @Author       : 段雄飞
 * @Date         : 2021-11-22 19:52:45
 * @LastEditors  : 段雄飞
 * @LastEditTime : 2021-11-22 20:14:32
 */

// github接口文档： https://docs.github.com/cn/rest/reference/repos#list-organization-repositories

const axios = require('axios')
const { gitRepo } = require('../config')

module.exports = {
    // 获取github组织下面的仓库列表
    getReposList: async () => await axios.get(`${gitRepo}/orgs/GJ-cli/repos`),

    // 获取仓库Tag版本号列表
    getTagsList: (repoName) => async () => await axios.get(`${gitRepo}/repos/GJ-cli/${repoName}/tags`),

}
