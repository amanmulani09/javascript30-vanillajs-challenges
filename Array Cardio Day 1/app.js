
const inventors = [
    {
    first:'Albert',
    last:'Eistein',
    year:1789,
    passed:1955
},

    {
    first:'nilesh',
    last:'age',
    year:1800,
    passed:2099
},

    {
    first:'Aman',
    last:'Mulani',
    year:1899,
    passed:3000
},

    {
    first:'Nitin',
    last:'Age',
    year:1999,
    passed:2022
},

    {
    first:'Rahul',
    last:'Kothawale',
    year:1588,
    passed:1699
},

    {
    first:'Vibhu',
    last:'More',
    year:1599,
    passed:1268
},

    {
    first:'Pratham',
    last:'Bhalke',
    year:1699,
    passed:1578
},

    {
    first:'Prasad',
    last:'Patil',
    year:2500,
    passed:2600
},

];


const people = ['Aman, Mulani','Rahul, Kothawale',"Nilesh, Age","Vishal,Kothawale",
"Nitin, Age","Om, Patil","Suraj, Gosawi","Hondi, Mathpati"
]

//Array methods to work on ?

 

/// 1. Array.prototype.filter()
//Q Filter the list of inventors for those who were born in the 1500's

//My solutin ???

let inventorBornin15 = [];
const fiterdList = inventors.map(user => user.year.toString().includes('15') ? inventorBornin15.push(user): user );;

// console.log(inventorBornin15)
// console.log(fiterdList);

//Video Solution ???
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <1600)
console.table('*** filter console ',fifteen);


//Array.prototype.map()

//2. give us an array of the inventory first and last names

//My solution 
// const fullNamesOfInventors = inventors.map(inventor=> `${inventor.first} ${inventor.last}`)

// console.log(fullNamesOfInventors)


//Video solution ??

const fullNames = inventors .map(inventor => inventor.first + ' ' + inventor.last)
console.log('****** map ',fullNames)
//almost same husshhh



//Array.prototype.sort();

//sort the inventors by birthdate,older to youngst
  //aweesomeee
// let investorsSortedAsBirthDate = inventors.sort((firstPerson,secondPerson)=>{
//     if(firstPerson.year>secondPerson.year){
// return 1
//     } else{
//         return -1;
//     }
// });

// console.table(investorsSortedAsBirthDate)

//oneLiner

let sortedByBirth = inventors.sort((first,second)=> first.year > second.year ? 1 : -1);
console.log('******** sort',sortedByBirth)

