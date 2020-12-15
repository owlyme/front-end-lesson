## [Babel](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)
## Babel是什么？
- Babel 是 js 编译器
- 将源代码通过 转换编辑器 生成新的代码

## 抽象语法树（ASTs）
- 在转化过程中将源码转换成 抽象语法树
- 由多个节点（node）构成
- node.type 代表节点类型

## Babel处理步骤
1. parse （解析）
    - 词法分析：把字符串形式的代码转换成 **令牌（tokens）** 流
    - 语法分析：把一个个令牌转换成AST
2. transform (转换)
    - 遍历AST
3. generate (生成)

## Visitor(访问者)
- 定义了用于在一个树状结构中获取具体节点的方法，它是一个对象
    ```
    const MyVisitor = {
      Identifier() {
        console.log("Called!");
      }
    };

    ```
- 使用
  1. 可以把方法名用|分割成Idenfifier |MemberExpression形式的字符串，把同一个函数应用到多种访问节点。
  2. 在访问者中使用别名(如babel-types定义).

## Paths(路径)
- Path是表示两个节点之间连接的对象
- 当有一个 Identifier() 成员方法的访问者时，你实际上是在访问路径而非节点。
- 尽可能做到无状态。

## State(状态)
- 好的处理方式是使用递归
```
const MyVisitor = {
  FunctionDeclaration(path) {
    const param = path.node.params[0];
    const paramName = param.name;
    param.name = "x";

    path.traverse(updateParamNameVisitor, { paramName });
  }
};
```

## Scopes (作用域)

## Bindings

## API
1. @babel/core
2. @babel/traverse
3. @babel/types
    - Definitions
    - Builders（构建器）
    - Validators（验证器）
        - t.isBinaryExpression(maybeBinaryExpressionNode);
4. @babel/generator
5. @babel/template
    ```
      const buildRequire = template(`
        var IMPORT_NAME = require(SOURCE);
      `);

      ast = buildRequire({
        IMPORT_NAME: t.identifier("myModule"),
        SOURCE: t.stringLiteral("my-module")
      });

      console.log(generate(ast).code);
    ```


## babel plugin

## 转换操作
1. 访问
    - 访问当前node 的属性
        - path.node.property
    - 访问当前属性的内部path
        - path.get('propertyName') 
        - path.get('body.0')
            - body 为数组， 0 为index
2. 检查节点的类型
    - t.isIdentifier(path.node.left)
      - t.isX: X 为node的type 值
    - t.isIdentifier(path.node.left, { name: "n" }))
      - 第二个参数是 属性名：值

3. 检查Path 类型
    - path.get('left').isIdentifier({name: 'n'})

4. 检查标识符是否被引用
    - path.isReferencedIdentifier()

5. 找到特定的父path
    - path.findParent(path => path.isObjectExpression())
    - 遍历当前节点
        - path.find((path) => path.isObjectExpression());
    - 最接近的父函数或程序
        - path.getFunctionParent();
    - 向上遍历语法树，直到找到在列表中的父节点路径
        - path.getStatementParent();

6. 获取同级路径
    - 使用path.inList来判断路径是否有同级节点，
    - 使用path.getSibling(index)来获得同级路径,
    - 使用 path.key获取路径所在容器的索引,
    - 使用 path.container获取路径的容器（包含所有同级节点的数组）
    - 使用 path.listKey获取容器的key
7. 停止遍历
    - return 
    - path.skip() 跳过遍历当前路径的子路径. 
    - path.stop() 完全停止遍历.
## 处理
1. 替换一个节点
    - path.replaceWith(node) 替换当前节点
2. 用多节点替换单节点
    - path.replaceWithMultiple([node])
3. 用字符串源码替换节点
    - path.replaceWithSourceString
4. 插入兄弟节点
    
8. 生成基本节点
    - string
      - t.stringLiteral("Is this the real life?")
    - number
      - t.numericLiteral(2)
