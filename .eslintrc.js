module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
      //设置"script"（默认）或"module"如果你的代码是在ECMAScript中的模块。
      sourceType: 'module'
    },
    env: {
      browser: true,
    },
    extends: [
        "prettier", 
        'plugin:vue/recommended'
    ],
    // required to lint *.vue files
    plugins: [
      'prettier'
    ],
    // add your custom rules here
    'rules': {
      // allow async-await
      'generator-star-spacing': 0,
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
      "no-unused-vars": [2, { 
        // 允许声明未使用变量
        "vars": "local",
        // 参数不检查
        "args": "none" 
      }],
      // 关闭语句强制分号结尾
      "semi": [0],
    }
  }