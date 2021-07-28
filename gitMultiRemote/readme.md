<!-- git@github.com:owlyme/front-end-lesson.git
git@github.com:owlyme/ls.git -->

## git同时连接多个远程仓库

### 添加仓库
1. git remote add <name> <addr>

### 推送到对应仓库
1. git push <name> [branch]

### 推送到对应仓库
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
