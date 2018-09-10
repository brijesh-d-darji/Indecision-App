export const isAdult = (x) => {
      if(x >= 18)
        return 'He/she is adult ';
       else
          return 'He/she is not Adult';
};

export const canDrink = (x) => {
    if(x >= 18)
      return 'He/she can Drink';
     else
        return 'He/she can not drink';
};


/*import subtract, {cube} from './utils.js';

console.log('Indecision App is running...');
//console.log(isAdult(20));
//console.log(canDrink(56));
console.log(subtract(56,6));
console.log(cube(4));

import validator from 'validator';
const email = validator.isEmail('bhai@bhai.sx');
console.log(email)  */
