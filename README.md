# code-obfuscation
Obfuscation is done in software to make the codes less understandable.
#### Its purpose is security and privacy. 
#### The tools we call obfuscator are things that make the code we write more difficult to understand, that is, obfuscate.
#### In other words, the obfuscation process does not affect the functioning of the code, it only makes the code more misunderstandable.

 In this project, I obfuscated js codes with both a simple obfuscator [I made](https://github.com/melikeNur/code-obfuscation/blob/master/obfuscatorByMe.js) and a ready-made library called [javascript-obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator).(You can see how I use the ready library [here](https://github.com/melikeNur/code-obfuscation/blob/master/obfuscatorJs.js).) I ran the same sample code with both obfuscators. I got different but quite complex, hard to understand codes. I also obfuscated the js codes in the react project that I had created before with the help of javascript obfuscator. You can find the obfuscated version and the unobfuscated version in the relevant folder.[counter-app](https://github.com/melikeNur/code-obfuscation/tree/master/counter-app(obfuscatedMyReactApp))

#### 1.)obfuscatorByMe
 #####     function changeVar
  #####        This function makes variable names messy and very hard to read.
            //input
            var a = 'word';
            var b = true;
            var c = true;
            var d = 0;
            var e = 32;
            var f = 3;
            var g = null;
            var m = e * f;
             //Output
          var QR7wiUTBbzy2w7Gp2DDcY5JBfXpBtKtyQPFD1tk8jXZxKLEqCVD28Vi6lmyQHZLlBWecI6gXr4HdXuWUYPO0bDxOVBrH7YpDAXvJMZqNbwobwv7aDR = 'word';
          var QR7wiUTBbzy2w7Gp2DDcY5JBfXpBtKtyQPFD1tk8jXZxKLEqCVD28Vi6lmyQHZLlBWecI6gXr4HdXuWUYPO0bDxOVBrH7YpDAXvJMZqNbwobwv7aDRsXAeiYOdS1kEBCwuo8IYcRNTcYWF5G5p4Hk94bgYo61ricoXobxOk1mEFV = true;
          var QR7wiUTBbzy2w7Gp2DDcY5JBfXpBtKtyQPFD1tk8jXZxKLEqCVD28Vi6lmyQHZLlBWecI6gXr4HdXuWUYPO0bDxOVBrH7YpDAXvJMZqNbwobwv7aDRsXAeiYOdS1kEBCwuo8IYcRNTcYWF5G5p4Hk94bgYo61ricoXobxOk1mEFVoqduGQInCA7X1XoDpuayignOxtS3ooPY3y2rYAAy36QEv9NeRAc7vBJWORF0RAJcGijEStX93 = true;
          var QR7wiUTBbzy2w7Gp2DDcY5JBfXpBtKtyQPFD1tk8jXZxKLEqCVD28Vi6lmyQHZLlBWecI6gXr4HdXuWUYPO0bDxOVBrH7YpDAXvJMZqNbwobwv7aDRsXAeiYOdS1kEBCwuo8IYcRNTcYWF5G5p4Hk94bgYo61ricoXobxOk1mEFVoqduGQInCA7X1XoDpuayignOxtS3ooPY3y2rYAAy36QEv9NeRAc7vBJWORF0RAJcGijEStX93u7IcCxhwXhMn6lGMuURhk1ijxgNNC6bmhsZyxtwWsyjLLUkdT7MLUF0uuqxFBKq6HE3HbSIDmzBTfM = 0;
          var QR7wiUTBbzy2w7Gp2DDcY5JBfXpBtKtyQPFD1tk8jXZxKLEqCVD28Vi6lmyQHZLlBWecI6gXr4HdXuWUYPO0bDxOVBrH7YpDAXvJMZqNbwobwv7aDRsXAeiYOdS1kEBCwuo8IYcRNTcYWF5G5p4Hk94bgYo61ricoXobxOk1mEFVoqduGQInCA7X1XoDpuayignOxtS3ooPY3y2rYAAy36QEv9NeRAc7vBJWORF0RAJcGijEStX93u7IcCxhwXhMn6lGMuURhk1ijxgNNC6bmhsZyxtwWsyjLLUkdT7MLUF0uuqxFBKq6HE3HbSIDmzBTfMJ3YRee9OKmIEl3hoOjrESe40RpIlovCvy2170nTGB1iANy2SN3pX4lYmmhOmQnlaKTU = 32;
          var QR7wiUTBbzy2w7Gp2DDcY5JBfXpBtKtyQPFD1tk8jXZxKLEqCVD28Vi6lmyQHZLlBWecI6gXr4HdXuWUYPO0bDxOVBrH7YpDAXvJMZqNbwobwv7aDRsXAeiYOdS1kEBCwuo8IYcRNTcYWF5G5p4Hk94bgYo61ricoXobxOk1mEFVoqduGQInCA7X1XoDpuayignOxtS3ooPY3y2rYAAy36QEv9NeRAc7vBJWORF0RAJcGijEStX93u7IcCxhwXhMn6lGMuURhk1ijxgNNC6bmhsZyxtwWsyjLLUkdT7MLUF0uuqxFBKq6HE3HbSIDmzBTfMJ3YRee9OKmIEl3hoOjrESe40RpIlovCvy2170nTGB1iANy2SN3pX4lYmmhOmQnlaKTUqBxn8RvqwLv4wRIbKCkbO3NdirNepivngmksGd0ar3LdAsJNGT0C6P4awKztBlwJsGYEGe = 3;
          var QR7wiUTBbzy2w7Gp2DDcY5JBfXpBtKtyQPFD1tk8jXZxKLEqCVD28Vi6lmyQHZLlBWecI6gXr4HdXuWUYPO0bDxOVBrH7YpDAXvJMZqNbwobwv7aDRsXAeiYOdS1kEBCwuo8IYcRNTcYWF5G5p4Hk94bgYo61ricoXobxOk1mEFVoqduGQInCA7X1XoDpuayignOxtS3ooPY3y2rYAAy36QEv9NeRAc7vBJWORF0RAJcGijEStX93u7IcCxhwXhMn6lGMuURhk1ijxgNNC6bmhsZyxtwWsyjLLUkdT7MLUF0uuqxFBKq6HE3HbSIDmzBTfMJ3YRee9OKmIEl3hoOjrESe40RpIlovCvy2170nTGB1iANy2SN3pX4lYmmhOmQnlaKTUqBxn8RvqwLv4wRIbKCkbO3NdirNepivngmksGd0ar3LdAsJNGT0C6P4awKztBlwJsGYEGeJoiEVFY9Jk9tvJH9ioTkbEaZ3rb3V6rJ7nKFNpU9AFn1l6t0ve9Z76C0XVHSq2hC9qTnA = null;
          var QR7wiUTBbzy2w7Gp2DDcY5JBfXpBtKtyQPFD1tk8jXZxKLEqCVD28Vi6lmyQHZLlBWecI6gXr4HdXuWUYPO0bDxOVBrH7YpDAXvJMZqNbwobwv7aDRsXAeiYOdS1kEBCwuo8IYcRNTcYWF5G5p4Hk94bgYo61ricoXobxOk1mEFVoqduGQInCA7X1XoDpuayignOxtS3ooPY3y2rYAAy36QEv9NeRAc7vBJWORF0RAJcGijEStX93u7IcCxhwXhMn6lGMuURhk1ijxgNNC6bmhsZyxtwWsyjLLUkdT7MLUF0uuqxFBKq6HE3HbSIDmzBTfMJ3YRee9OKmIEl3hoOjrESe40RpIlovCvy2170nTGB1iANy2SN3pX4lYmmhOmQnlaKTUqBxn8RvqwLv4wRIbKCkbO3NdirNepivngmksGd0ar3LdAsJNGT0C6P4awKztBlwJsGYEGeJoiEVFY9Jk9tvJH9ioTkbEaZ3rb3V6rJ7nKFNpU9AFn1l6t0ve9Z76C0XVHSq2hC9qTnAFqShiCsbm8dsOMBDOAe953XCXFeQMKDNxcNZUiAgvZdOpASkjMFBDaDqbnLwYb5XBgXG5pTLzJ = QR7wiUTBbzy2w7Gp2DDcY5JBfXpBtKtyQPFD1tk8jXZxKLEqCVD28Vi6lmyQHZLlBWecI6gXr4HdXuWUYPO0bDxOVBrH7YpDAXvJMZqNbwobwv7aDRsXAeiYOdS1kEBCwuo8IYcRNTcYWF5G5p4Hk94bgYo61ricoXobxOk1mEFVoqduGQInCA7X1XoDpuayignOxtS3ooPY3y2rYAAy36QEv9NeRAc7vBJWORF0RAJcGijEStX93u7IcCxhwXhMn6lGMuURhk1ijxgNNC6bmhsZyxtwWsyjLLUkdT7MLUF0uuqxFBKq6HE3HbSIDmzBTfMJ3YRee9OKmIEl3hoOjrESe40RpIlovCvy2170nTGB1iANy2SN3pX4lYmmhOmQnlaKTU * QR7wiUTBbzy2w7Gp2DDcY5JBfXpBtKtyQPFD1tk8jXZxKLEqCVD28Vi6lmyQHZLlBWecI6gXr4HdXuWUYPO0bDxOVBrH7YpDAXvJMZqNbwobwv7aDRsXAeiYOdS1kEBCwuo8IYcRNTcYWF5G5p4Hk94bgYo61ricoXobxOk1mEFVoqduGQInCA7X1XoDpuayignOxtS3ooPY3y2rYAAy36QEv9NeRAc7vBJWORF0RAJcGijEStX93u7IcCxhwXhMn6lGMuURhk1ijxgNNC6bmhsZyxtwWsyjLLUkdT7MLUF0uuqxFBKq6HE3HbSIDmzBTfMJ3YRee9OKmIEl3hoOjrESe40RpIlovCvy2170nTGB1iANy2SN3pX4lYmmhOmQnlaKTUqBxn8RvqwLv4wRIbKCkbO3NdirNepivngmksGd0ar3LdAsJNGT0C6P4awKztBlwJsGYEGe;   
      ```    
####    function singleLine  
####      It fits all the code in one line.
        input
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
        //output
        var a = 'word';var b = true;var c = true;var d = 0;var e = 32;var f = 3;var g = null;var m = e * f;console.log( a || b);console.log( c || a);console.log( b ||      a);console.log( e || f);console.log( f || e);console.log( d || g);console.log( g || d);console.log( a && c);console.log( c && a);console.log( m );
  ####    function deadCode
  ####      It adds random strings that have no meaning and function to the code.
        //Input
        var a = 'word';
        var b = true;
        var c = true;
        var d = 0;
        var e = 32;
        var f = 3;
        var g = null;
        var m = e * f;
        //Output
        var a = 'word';
        var b = true;
        var c = true;
        var d = 0;
        var e = 32;
        var f = 3;
        var g = null;
        var m = e * f;
        // Wijjm5Y1knz9oteMZ9NjtC1M6ykll_x3jDrAl02lxc4pjyz6vQTAgPLb7waLSs
###     Full example of obfuscatorByMe
          input
          var a = 'word';
          var b = true;
          var c = true;
          var d = 0;
          var e = 32;
          var f = 3;
          var g = null;
          var m = e * f;
           output
           var AOQ6PW0DAWtcbf0THQA7EvqrYHkzfjmyCOsGgbbVlmfIZJROzCOquomDkewu9sIA2kCqm5V4PSApqxiAEFmEjAHJPT29c38c5wpAe8OPEo = 'word';var AOQ6PW0DAWtcbf0THQA7EvqrYHkzfjmyCOsGgbbVlmfIZJROzCOquomDkewu9sIA2kCqm5V4PSApqxiAEFmEjAHJPT29c38c5wpAe8OPEoG6xv952vTu310p4wOqN5WkgB9twTYqprUfOOizwqkKqt1g0o3CeK = true;var AOQ6PW0DAWtcbf0THQA7EvqrYHkzfjmyCOsGgbbVlmfIZJROzCOquomDkewu9sIA2kCqm5V4PSApqxiAEFmEjAHJPT29c38c5wpAe8OPEoG6xv952vTu310p4wOqN5WkgB9twTYqprUfOOizwqkKqt1g0o3CeKgQnm7KrsYZWhsMpWVLFr9dlGs2sxPedVThUuG5P5B7RRZZ555yTcCkrweFIKkI = true;var AOQ6PW0DAWtcbf0THQA7EvqrYHkzfjmyCOsGgbbVlmfIZJROzCOquomDkewu9sIA2kCqm5V4PSApqxiAEFmEjAHJPT29c38c5wpAe8OPEoG6xv952vTu310p4wOqN5WkgB9twTYqprUfOOizwqkKqt1g0o3CeKgQnm7KrsYZWhsMpWVLFr9dlGs2sxPedVThUuG5P5B7RRZZ555yTcCkrweFIKkI6mQ0FQ4dTe6gWJLeaJXmL0HpQUO1p2rgjIU8txzLbWnHBQir3jaTdVXIC5Tyw7AX5M2q9h = 0;var AOQ6PW0DAWtcbf0THQA7EvqrYHkzfjmyCOsGgbbVlmfIZJROzCOquomDkewu9sIA2kCqm5V4PSApqxiAEFmEjAHJPT29c38c5wpAe8OPEoG6xv952vTu310p4wOqN5WkgB9twTYqprUfOOizwqkKqt1g0o3CeKgQnm7KrsYZWhsMpWVLFr9dlGs2sxPedVThUuG5P5B7RRZZ555yTcCkrweFIKkI6mQ0FQ4dTe6gWJLeaJXmL0HpQUO1p2rgjIU8txzLbWnHBQir3jaTdVXIC5Tyw7AX5M2q9haJPIh36ShRURTcGsOlDfJbtR13enpRi82Y1duBIYoTsCAli7zStTvGpyt0 = 32;var AOQ6PW0DAWtcbf0THQA7EvqrYHkzfjmyCOsGgbbVlmfIZJROzCOquomDkewu9sIA2kCqm5V4PSApqxiAEFmEjAHJPT29c38c5wpAe8OPEoG6xv952vTu310p4wOqN5WkgB9twTYqprUfOOizwqkKqt1g0o3CeKgQnm7KrsYZWhsMpWVLFr9dlGs2sxPedVThUuG5P5B7RRZZ555yTcCkrweFIKkI6mQ0FQ4dTe6gWJLeaJXmL0HpQUO1p2rgjIU8txzLbWnHBQir3jaTdVXIC5Tyw7AX5M2q9haJPIh36ShRURTcGsOlDfJbtR13enpRi82Y1duBIYoTsCAli7zStTvGpyt0dNEZEgAaKHeMC1GTGjfvYcrVmkcdAGMObZd2AIo8tILvGEq6FwQSLxAJ0f = 3;var AOQ6PW0DAWtcbf0THQA7EvqrYHkzfjmyCOsGgbbVlmfIZJROzCOquomDkewu9sIA2kCqm5V4PSApqxiAEFmEjAHJPT29c38c5wpAe8OPEoG6xv952vTu310p4wOqN5WkgB9twTYqprUfOOizwqkKqt1g0o3CeKgQnm7KrsYZWhsMpWVLFr9dlGs2sxPedVThUuG5P5B7RRZZ555yTcCkrweFIKkI6mQ0FQ4dTe6gWJLeaJXmL0HpQUO1p2rgjIU8txzLbWnHBQir3jaTdVXIC5Tyw7AX5M2q9haJPIh36ShRURTcGsOlDfJbtR13enpRi82Y1duBIYoTsCAli7zStTvGpyt0dNEZEgAaKHeMC1GTGjfvYcrVmkcdAGMObZd2AIo8tILvGEq6FwQSLxAJ0fsaYo9Lktd346ZBE0tesyJ1pnTgXUGgQTB4XEGDSwZbFmdvdQqjGdea2AJnU39NJ = null;var AOQ6PW0DAWtcbf0THQA7EvqrYHkzfjmyCOsGgbbVlmfIZJROzCOquomDkewu9sIA2kCqm5V4PSApqxiAEFmEjAHJPT29c38c5wpAe8OPEoG6xv952vTu310p4wOqN5WkgB9twTYqprUfOOizwqkKqt1g0o3CeKgQnm7KrsYZWhsMpWVLFr9dlGs2sxPedVThUuG5P5B7RRZZ555yTcCkrweFIKkI6mQ0FQ4dTe6gWJLeaJXmL0HpQUO1p2rgjIU8txzLbWnHBQir3jaTdVXIC5Tyw7AX5M2q9haJPIh36ShRURTcGsOlDfJbtR13enpRi82Y1duBIYoTsCAli7zStTvGpyt0dNEZEgAaKHeMC1GTGjfvYcrVmkcdAGMObZd2AIo8tILvGEq6FwQSLxAJ0fsaYo9Lktd346ZBE0tesyJ1pnTgXUGgQTB4XEGDSwZbFmdvdQqjGdea2AJnU39NJlLRIu3nlHZeqNVs5sF2GGLktzyUrch1kTN3MTh29JIVgizva2hWNIkI = AOQ6PW0DAWtcbf0THQA7EvqrYHkzfjmyCOsGgbbVlmfIZJROzCOquomDkewu9sIA2kCqm5V4PSApqxiAEFmEjAHJPT29c38c5wpAe8OPEoG6xv952vTu310p4wOqN5WkgB9twTYqprUfOOizwqkKqt1g0o3CeKgQnm7KrsYZWhsMpWVLFr9dlGs2sxPedVThUuG5P5B7RRZZ555yTcCkrweFIKkI6mQ0FQ4dTe6gWJLeaJXmL0HpQUO1p2rgjIU8txzLbWnHBQir3jaTdVXIC5Tyw7AX5M2q9haJPIh36ShRURTcGsOlDfJbtR13enpRi82Y1duBIYoTsCAli7zStTvGpyt0 * AOQ6PW0DAWtcbf0THQA7EvqrYHkzfjmyCOsGgbbVlmfIZJROzCOquomDkewu9sIA2kCqm5V4PSApqxiAEFmEjAHJPT29c38c5wpAe8OPEoG6xv952vTu310p4wOqN5WkgB9twTYqprUfOOizwqkKqt1g0o3CeKgQnm7KrsYZWhsMpWVLFr9dlGs2sxPedVThUuG5P5B7RRZZ555yTcCkrweFIKkI6mQ0FQ4dTe6gWJLeaJXmL0HpQUO1p2rgjIU8txzLbWnHBQir3jaTdVXIC5Tyw7AX5M2q9haJPIh36ShRURTcGsOlDfJbtR13enpRi82Y1duBIYoTsCAli7zStTvGpyt0dNEZEgAaKHeMC1GTGjfvYcrVmkcdAGMObZd2AIo8tILvGEq6FwQSLxAJ0f;// T8e2LtV8KAnf5kX1iVBaaLaxTiUoMOhqrf3pq9G4Pkc2yKYqOK9aBd
   ##The output of obfuscatorByMe by obfuscating is exactly the same as the original version.
           
