console.log("Script running...")
// Task 1: Define a function called `calculateArea` that takes length and width as parameters and returns the area (length * width)

function calculateArea(length, width) {
    return length * width;
}

// Call the `calculateArea` function with any two values. Console log the result to check it.

function calculateArea(length, width) {
  return length * width;
}

const length = 6;
const width = 3;
const area = calculateArea(length, width);
console.log(area);

// Task 2: Define a function called `checkPassing` that takes in `student` (object) as a parameter and returns whether the `grade` attribute is greater than or equal to 63.

function checkPassing(student) {
    return student.grade >= 63;
}

// Define a `student` object that has name (string), class (string), and grade (number) attributes.

const student = {
    name: 'Justice',
    class: 'Software Engineering',
    grade: 85
};


// Call the `checkPassing` function with the `student` object. Console log the result to check it.

const isPassing = checkPassing(student);
console.log(isPassing);

// Task 3: Define a function called `printIndex` that takes in `array` and `index` as parameters andconsole logs the element at that index of the array.
// Pink & Blue: Define `printIndex` as an ARROW function

const printIndex = (array, index) => {
    console.log(array[index]);
};

// Define an array called `favoriteFoods` and put at least 3 elements in

const favoriteFoods = ['Pizza', 'Rice and beans', 'Jollof Rice'];


// Call the `printIndex` function with `favoriteFoods` and any index

printIndex(favoriteFoods, 1);

// Extra Credit: Define an arrow function called `calculateTotal` that takes in `array` (array of numbers) as a parameter and returns the total of all the numberes

const calculateTotal = array => {
    return array.reduce((total, num) => total + num, 0);
};

// Define an array called `numbers` and put at least 3 numbers in


// Call the `calculateTotal` function with `numbers` and any index



