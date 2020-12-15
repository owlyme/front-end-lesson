export default function({ types: t }) {
  // plugin contents
  console.log("plugin")
  return {
    visitor: {
      // visitor contents
      Identifier(path) {
        console.log("**************", path, '\n')
        console.log("Visiting: " + path.node.name);
      },
      // ASTNodeTypeHere(path, state) {},
      BinaryExpression(path) {
        // ...
        console.log(path)
        if (path.node.operator !== "===") {
          return;
        }

        path.node.left = t.identifier("sebmck");
        path.node.right = t.identifier("dork");
      }
    }
  };
}