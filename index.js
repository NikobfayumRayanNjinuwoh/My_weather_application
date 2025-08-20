
let name = 'rayan';
let age = 30;
let isApproval = false;
let firstName = undefined;
    let selection = null;


    //declaring personal objact

    let person = {
       name: 'rayan',
       age: 30
    };
//dot notation used for changing names
    person.name = 'john';

    console.log(person.name)

    let selectedColors = ['red','blue'];
    selectedColors[2] = 1;
       console.log(selectedColors[1])

       //using arrays
       function greet(last) {
              console.log('hello '+ name);
       }
greet();

//performong a task
function sqruar(number) {
       return number * number;
}
console.log(squar(2));