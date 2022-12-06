const amount = 12
if (amount<9){
    console.log("small number")
}

else{
    console.log("large number")
}
console.log(`this is the first node application`)
//new shit under 
const names = require("./firstname")
console.log(names)
const data = require("./alternative")
const sayhello = require("./second")
sayhello(names.surename)
sayhello(names.name)
sayhello("Yash")
console.log(data)
require("./sum")
// os module under please find that shit below my dear
const os = require("os")
console.log(os.userInfo())
console.log(os.type())
console.log(os.release())
console.log(os.freemem())
console.log(os.totalmem())
//path module find the below
let path = require("path")
let jam = path.sep
let stupid  = path.join('/content','folding','test.txt')
let base = path.basename(stupid)
console.log(base)
console.log(stupid)

const absolute = path.resolve(__dirname,"content","folding","test.txt")
console.log(absolute)
// fs files are under 
const {readFileSync,writeFileSync} = require("fs")
const first = readFileSync('./content/first.txt')
const second = readFileSync('./content/folding/test.txt')
writeFileSync('./content/result.txt',`here is the result:${first} ${second}`,
{flag: 'a'})

// below is the code for the http 
const http  = require('http')
const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.end('welcome to this shit')
    }
    if(req.url === '/mad'){
        res.end("this is amazing")

    }
    res.end(`<h1>Oops! something went wrong</h1>,
    <a href="/">Go to  page</a>`)
})
server.listen(4000)