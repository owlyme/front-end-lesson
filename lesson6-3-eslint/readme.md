## 代码风格
1. 团队需要规矩


## eslint
1. 初始化
2. eslint --init
3. eslint filepath
## 注释
1. eslint-disable-line

## typescript
1. parser: "@typescript-eslint/parser",

## styleLint
1. 对css检查
2. cli 插件
3. 可以对sass. less ···
4. 初始化
    - install stylelint
    - .stylelintrc.js
    - extend
        - stylelint-config-standard

## prettier





## git hooks介绍
1. husky
  ```
  husky: {
    "hooks": {
      "pre-commit": "npm run lint"
    }
  }
  ```
2. lint-staged
  ```
  "lint-staged": {
    "*.js": [
      "eslint",
      "git add"
    ]
  }
  ```