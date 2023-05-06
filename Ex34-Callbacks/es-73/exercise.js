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

const fname = 'Rossi';
PrintAsyncName(fname,callbck);

