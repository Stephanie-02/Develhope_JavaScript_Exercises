function printName(){
    let helloName = "Hello John";

    function inner(){
        setTimeout(() => {
            console.log(helloName);
        },3600)
    }
    return inner;
}

printName()();