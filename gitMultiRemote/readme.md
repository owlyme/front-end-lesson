<!-- git@github.com:owlyme/front-end-lesson.git
git@github.com:owlyme/ls.git -->

## git同时连接多个远程仓库

### 添加仓库地址
1. git remote add <name> <addr>

### 移除已添加的仓库地址
1. git remote rm name  # 删除远程仓库
2. git remote rename origin release  # 修改仓库名

### 推送到对应仓库
1. git push <name> [branch]

### 拉取到对应仓库
1. git pull <name> [branch]

### 优化,同时提交到多个远程仓库
1. 打开代码仓库的本地版本库中的config文件，即/.git/config
2. vim .git/config,
``` sh
[remote "origin"]
        url = git@github.com:owlyme/front-end-lesson.git
        url = git@github.com:owlyme/ls.git
        fetch = +refs/heads/*:refs/remotes/origin/*
[branch "main"]
        remote = origin
        merge = refs/heads/master
[branch "master"]
        remote = origin
        merge = refs/heads/master
[remote "ls"]
        url = git@github.com:owlyme/ls.git
        fetch = +refs/heads/*:refs/remotes/ls/*

```
### 结束
