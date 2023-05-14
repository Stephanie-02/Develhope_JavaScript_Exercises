const number = 15;

const newNumber = new Promise((resolve, reject) => {
    if (number > 10) {
        resolve("Number is greater than 10.")
    } else {
        reject("Number is less than 10.")
    }
});

newNumber
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })