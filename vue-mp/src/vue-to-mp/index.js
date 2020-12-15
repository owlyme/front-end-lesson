const babel = require("@babel/core");
const t = require("@babel/types");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const fs = require('fs');
// const filename = "./demo.js";
const filename = "./vue.js";
const source = fs.readFileSync(filename, "utf8");
// https://www.jb51.net/article/173610.htm

// https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md
// 1. 拿到ast
let ast = babel.parse(source, {
    sourceType: "module",
    // plugins: ["flow"]
});

fs.writeFileSync('./ast.json', JSON.stringify(ast, null, 2))
    // 2. 转化对应的值

let datas = null
traverse(ast, {
    ExportDefaultDeclaration(path) {
        path.replaceWith(
            t.expressionStatement(
                t.callExpression( //创建名为 Compontents 的调用表达式，参数为 objectExpression
                    t.identifier("Compontents"), [
                        t.objectExpression(path.node.declaration.properties)
                    ]
                )
            )
        )
    },
    //Data 函数表达式 转换为 Object
    ObjectMethod(path) {
        if (path.node.key.name === "data") {
            // 获取第一级的 BlockStatement，也就是 Data 函数体

            path.traverse({
                BlockStatement(p) {
                    //从 Data 中提取数据属性
                    datas = p.node.body[0].argument.properties;
                }
            });
            //创建对象表达式
            const objectExpression = t.objectExpression(datas);
            //创建 Data 对象并赋值
            const dataProperty = t.objectProperty(
                t.identifier("data"),
                objectExpression
            );
            //插入到原 Data 函数下方
            path.insertAfter(dataProperty);
            //删除原 Data 函数节点
            path.remove();
        }
    },
    ObjectProperty(path) {
        // console.log(path)
        let key = path.node.key.name;
        switch (key) {
            case 'props':
                path.node.key.name = "properties"
                break;
            case 'default':
                path.node.key.name = "value"
                break;
        }
    },
    MemberExpression(path) {
        console.log(datas)
        let datasVals = datas.map((item, index) => {
            return item.key.name //拿到data属性中的第一级
        })
        if ( //含有this的表达式 并且包含data属性
            path.node.object.type === "ThisExpression" &&
            datasVals.includes(path.node.property.name)
        ) {
            path.get("object").replaceWithSourceString("this.data");
            //判断是不是赋值操作
            if (
                (t.isAssignmentExpression(path.parentPath) &&
                    path.parentPath.get("left") === path) ||
                t.isUpdateExpression(path.parentPath)
            ) {
                const expressionStatement = path.findParent(parent =>
                    parent.isExpressionStatement()
                );
            }
        }
    }
});


// 3. 生成新的代码
let newcode = generate(ast, {}, source)

fs.writeFileSync('./res.js', newcode.code)
    // console.log(newcode)