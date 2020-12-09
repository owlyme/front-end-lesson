export {}

interface Post {
  title: string
  content: string
  subtitle?: string // 可选成员
  readonly summary: string
  [key: string]: string
}

function printPost (post: Post) {
  console.log(post.title);
  console.log(post.content)
}

printPost({
  title: '1',
  content: 'hello',
  summary: 'aaa'
})


let postObj: Post = {
  title: '1',
  content: 'hello',

  summary: 'aaa'
}

// 只读成员不可写
// postObj.summary = 23213

// 动态成员
postObj.time = '2020'
// err
// printPost({
//   content: 'hello'
// })
// printPost({
//   title: '1',
//   content: 'hello',
//   next: '3e234'
// })