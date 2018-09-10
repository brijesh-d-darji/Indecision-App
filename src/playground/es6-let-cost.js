var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Jen Mead';
let firstName;

if (fullName) {
  firstName = fullName.split(' ');
  console.log(firstName[0]);
}

console.log(firstName);

function getPatName()
{
    const petname='hal';
    return petname;
}
 
const petname = getPatName();
console.log(petname);