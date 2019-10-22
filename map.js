console.log("This is tutorial for map");
const myMap = new Map();
const key1 = 'myStr', key2 = {}, key3 = function () { };
myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is a blank obj');
myMap.set(key3, 'This is an empty fun');
console.log(myMap);