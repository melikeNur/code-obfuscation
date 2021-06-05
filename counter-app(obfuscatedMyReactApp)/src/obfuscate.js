var fs = require('fs');
var JavaScriptObfuscator = require('javascript-obfuscator');
fs.readFile("./App.js","UTF-8",function(err,Data){
    if (err){
        return console.log(err);
    }
    var obfuscationResult = JavaScriptObfuscator.obfuscate(Data,
        
    {
        reservedStrings: [
			'react',
            'navbar',
            'App.css'
		],
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
    fs.writeFile('./AppObfuscated.js',obfuscationResult.getObfuscatedCode(),function(err){
    if (err){
        return console.log(err);
    }
    console.log("file is saved");

});
});