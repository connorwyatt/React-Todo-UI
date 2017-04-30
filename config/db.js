const faker = require('faker');

module.exports = () => {
  const todos = [];

  for (let i = 0; i < 5; i++) {
    todos.push({
      id: faker.random.uuid(),
      text: faker.lorem.words(2),
      isComplete: faker.random.boolean()
    });
  }

  return {
    todos
  };
};
