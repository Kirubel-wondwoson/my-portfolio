const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

const PORT = process.env.PORT || 4000

const app = express()

app.listen(PORT, `Running on port ${PORT}`)