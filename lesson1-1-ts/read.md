### TypeScript
1. 用 ts编辑 代码 编译成 js
2. 包含， js， 类型系统， ES6+
3. 作为完整的编辑语言
4. vscode配置 settings -》 javascript.validate.enable
### 适用
1. 长期， 多人的大型项目

### 基本使用
1. npm install typescript --dev
2. 制定转换版本默认为 ECAM3 版本
    - 可以指定版本
3. 配置文件
    - yarn tsc --init
    - tsconfig.json
4. 数据类型
    - string // null NaN
    - number // null NaN
    - boolean // null NaN
    - void // null undefined
    - null
    - undefined
    - symbol
5. 中文提示选项
    - yarn tsc --local zh-cn
    - vscode中 settings - typescript local - zh-cn
6. 作用域问题
7. Object类型
    - 泛指
    - Array Object Function
    - let obj: {}
8. Array
9. 元祖类型 (tuple types)
10. 枚举 enum
    - 编译后会影响代码
11. 函数
    - 输入/参数
    - 输出/返回值
12. 任意类型 Any
13. 隐式类型推断
14. 类型断言
15. 接口 Interface
    - 约束一个对象的结构
    - 可选成员
    - 可读成员
    - 动态成员
16. Class
    - 所有属性要提前声明
    - 属性修饰符
        - public // 默认
        - private // 私有， 不可以被实例化引用
        - protected // 不可以被实例化引用， 可以在子类中使用 Property 'gender' is protected and only accessible within class 'Person' and its subclasses.
        - readonly
17. class 接口
    - wei class 定义接口
18. 抽象类
    - abstract
19. 泛型
    - 函数不确定的类型参数
    - 通常用<T> 将 T 作为参数传入
20. 类型声明
    - 针对第三方lib
    - 使用 declare 语句
