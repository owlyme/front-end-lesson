## 代码风格
1. 团队需要规矩









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
