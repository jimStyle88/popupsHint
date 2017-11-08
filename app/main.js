//main.js 
import '../pubilc/index.css';//使用require导入css文件
const greeter = require('./Greeter.js');
//import greeter from './Greeter.js'
//document.querySelector("#root").appendChild(greeter.popups());
document.querySelector("#root").appendChild(greeter())
