export default function({ types: t }) {
  return {
    Identifier(path) {
      console.log("Visiting: " + path.node.name);
    },

    BinaryExpression(path) {
      if (path.node.operator !== "===") {
        return;
      }

      // path.node.left = t.identifier("sebmck");
      // path.node.right = t.identifier("dork");

      path.replaceWith(
        t.binaryExpression('**', path.node.left, t.numericLiteral(2))
      )

    },

    // ReturnStatement(path) {
    //   path.replaceWithMultiple([
    //     t.expressionStatement(t.stringLiteral("Is this the real life?")),
    //     t.expressionStatement(t.stringLiteral("Is this just fantasy?")),
    //     t.expressionStatement(t.stringLiteral("(Enjoy singing the rest of the song in your head)")),
    //   ]);
    // },

    FunctionDeclaration(path) {
      // path.replaceWithSourceString(function add(a, b) { return a + b; });
      // path.insertBefore(t.stringLiteral("Because I'm easy come, easy go."));
      // path.insertAfter(t.expressionStatement(t.stringLiteral("A little high, little low.")));


      if (path.scope.hasBinding("n")) {
        // ...
        console.log("n")
      }

      if (path.scope.hasBinding("c")) {
        // ...
        console.log("a", path.node.type)
      }

      if (path.scope.hasOwnBinding("n")) {
        // ...
        console.log("ownn")
      }

    }
  };
}