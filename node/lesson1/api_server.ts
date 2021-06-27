import express from "express";
import { DataStore} from "./data"
const app = express();

app.get("/", (req, res) => {
  // res.end("32342s")
  res.json(DataStore.list)
})

app.listen(8080, () => {
  console.log('server running...')
})