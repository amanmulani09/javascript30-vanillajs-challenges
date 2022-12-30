
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

 
//Array.prototype.reduce();
// how many years did all inventors live ?

const totalYears = inventors.reduce((total,inventor)=>{
    return total + (inventor.passed - inventor.year)
},0)

console.log(totalYears)


const oldest = inventors.sort((a,b)=>{
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;

    return lastGuy > nextGuy ? -1: 1;
})

console.table(oldest)



// we can add querySelectorAll in any DOM element not only on the document

//ex

const category = document.querySelector('body');
const links = category.querySelectorAll('a');

//it gives us the nodeList and we can convert the node list into array as follows

const de = [...category.querySelectorAll('a')];

//or

const link = Array.from(document.querySelectorAll('a'));

const streetWithDe = link.map(item=> link.textContent)
                    .filter(item=> item.includes('de'));


//sort exercise


//sort the people alphabetically by last name 

const alpha = people.sort((lastone,nextOne)=>{
const [aLast,aFirst] = lastone.split(', ');
const [bLast,bFirst] = nextOne.split(', ');

return aLast > bLast ? 1 : -1; 
})

console.table(alpha)


//8 Reduce Exercise 

//sum up the instances of each of these 

const data = ['car','bullet','van','truck','van','car','van','truck','bike','car','van','truck',];


const transportation = data.reduce((obj,item)=>{
    if(!obj[item]){
        obj[item] = 0;
    }
obj[item]++;
return obj;  
},{})

console.log(transportation)