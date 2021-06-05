var fs = require('fs');
var JavaScriptObfuscator = require('javascript-obfuscator');
fs.readFile("./sample1.js","UTF-8",function(err,Data){
    if (err){
        return console.log(err);
    }
    var obfuscationResult = JavaScriptObfuscator.obfuscate(Data,
        
    {
        compact: true,
        deadCodeInjection: false,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true,
        simplify: false,
        shuffleStringArray: true,
        splitStrings: true,
        stringArrayThreshold: 1
        
    });
    fs.writeFile('./obfuscatedWithJsObfuscator.js',obfuscationResult.getObfuscatedCode(),function(err){
    if (err){
        return console.log(err);
    }
    console.log("file is saved");

});
});