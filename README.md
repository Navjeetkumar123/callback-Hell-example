Two examples are there to demonstrate the callback chainig.

1.1.Weather-App.
  -In app.js callback chaining has been used. First callback is to find all the address data.
  -In second callback longitude nad latitude has been derived from the data obtained from first callback
  -This second callback is used to predict weather forecast using logitude and latitude.
  -To run the application:
    -npm install
    -node app.js
2.2.File Operation:
   - This is the simple demostration of callback chaining where sometimes while working with file, the data in the file needs to read
      first if we want to write or update data in the file.
     - Sometimes we nned to read the file first for doing other file operations. I have taken example of write file here.
     - There are two file
        1. readWriteFile.js: 
            This is the example of callback-hell
        2. read-write-promise.js
            This is the solution for callback-hell using promises in node.js.
      Run both the files one by one and you can see the same result.
      To Run: node <filename>.js
      Note: There is a file name test.txt, after running the node command you can open the file and see the changes will appear.
