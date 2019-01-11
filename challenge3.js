// Take the key value pairs in an object, and flip them (ex. name: 'jake' -> 'jake': name)

let obj = {
    name: 'Bob',
    occupation: 'Builder',
    age: 35,
    canHeFixIt: true
}

function swap(obj) {
    // Create new object
    let newObj = {};
    // For/In statement to loop through properties of an object
    for (var prop in obj) {
        // Add into the new object array every property as value, every value as property 
        // Bracket Notation
        // New array [old array[property in loop]] = property in loop
        newObj[obj[prop]] = prop;
    }
    console.log(newObj);
}

console.log(obj);
swap(obj);