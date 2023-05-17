const isLogged = true;

let logInfo = (isLogged) => {
  return new Promise((resolve, reject) => {
    if (isLogged === true) {
        setTimeout(() => {
            let rand = Math.random();
            resolve (rand);
        }, 2000);
    } else {
        reject(new Error("Not logged in!"))
    }
  });
};

let bigNumber = (outputNumber) => {
  return new Promise((resolve, reject) => {
    if (outputNumber > 0.5) {
        let final = {name: "John", age:24} 
        resolve (final);
    } else {
       reject (new Error("Less than 0.5!")) 
    }
  });
};

logInfo(isLogged)
  .then((rand) => {
    console.log(rand);
    return bigNumber(rand);
  }).then((final) => {
    console.log(`Data: ${JSON.stringify(final)}`);
  }).catch((error) => {
    console.log(error);
  })