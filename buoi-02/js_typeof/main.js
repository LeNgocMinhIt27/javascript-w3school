document.getElementById("demo").innerHTML = 
"'John' is " + typeof "John" + "<br>" +
"3.14 is " + typeof 3.14 + "<br>" +
"NaN is " + typeof NaN + "<br>" +
"false is " + typeof false + "<br>" +
"[1, 2, 3, 4] is " + typeof [1, 2, 3, 4] + "<br>" +
"{name:'John', age:34} is " + typeof {name:'John', age:34} + "<br>" +
"new Date() is " + typeof new Date() + "<br>" +
"function () {} is " + typeof function () {} + "<br>" +
"myCar is " + typeof myCar + "<br>" +
"null is " + typeof null;