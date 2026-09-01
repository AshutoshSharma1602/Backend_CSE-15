// console.log("hello world");
// console.log("3 + 6 = " + (3 + 6));
// console.log("this is a simple js programm");
// console.log("goodbye!");
// console.error("this is an error");
// console.warn("this is a warning message");
// console.info("this is a information message");
// console.debug("this is a debug message ");
// console.log(process.platform);
// console.log(global.Lnumber);
// global.Lnumber = "51";
// console.log(global.Lnumber);
// process.on('exit',function(){})

// const{EventEmitter} = require('events');
// const eventEmitter = new EventEmitter();
// eventEmitter.on('lunch', () => {
//     console.log('good');
// });
// eventEmitter.emit('lunch');
// eventEmitter.emit('lunch');
// eventEmitter.emit('lunch');
// eventEmitter.emit('lunch');
// eventEmitter.emit('lunch');
// eventEmitter.emit('lunch');
// eventEmitter.emit('lunch');


// console.log("Atul kumar")

// const shyam = require("./index1");
// console.log("hello ",shyam)




const os = require("os");

console.log("Free Memory :", os.freemem());
console.log("Total Memory:", os.totalmem());
console.log("Platform    :", os.platform());
console.log("Architecture :",os.arch());
console.log("CPU Info : ",os.cpus());
console.log("Home Directory:",os.homedir());
console.log("Hostname: ",os.hostname());

// const fs=require("fs");
// fs.readFile("file.txt","utf-8",(err,data)=>{
//     console.log(err,data);
// });
// console.log("Finished reading file");



// const fs=require("fs");
// // cREATE 
// fs.writeFileSync("data.txt","Hello World");
// // Read
// console.log(fs.readFileSync("data.txt","utf-8"));
// //update
// fs.appendFileSync("data.txt","\nHello World 2");
// // read updated data
// console.log(fs.readFileSync("data.txt","utf-8"));

// fs.unlinkSync("data.txt");
// console.log("File deleted");

const fs=require("fs");
// cREATE 
fs.writeFileSync("index.txt","first file containing data of programm..");
// Read
console.log(fs.readFileSync("index.txt","utf-8"));
//update
fs.appendFileSync("data.txt","\nHello World 2");
// read updated data
console.log(fs.readFileSync("data.txt","utf-8"));

fs.unlinkSync("data.txt");
console.log("File deleted");