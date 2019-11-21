//https://www.codewars.com/kata/create-iterator/train/javascript


const createIterator = (array) => {
     let index = 0;
     return {
        next() {
           return index < array.length ? {value: array[index++], done: false} : {value: array[index++], done: true};
        },
        get index() { 
              return index > array.length ? array.length : index;
        }
     }
};
