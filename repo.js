const path = require('path')


exports.home = (req,res)=>{
    res.sendFile(path.join(__dirname,'webpage','index.html'))
}

exports.about=(req,res)=>{
    res.sendFile(path.join(__dirname,'webpage','about.html'))
}

exports.NewHtml=(req,res)=>{
    res.sendFile(path.join(__dirname,'webpage','new.html'))
}

exports.OldRedirectNewHtml=(req,res)=>{
    res.redirect('/new.html')
}

exports.Notfound=(req,res)=>{
    res.status(401).sendFile(path.join(__dirname,'webpage','404.html'))
}
