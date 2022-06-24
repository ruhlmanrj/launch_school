// State what the code below will output and why.

const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages);         //  ['JavaScript', 'Ruby', 'Python']
console.log(languages.length);  //  3 (There are 3 non-negative integer property keys)

languages.length = 4;
console.log(languages);         // ['JavaScript', 'Ruby', 'Python, <1 empty item>]
console.log(languages.length);  // 4 (There are 4 non-negative integer property keys,
                                //    the largest of which does not hold a value.

languages.length = 1;
console.log(languages);         // ['JavaScript']
console.log(languages.length);  // 1 (The array was truncated, removing all
                                //    trailing indexed elements)

languages.length = 3;
console.log(languages);         // ['JavaScript', <2 empty items>]
console.log(languages.length);  // 3 (3 indexed properties)

languages.length = 1;
languages[2] = 'Python';
console.log(languages);         // ['JavaScript', <1 empty item>, 'Python']
                                // Since adding an element at index 2 creates
                                // a gap between the first element and the new
                                // element
console.log(languages[1]);      // undefined since index 1 holds no value
console.log(languages.length);  // 3 (1 greater than the largest index)
