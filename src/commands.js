/*
 * @Descripttion :
 * @version      : v1.0
 * @Author       : 段雄飞
 * @Date         : 2021-11-22 15:31:41
 * @LastEditors  : 段雄飞
 * @LastEditTime : 2021-11-22 20:37:31
 */
const create = require('./create')

const mapActions = {
    create: {
        alias: 'c',
        description: '创建一个项目',
        examples: ['GJ-cli create <project-name>'],
        action: () => {
            const projectName = process.argv.slice(3)
            console.log(`您正在创建项目${projectName}`.info)
            create(projectName)
        },
    },
    '*': {
        alias: '',
        description: 'command not found',
        examples: [],
        action: () => {
            console.log('该命令找不到'.error)
        },
    },
}

module.exports = {
    mapActions,
}
