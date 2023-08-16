const { home, about, NewHtml, Notfound, OldRedirectNewHtml} = require("./repo");
const { app } = require("./route/route");


app.get('^/$|/home(.html)?',home)
app.get('/about(.html)?',about)
app.get('/new(.html)?',NewHtml)
app.get('/old',OldRedirectNewHtml)
app.get('/hello(.html)?',helloHtml=(req,res,next)=>{
    console.log("try to load hello.html")
    // res.send('hello')
    next()
},(req,res)=>{
    res.redirect('/home')
})
app.get('/*',Notfound)

app.listen(3000,()=>console.log("server started"))
