//https://www.codewars.com/kata/basics-generators-number-1/train/javascript

function* generator(...args) {
   let index = 1;
   while (true){
     index = (yield index++) || index;
   }
}


//https://www.codewars.com/kata/multiplication-generators-number-2/train/javascript

function* generator(a) {
   let b = 1;
   while(true) {
     yield `${a} x ${b} = ${a*(b++)}`
   }
}
