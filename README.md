# code-obfuscation
Obfuscation is done in software to make the codes less understandable.
#### Its purpose is security and privacy. 
#### The tools we call obfuscator are things that make the code we write more difficult to understand, that is, obfuscate.
#### In other words, the obfuscation process does not affect the functioning of the code, it only makes the code more misunderstandable.

 In this project, I obfuscated js codes with both a simple obfuscator [I made](https://github.com/melikeNur/code-obfuscation/blob/master/obfuscatorByMe.js) and a ready-made library called [javascript-obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator).(You can see how I use the ready library [here](https://github.com/melikeNur/code-obfuscation/blob/master/obfuscatorJs.js).) I ran the same sample code with both obfuscators. I got different but quite complex, hard to understand codes. I also obfuscated the js codes in the react project that I had created before with the help of javascript obfuscator. You can find the obfuscated version and the unobfuscated version in the relevant folder.[counter-app](https://github.com/melikeNur/code-obfuscation/tree/master/counter-app(obfuscatedMyReactApp))

### 1.)obfuscatorByMe
 #####     function changeVar
  ######        This function makes variable names messy and very hard to read.
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
######      It fits all the code in one line.
        //input
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
  ######      It adds random strings that have no meaning and function to the code.
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
          //input
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
           var MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBqu = 'word';var MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBquHelWi3LqLMUhMQnw60VdWbYXmLmPKXQDRKOKqD8Y8iTc1zEgV5REKBGcAn = true;var MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBquHelWi3LqLMUhMQnw60VdWbYXmLmPKXQDRKOKqD8Y8iTc1zEgV5REKBGcAnwNOQPQXxDF7xQ2YqkH6sBoTik4WnwawNCfGJuOYaTKIYVL1QGU8wOw8soXIZZVIZQFxFaA49hrWcr = true;var MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBquHelWi3LqLMUhMQnw60VdWbYXmLmPKXQDRKOKqD8Y8iTc1zEgV5REKBGcAnwNOQPQXxDF7xQ2YqkH6sBoTik4WnwawNCfGJuOYaTKIYVL1QGU8wOw8soXIZZVIZQFxFaA49hrWcr6vlDdzlaJExZQzLWG6TS4qi93dtPTiN1zaOwqySGdidhdpfqHM52frlasXEJLR = 0;var MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBquHelWi3LqLMUhMQnw60VdWbYXmLmPKXQDRKOKqD8Y8iTc1zEgV5REKBGcAnwNOQPQXxDF7xQ2YqkH6sBoTik4WnwawNCfGJuOYaTKIYVL1QGU8wOw8soXIZZVIZQFxFaA49hrWcr6vlDdzlaJExZQzLWG6TS4qi93dtPTiN1zaOwqySGdidhdpfqHM52frlasXEJLRVt2XeXHZ4ONf02X9knPNd5ifeWDZSxTSCFTlnnY2WGwfoejiTGiuS2TZAzSfv = 32;var MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBquHelWi3LqLMUhMQnw60VdWbYXmLmPKXQDRKOKqD8Y8iTc1zEgV5REKBGcAnwNOQPQXxDF7xQ2YqkH6sBoTik4WnwawNCfGJuOYaTKIYVL1QGU8wOw8soXIZZVIZQFxFaA49hrWcr6vlDdzlaJExZQzLWG6TS4qi93dtPTiN1zaOwqySGdidhdpfqHM52frlasXEJLRVt2XeXHZ4ONf02X9knPNd5ifeWDZSxTSCFTlnnY2WGwfoejiTGiuS2TZAzSfvZboWgohva1wQbkJYn8tfxJyos0WdvpuN29Xk8IDiheBNodcmOjEDze9lPF2LrAe = 3;var MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBquHelWi3LqLMUhMQnw60VdWbYXmLmPKXQDRKOKqD8Y8iTc1zEgV5REKBGcAnwNOQPQXxDF7xQ2YqkH6sBoTik4WnwawNCfGJuOYaTKIYVL1QGU8wOw8soXIZZVIZQFxFaA49hrWcr6vlDdzlaJExZQzLWG6TS4qi93dtPTiN1zaOwqySGdidhdpfqHM52frlasXEJLRVt2XeXHZ4ONf02X9knPNd5ifeWDZSxTSCFTlnnY2WGwfoejiTGiuS2TZAzSfvZboWgohva1wQbkJYn8tfxJyos0WdvpuN29Xk8IDiheBNodcmOjEDze9lPF2LrAe88Gar7JEB1i56ewmqe6ecK4BG0jZMWs3a4Va6ZlcBrZ5LOzYERWlpLZOVZPD0TaS2 = null;var MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBquHelWi3LqLMUhMQnw60VdWbYXmLmPKXQDRKOKqD8Y8iTc1zEgV5REKBGcAnwNOQPQXxDF7xQ2YqkH6sBoTik4WnwawNCfGJuOYaTKIYVL1QGU8wOw8soXIZZVIZQFxFaA49hrWcr6vlDdzlaJExZQzLWG6TS4qi93dtPTiN1zaOwqySGdidhdpfqHM52frlasXEJLRVt2XeXHZ4ONf02X9knPNd5ifeWDZSxTSCFTlnnY2WGwfoejiTGiuS2TZAzSfvZboWgohva1wQbkJYn8tfxJyos0WdvpuN29Xk8IDiheBNodcmOjEDze9lPF2LrAe88Gar7JEB1i56ewmqe6ecK4BG0jZMWs3a4Va6ZlcBrZ5LOzYERWlpLZOVZPD0TaS2Nh6F5jKloieJtB00qM4fk92q2r6JX8zXS4vnfMdSNDolgwqEi5t7xxMth0eQkYRbD = MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBquHelWi3LqLMUhMQnw60VdWbYXmLmPKXQDRKOKqD8Y8iTc1zEgV5REKBGcAnwNOQPQXxDF7xQ2YqkH6sBoTik4WnwawNCfGJuOYaTKIYVL1QGU8wOw8soXIZZVIZQFxFaA49hrWcr6vlDdzlaJExZQzLWG6TS4qi93dtPTiN1zaOwqySGdidhdpfqHM52frlasXEJLRVt2XeXHZ4ONf02X9knPNd5ifeWDZSxTSCFTlnnY2WGwfoejiTGiuS2TZAzSfv * MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBquHelWi3LqLMUhMQnw60VdWbYXmLmPKXQDRKOKqD8Y8iTc1zEgV5REKBGcAnwNOQPQXxDF7xQ2YqkH6sBoTik4WnwawNCfGJuOYaTKIYVL1QGU8wOw8soXIZZVIZQFxFaA49hrWcr6vlDdzlaJExZQzLWG6TS4qi93dtPTiN1zaOwqySGdidhdpfqHM52frlasXEJLRVt2XeXHZ4ONf02X9knPNd5ifeWDZSxTSCFTlnnY2WGwfoejiTGiuS2TZAzSfvZboWgohva1wQbkJYn8tfxJyos0WdvpuN29Xk8IDiheBNodcmOjEDze9lPF2LrAe;console.log( MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBqu || MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBquHelWi3LqLMUhMQnw60VdWbYXmLmPKXQDRKOKqD8Y8iTc1zEgV5REKBGcAn);console.log( MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBquHelWi3LqLMUhMQnw60VdWbYXmLmPKXQDRKOKqD8Y8iTc1zEgV5REKBGcAnwNOQPQXxDF7xQ2YqkH6sBoTik4WnwawNCfGJuOYaTKIYVL1QGU8wOw8soXIZZVIZQFxFaA49hrWcr || MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBqu);console.log( MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBquHelWi3LqLMUhMQnw60VdWbYXmLmPKXQDRKOKqD8Y8iTc1zEgV5REKBGcAn || MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBqu);console.log( MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBquHelWi3LqLMUhMQnw60VdWbYXmLmPKXQDRKOKqD8Y8iTc1zEgV5REKBGcAnwNOQPQXxDF7xQ2YqkH6sBoTik4WnwawNCfGJuOYaTKIYVL1QGU8wOw8soXIZZVIZQFxFaA49hrWcr6vlDdzlaJExZQzLWG6TS4qi93dtPTiN1zaOwqySGdidhdpfqHM52frlasXEJLRVt2XeXHZ4ONf02X9knPNd5ifeWDZSxTSCFTlnnY2WGwfoejiTGiuS2TZAzSfv || MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBquHelWi3LqLMUhMQnw60VdWbYXmLmPKXQDRKOKqD8Y8iTc1zEgV5REKBGcAnwNOQPQXxDF7xQ2YqkH6sBoTik4WnwawNCfGJuOYaTKIYVL1QGU8wOw8soXIZZVIZQFxFaA49hrWcr6vlDdzlaJExZQzLWG6TS4qi93dtPTiN1zaOwqySGdidhdpfqHM52frlasXEJLRVt2XeXHZ4ONf02X9knPNd5ifeWDZSxTSCFTlnnY2WGwfoejiTGiuS2TZAzSfvZboWgohva1wQbkJYn8tfxJyos0WdvpuN29Xk8IDiheBNodcmOjEDze9lPF2LrAe);console.log( MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBquHelWi3LqLMUhMQnw60VdWbYXmLmPKXQDRKOKqD8Y8iTc1zEgV5REKBGcAnwNOQPQXxDF7xQ2YqkH6sBoTik4WnwawNCfGJuOYaTKIYVL1QGU8wOw8soXIZZVIZQFxFaA49hrWcr6vlDdzlaJExZQzLWG6TS4qi93dtPTiN1zaOwqySGdidhdpfqHM52frlasXEJLRVt2XeXHZ4ONf02X9knPNd5ifeWDZSxTSCFTlnnY2WGwfoejiTGiuS2TZAzSfvZboWgohva1wQbkJYn8tfxJyos0WdvpuN29Xk8IDiheBNodcmOjEDze9lPF2LrAe || MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBquHelWi3LqLMUhMQnw60VdWbYXmLmPKXQDRKOKqD8Y8iTc1zEgV5REKBGcAnwNOQPQXxDF7xQ2YqkH6sBoTik4WnwawNCfGJuOYaTKIYVL1QGU8wOw8soXIZZVIZQFxFaA49hrWcr6vlDdzlaJExZQzLWG6TS4qi93dtPTiN1zaOwqySGdidhdpfqHM52frlasXEJLRVt2XeXHZ4ONf02X9knPNd5ifeWDZSxTSCFTlnnY2WGwfoejiTGiuS2TZAzSfv);console.log( MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBquHelWi3LqLMUhMQnw60VdWbYXmLmPKXQDRKOKqD8Y8iTc1zEgV5REKBGcAnwNOQPQXxDF7xQ2YqkH6sBoTik4WnwawNCfGJuOYaTKIYVL1QGU8wOw8soXIZZVIZQFxFaA49hrWcr6vlDdzlaJExZQzLWG6TS4qi93dtPTiN1zaOwqySGdidhdpfqHM52frlasXEJLR || MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBquHelWi3LqLMUhMQnw60VdWbYXmLmPKXQDRKOKqD8Y8iTc1zEgV5REKBGcAnwNOQPQXxDF7xQ2YqkH6sBoTik4WnwawNCfGJuOYaTKIYVL1QGU8wOw8soXIZZVIZQFxFaA49hrWcr6vlDdzlaJExZQzLWG6TS4qi93dtPTiN1zaOwqySGdidhdpfqHM52frlasXEJLRVt2XeXHZ4ONf02X9knPNd5ifeWDZSxTSCFTlnnY2WGwfoejiTGiuS2TZAzSfvZboWgohva1wQbkJYn8tfxJyos0WdvpuN29Xk8IDiheBNodcmOjEDze9lPF2LrAe88Gar7JEB1i56ewmqe6ecK4BG0jZMWs3a4Va6ZlcBrZ5LOzYERWlpLZOVZPD0TaS2);console.log( MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBquHelWi3LqLMUhMQnw60VdWbYXmLmPKXQDRKOKqD8Y8iTc1zEgV5REKBGcAnwNOQPQXxDF7xQ2YqkH6sBoTik4WnwawNCfGJuOYaTKIYVL1QGU8wOw8soXIZZVIZQFxFaA49hrWcr6vlDdzlaJExZQzLWG6TS4qi93dtPTiN1zaOwqySGdidhdpfqHM52frlasXEJLRVt2XeXHZ4ONf02X9knPNd5ifeWDZSxTSCFTlnnY2WGwfoejiTGiuS2TZAzSfvZboWgohva1wQbkJYn8tfxJyos0WdvpuN29Xk8IDiheBNodcmOjEDze9lPF2LrAe88Gar7JEB1i56ewmqe6ecK4BG0jZMWs3a4Va6ZlcBrZ5LOzYERWlpLZOVZPD0TaS2 || MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBquHelWi3LqLMUhMQnw60VdWbYXmLmPKXQDRKOKqD8Y8iTc1zEgV5REKBGcAnwNOQPQXxDF7xQ2YqkH6sBoTik4WnwawNCfGJuOYaTKIYVL1QGU8wOw8soXIZZVIZQFxFaA49hrWcr6vlDdzlaJExZQzLWG6TS4qi93dtPTiN1zaOwqySGdidhdpfqHM52frlasXEJLR);console.log( MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBqu && MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBquHelWi3LqLMUhMQnw60VdWbYXmLmPKXQDRKOKqD8Y8iTc1zEgV5REKBGcAnwNOQPQXxDF7xQ2YqkH6sBoTik4WnwawNCfGJuOYaTKIYVL1QGU8wOw8soXIZZVIZQFxFaA49hrWcr);console.log( MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBquHelWi3LqLMUhMQnw60VdWbYXmLmPKXQDRKOKqD8Y8iTc1zEgV5REKBGcAnwNOQPQXxDF7xQ2YqkH6sBoTik4WnwawNCfGJuOYaTKIYVL1QGU8wOw8soXIZZVIZQFxFaA49hrWcr && MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBqu);console.log( MezsJM3WlkxAtkZFgpsZ2iTrB9ChaU1Rk0OrTQ8qRbDDIsvhfXKb2HQeYSkF3r7jDk8suTNpM4cB0s46SeEnjOOiG73bENU7N0ZC6WvwBbP02nGAHO0eASEksjBquHelWi3LqLMUhMQnw60VdWbYXmLmPKXQDRKOKqD8Y8iTc1zEgV5REKBGcAnwNOQPQXxDF7xQ2YqkH6sBoTik4WnwawNCfGJuOYaTKIYVL1QGU8wOw8soXIZZVIZQFxFaA49hrWcr6vlDdzlaJExZQzLWG6TS4qi93dtPTiN1zaOwqySGdidhdpfqHM52frlasXEJLRVt2XeXHZ4ONf02X9knPNd5ifeWDZSxTSCFTlnnY2WGwfoejiTGiuS2TZAzSfvZboWgohva1wQbkJYn8tfxJyos0WdvpuN29Xk8IDiheBNodcmOjEDze9lPF2LrAe88Gar7JEB1i56ewmqe6ecK4BG0jZMWs3a4Va6ZlcBrZ5LOzYERWlpLZOVZPD0TaS2Nh6F5jKloieJtB00qM4fk92q2r6JX8zXS4vnfMdSNDolgwqEi5t7xxMth0eQkYRbD );// 65cmDfuUw2cGOQkei8to2UMpP9x*65jVmy1C7cI*vylLO3QtkWDSRJ*pi8XB_dFqf

 ## The output of the code obfuscated with obfuscatorByMe is exactly the same as the output of the original code.
           
### 2.)javascript-obfuscator
  #####   I used 'compact', 'controlFlowFlattening', 'numbersToExpressions', 'shuffleStringArray' and 'splitStrings' features of javascript obfuscator in this project.
 #### compact
     Makes the code one line.
 #### controlFlowFlattening
     It enables control flow flattening, a structure transformation that prevents understanding of the source code.
 #### numbersToExpressions
     Converts numbers to expressions
 #### shuffleStringArray
     Randomly shuffles stringArray elements.
 #### splitStrings
     Splits literal strings.
 #### Example of javascript-obfuscator(same input file as obfuscatorByMe)
     //input
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
     var _0x2029=['34KLESoV','794442CfBJBB','34735fmUNiY','4383271xCIAug','51358euERgt','1009166ndbdgy','log','2SzCuuJ','7yebwRh','186761ypjxDo','1DdHziS','148244VWgVRH','word'];var _0x3e5a0e=_0x1cf3;(function(_0x449755,_0x2caf07){var _0x49d2c8=_0x1cf3;while(!![]){try{var _0x462877=parseInt(_0x49d2c8(0x102))+-parseInt(_0x49d2c8(0x105))*-parseInt(_0x49d2c8(0x107))+-parseInt(_0x49d2c8(0xff))+-parseInt(_0x49d2c8(0x100))*parseInt(_0x49d2c8(0xfe))+-parseInt(_0x49d2c8(0x103))+-parseInt(_0x49d2c8(0x109))*parseInt(_0x49d2c8(0x106))+parseInt(_0x49d2c8(0x108))*parseInt(_0x49d2c8(0x101));if(_0x462877===_0x2caf07){break;}else{_0x449755['push'](_0x449755['shift']());}}catch(_0x3163a4){_0x449755['push'](_0x449755['shift']());}}}(_0x2029,-0x5109f+-0xc05d7+0x1d142b));var a=_0x3e5a0e(0xfd);var b=!![];var c=!![];var d=-0x1d*-0x47+-0x28c*-0x3+0x1*-0xfaf;var e=0x577*-0x7+-0x1916+0x4d*0xd3;var f=-0xe71*0x1+0xee0+-0x6c;var g=null;function _0x1cf3(_0x4f171e,_0x1d4728){_0x4f171e=_0x4f171e-(0x637+-0x2d1+0x1*-0x269);var _0x500155=_0x2029[_0x4f171e];return _0x500155;}var m=e*f;console[_0x3e5a0e(0x104)](a||b);console[_0x3e5a0e(0x104)](c||a);console[_0x3e5a0e(0x104)](b||a);console[_0x3e5a0e(0x104)](e||f);console[_0x3e5a0e(0x104)](f||e);console[_0x3e5a0e(0x104)](d||g);console[_0x3e5a0e(0x104)](g||d);console[_0x3e5a0e(0x104)](a&&c);console[_0x3e5a0e(0x104)](c&&a);console[_0x3e5a0e(0x104)](m);
     
