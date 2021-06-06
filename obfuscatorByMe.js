"use strict"
var fs = require('fs');
const { type } = require('os');


var array=[ ];
const numbers ='0123456789';
/*function numberToExp(list){
    var n = list.indexOf("*");
    console.log(n);
    for(let i=0;i<10000;i++){     
    var num =i; 
    var str=num.toString();
    var res = list.replace(str, num.toString(16));    
    list = res; 
    }
    return list;
}
*/
function changeVar(res){
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const regex = new RegExp(/var/g);
    let array1;
    let newVal = ' ';
    const charactersLength = Math.floor(Math.random() * 1000);  

    while ((array1 = regex.exec(res)) !== null) { 
      var b = regex.lastIndex;
      var k = res.charAt(b+1); 
      console.log(k);
      array.push(k);
      //var d = res.replace(" "+k, " xox"); 
      //res =d;
      //console.log(d);
    }
    console.log(array);
    for(let i =0;i<array.length;i++){
        for ( let i = 0; i < charactersLength; i++ ) {
            newVal += characters.charAt(Math.floor(Math.random() * charactersLength));
       } 
        var m =" "+ array[i];
        const globalRegex = new RegExp(m, 'g');

        var g = res.replace(globalRegex,newVal);
        res=g;
        console.log(g);
    }
    return res;
    
}
function deadCode() {
    const characters ='ABCDEF_*GHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = Math.floor(Math.random() * 1000);  
    for ( let i = 0; i < charactersLength; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    result='//'+result;
    array.push(result);
    return array;
}


 
fs.readFile("./sample1.js","UTF-8",function(err,Data){
    if (err){
        return console.log(err);
    }
    var result = Data.toString().replace(/^\s+|\s+$/gm,'');

    console.log("file is saved");
    var res = result.concat(deadCode(result));
     var re = changeVar(res);
     fs.writeFile('./ObfuscatedSample.js',re,function(err){
        if (err){
            return console.log(err);
        }
                
});
});
