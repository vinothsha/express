const express = require('express')
const path=require('path')
const app=express()

app.use(express.static('/home/vinoth/node/nodeapi/public'))

module.exports={app}