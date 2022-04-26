function ageDistribution(persons) {
  let result = new Map();
  persons.forEach((person) => {
    if (result.has(person.age)) {
      result.set(person.age, result.get(person.age) + 1);
    } else {
      result.set(person.age, 1);
    }
  });
  // TODO: answer here
  return result;
}

function groupByAge(persons) {
  // TODO: answer here
  let result = new Map();
  persons.forEach((person) => {
    if (result.has(person.age)) {
      result.get(person.age).push(person);
    } else {
      result.set(person.age, [person]);
    }
  });
  return result;
}

let people = [
  { name: "Bob", age: 21 },
  { name: "Sam", age: 28 },
  { name: "Ann", age: 21 },
  { name: "Joe", age: 22 },
  { name: "Ben", age: 28 },
];

console.log(ageDistribution(people));
console.log(groupByAge(people));

module.exports = {
  ageDistribution,
  groupByAge,
};
