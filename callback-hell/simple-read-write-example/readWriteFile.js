let fs = require('fs')
let myFile = './test.txt'

fs.readFile(myFile, 'utf8', function(err,text) {
	if(err) {
		return console.log(err)
	} else {
		text = text + '\nAppend something'
		fs.writeFile(myFile,text,function(err) {
			if(err) {
				return console.log(err)
			} else {
				console.log('text appended')
			}
		})
	}
})