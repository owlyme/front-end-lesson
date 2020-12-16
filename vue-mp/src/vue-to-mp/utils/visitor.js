export default function({ types: t }) {
  let datasKey = [];
  let datasArrKey = []

  function setData(path) {
    let key = path.node.property.name;
    path.parentPath.replaceWith(
      t.expressionStatement(
        t.callExpression(
          t.identifier("this.setData"), [
            t.objectExpression([
              t.objectProperty(
                t.identifier(key),
                path.parentPath.node.right
              )
            ])
          ]
        )
      )
    );
  }

  function parseArray(path) {
    let key = path.node.property.name;
    path.parentPath.insertAfter(
      t.expressionStatement(
        t.callExpression(
          t.identifier("this.setData"), [
            t.objectExpression([
              t.objectProperty(
                t.identifier(key),
                t.identifier('this.data.' + key)
              )
            ])
          ]
        )
      )
    );
  }


  return {
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
        let datas = []
        path.traverse({
          BlockStatement(p) {
            //从 Data 中提取数据属性
            datas = p.node.body[0].argument.properties
            datas.forEach(item => {
              datasKey.push(item.key.name)
              if (item.value.type === 'ArrayExpression') {
                datasArrKey.push(item.key.name)
              }
            });
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
      // 含有this的表达式 并且包含data属性

      let name = path.node.property.name
      if (path.node.object.type === "ThisExpression" && datasKey.includes(name)) {
        path.get("object").replaceWithSourceString("this.data");
        //判断是不是赋值操作
        if (
          (t.isAssignmentExpression(path.parentPath) &&
            path.parentPath.get("left") === path) ||
          t.isUpdateExpression(path.parentPath)
        ) {
          setData(path)
        } else if (datasArrKey.includes(name)) {
          parseArray(path)
          return
        }
      }
      // 切换事件名$emit
      if (path.node.object.type === "ThisExpression" && name === "$emit") {
        path.node.property.name = "triggerEvent"
      }
    }
  };
}