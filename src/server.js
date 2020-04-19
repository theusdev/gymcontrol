const nunjunks = require("nunjucks")
const express = require("express")
const routes = require("./routes")
const methodOverride = require("method-override")

const server = express()

server.use(express.urlencoded({ extended: true}))
server.use(express.static("public"))
server.use(methodOverride("_method"))
server.use(routes)

server.set("view engine", "njk")

nunjunks.configure("src/app/views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.listen(5000, function () {
  console.log("server is running")
})
