

// Reading & writing of a file

var fs = require('fs');

// read a file;

// fs.readFileSync("File_Name", "Char-encoding");
// var readMe = fs.readFileSync("home.txt", 'utf8');
// console.log(readMe);

// write a file

// fs.writeFileSync("FileNAme", "data");
// fs.writeFileSync("index.txt", readMe);
//  Asynchronous Versions of reading and writing the File.

// const data = fs.readFile("Filename","char-encod",callback())
// fs.readFile("home.txt","utf8",function(err,data){
//     console.log(data);
//     fs.writeFile("newfl.txt",data,()=>{
//         console.log("file created with the data");
//     });
// })

// console.log("hello Node");

// create a directory
// fs.mkdir("stuff",(err)=>{
//     if(err){
//     console.log(err)
//     }else{
//         console.log("directory created")
//     }
// });


fs.rmdir("index.txt",(err)=>{
    if(err){
    console.log(err)
    }else{
        console.log("directory removed")
    }
});


// Assignment: Remove a non-empty directory



