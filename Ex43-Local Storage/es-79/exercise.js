function saveStorage() {
  const user = {
    id: 1,
    name: "John",
    age: 25,
  };

  const userJson = JSON.stringify(user);
  
  localStorage.setItem('user', userJson);
}
