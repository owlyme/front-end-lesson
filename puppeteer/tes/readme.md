## 任务
1. 将 markdown 文件生成 图片

## node modules
1. 读取文件 fs fs-extra
    - 注意路径 是命令所在的路径
    - 判断当前文件是否存在
2. 将 markdown 转换成 html  marked
3. 借用无头浏览器渲染 marked
4. 调用puppeteer 的 api 生成图片
5. 将图片保存
    - 注意路径 是命令所在的路径
