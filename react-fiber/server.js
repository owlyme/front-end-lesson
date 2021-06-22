import express from "express"

const app = express();


const template = `
<html>
  <title>fiber</title>
  <body>
    <div id="root">

    </div>
  </body>
  <script src="bundle.js"></script>
</html>
`
app.use(express.static('dist'))
app.get("*", (req, res) =>
    res.send(template)
)

app.listen("3000", () => {
    console.log('server start 3000')
})