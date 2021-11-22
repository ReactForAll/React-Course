interface HasAge {
  age: number;
}

function getOldest<T extends HasAge>(arr: T[]): T {
  return arr.sort((a, b) => b.age - a.age)[0];
}

type Person = {
  name: string;
  age: number;
};

const people: Person[] = [
  { name: 'John', age: 30 },
  { name: 'Mike', age: 25 },
  { name: 'Jane', age: 40 },
];

const oldest = getOldest<Person>(people);