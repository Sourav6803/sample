const exprees = require('express')
const app = exprees();
const port = 3300;
app.use("/", (req,res)=>{
    res.send("hello world iam comimg")
})

app.listen(3300,()=>{
    console.log(`app listening on port ${port}`)
})