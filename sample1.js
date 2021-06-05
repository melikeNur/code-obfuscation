var a = 'word';
var b = true;
var c = true;
var d = 0;
var e = 32;
var f = 3;
var g = null;
var m = e * f;


console.log( a || b); 
console.log( c || a); 
console.log( b || a); 
console.log( e || f); 
console.log( f || e); 
console.log( d || g); 
console.log( g || d); 
console.log( a && c); 
console.log( c && a);
console.log( m ); 