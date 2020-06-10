let fs = require('fs')
let myFile = './test.txt'

const readWritePromise = new Promise((resolve,reject) => {
	const data = fs.readFileSync(myFile,'utf8')
	resolve(data)
})

readWritePromise.then((text) => {
	//console.log(text)
	text = text + '\r\nAppend something from promises.'
	fs.writeFileSync(myFile,text)
}).then(() => {
	console.log('text appended')
})
.catch((e) => {
	console.log(e)
})



