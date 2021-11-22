function getOldest(arr) {
    return arr.sort(function (a, b) { return b.age - a.age; })[0];
}
var people = [
    { name: 'John', age: 30 },
    { name: 'Mike', age: 25 },
    { name: 'Jane', age: 40 },
];
var oldest = getOldest(people);
