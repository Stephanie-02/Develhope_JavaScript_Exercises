function callbck(arg1) {
    console.log(arg1);
}

function PrintAsyncName(name, callback1) {
    setInterval(() => {
        callback1("Hello");
    }, 1000);
    setInterval(() => {
        console.log(name); 
    }, 2000);
}

function repeatHello(arg1) {
    let id= setInterval(arg1,5000);
    setTimeout(() => clearInterval(id), 5000);
}

const fname = 'Rossi';
PrintAsyncName(fname,callbck);

repeatHello(() => console.log("Hello"));
