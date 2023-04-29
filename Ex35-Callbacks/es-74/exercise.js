function repeatHello(callback){
    setInterval(() => {
        callback("Hello")
    }, 1000);
}

repeatHello (() => console.log("Hello"));

// We don't need to use 'this' inside the callback function, so the arrow function syntax is a good choice.
