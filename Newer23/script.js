// Spread in fun call
const nums = [14,23,53,89,33]
const m = Math.max(...nums)   // 89
// console.log(..."hello")   // h e l l o

const cats = ['blue','scout','rocket']
const dogs = ['rusty','wyatt']
const allpets = [...cats,...nums]

const dataUser = {
    email : 'blue@gmail.com',
    password : 'tobis123',
    username : 'tfunke'
}  
const newUser = {...dataUser,id:2536,isAdmin:false} // here id and isAdmin add into object


function sum(...nums){        // sum(3,4,5) => 12
    return nums.reduce((total,el)=>total+el)
}

function raceResutl(gold,silver,...everyoneelse){
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneelse}`)
}


// ARGUMENT OBJECT
function sumAll(){  // sumAll(34,44,36) => 114
    let total  = 0;
    for(let i =0;i<arguments.length;i++){
        total+=arguments[i]
    }  return total;
}


// Desturcturing over an array
const scores = [22,35,32,89,78]
const [gold,silver,...bronze] = scores;  // gold = 22 and bronze = 32,89,78 

// Destructing over an object
const user = {
    email : 'harver@gmial.com',
    password : "scoty43",
    firstName : 'harvey',
    lastName : 'mild',
    born : 1930,
    died : 1989
}    
// function fullNames(user){
//     return `${user.firstName} ${user.lastName}`  // harvey mild
// }
function fullNames({firstName,lastName}){
    return `${firstName} ${lastName}`
}

const {email,password,born : birthdate,nature = 'na'} = user; // u can use born as birthdate and in console u should type birthdate
// above nature is not define because nature is not given in object and it is not similar to array here is born is mention in 
// object then the exact value of born will return
// u can use nature as assign valve => nature = 'na'

// Destructuring param
const fullName = ({first,last})=>{
    return `${first} ${last}`
}
const runner = {
    first : 'eliud',
    last : 'kipchoge',
    country : 'kenya'
}   
// fullName(runner) // eliud kipcoge