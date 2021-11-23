/*
 * @Descripttion :
 * @version      : v1.0
 * @Author       : 段雄飞
 * @Date         : 2021-11-22 15:06:29
 * @LastEditors  : 段雄飞
 * @LastEditTime : 2021-11-22 22:04:29
 */
module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 13,
    },
    rules: {

        indent: ['error', 4, { SwitchCase: 1 }],
        quotes: [
            'error',
            'single',
            {
                allowTemplateLiterals: true,
            },
        ],
        'no-tabs': 'off',
        'no-return-await': 'off',
        eqeqeq: [2, 'allow-null'], // 在进行比较时，必须使用全等=== 和完全不等!== 不能使用 == 和 !=
        semi: ['error', 'never'], // 不使用分号
        'no-trailing-spaces': 2, // 一行结束后面不要有空格
        'eol-last': 2, // 强制文件末尾至少保留一行空行
        'new-cap': 2, // 要求构造函数首字母大写
        'space-infix-ops': 2, // 字符串加号前后要空格
        'block-spacing': 2, // 单行代码块两边加空格
        'class-methods-use-this': 'off',
        // 注释风格要不要有空格什么的
        'spaced-comment': [
            'error',
            'always',
            {
                line: {
                    markers: ['/'],
                    exceptions: ['-', '+'],
                },
                block: {
                    markers: ['!'],
                    exceptions: ['*'],
                    balanced: true,
                },
            },
        ],
        'no-var': 2, // 禁止使用var 用let和const来代替
        // 'no-unused-vars': [2, { vars: 'all', args: 'after-used' }], // 不能有声明后未被使用的变量或参数
        'no-unused-vars': [2, { varsIgnorePattern: '.*', args: 'none' }], // 不能有声明后未被使用的变量或参数
        'key-spacing': [2, { beforeColon: false, afterColon: true }], // 对象字面量中冒号的前后空格
        // 'no-extra-parens': 2, // 禁止非必要的括号
        'arrow-spacing': 2, // => 的前后括号
        'comma-spacing': 2, // 逗号前后的空格
        'no-multi-spaces': 2, // 不能用多余的空格
    },
}
