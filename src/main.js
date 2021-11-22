/*
 * @Descripttion :
 * @version      : v1.0
 * @Author       : 段雄飞
 * @Date         : 2021-11-22 14:17:50
 * @LastEditors  : 段雄飞
 * @LastEditTime : 2021-11-22 20:28:14
 */
const colors = require('colors')
const { program } = require('commander') // 解析用户参数
const { version } = require('./constants')
const { mapActions } = require('./commands')

colors.setTheme({
    tip: 'blue',
    info: 'green',
    warn: 'yellow',
    error: 'red',
})

Reflect.ownKeys(mapActions).forEach((item) => {
    program
        .command(item) // 配置命令的名字
        .alias(mapActions[item].alias) // 命令别名
        .description(mapActions[item].description) // 命令描述
        .action(mapActions[item].action)
})

// 监听用户的help事件
program.on('--help', () => {
    console.log('\nExamples:')
    Reflect.ownKeys(mapActions).forEach((item) => {
        mapActions[item].examples.forEach((example) => {
            console.log(`  ${example}`)
        })
    })
})

// 设置cli的版本号
program.version(version).parse(process.argv)
