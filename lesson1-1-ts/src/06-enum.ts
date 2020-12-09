export {};

// 枚举
// 指定值
enum status1 {
  remove = 0,
  save = 1,
  edit = 2
}
const post1 = {
  status: status1.save
}
// 不指定时 默认为数字， 依据定义的顺序递增 ++
enum status {
  remove,
  save,
  edit
}
const post = {
  status: status.save
}
// 以上编译会生成 双向键值对

// 常量枚举
const enum status2 {
  remove,
  save,
  edit
}

const post2 = {
  status: status2.save
}