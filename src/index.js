const messages = ["Jozek", "Nicolas", "Oscar", "Ana", "Laura", "Andres"];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
