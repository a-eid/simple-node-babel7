import express from "express"
const PORT = 4000
const app = express()

app.get("/", (req, res) => {
  res.json({
    message: "success"
  })
})

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`)
})
