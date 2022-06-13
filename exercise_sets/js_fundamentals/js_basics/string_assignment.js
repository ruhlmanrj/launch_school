// Pertains to behavior of variables upon reassignment
// and nondestructive method calls

const name = 'Bob';          // Constant `name` is initialized to `'Bob'`
const saveName = name;       // Constant `saveName` is initialized to the same
                             // `'Bob'` string as `name`

name.toUpperCase();          // Nondestructive method called on `name`
console.log(name, saveName); // Both `name` and `saveName` still reference the
                             // same `'Bob'` string, thus 'Bob' will be output twice.

// Further Exploration Question:
// How is it possible to call a method on a primitive value?
//
// The interpreter coerces primitives into an object and invokes
// the method on that object.