const id = Symbol('age');

const user = {
  name: 'pranav',
  [id]: 16,
};

let user2 = { ...user };

console.log(user2)

for (let key in user) {
  console.log(key);
}
