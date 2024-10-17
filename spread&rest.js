const names = ["isnane","dai","ho","yar","also"];

// const copyOfNames = names; // this wont copy but is just another variable for names

// copyOfNames.push("angel");

// console.log(names);  // ['isnane', 'dai', 'ho', 'yar', 'also', 'angel' ]
// console.log(copyOfNames);  // ['isnane', 'dai', 'ho', 'yar', 'also', 'angel' ]


//to properly copy the names we need spread operetor ie [... ]

const copyOfNames = [...names];//...names is value inside names so we need [] outside ...names
copyOfNames.push("angel");

console.log(copyOfNames); //[ 'isnane', 'dai', 'ho', 'yar', 'also', 'angel' ]
console.log(names); //[ 'isnane', 'dai', 'ho', 'yar', 'also' ]


//this works for object too

const obj = {
    name:"insane",
    caste:"greem",
    city:"fur"
}
const objCopy = {...obj}

objCopy.city = "tel";
console.log(obj); //{ name: 'insane', caste: 'greem', city: 'fur' }
console.log(objCopy); //{ name: 'insane', caste: 'greem', city: 'tel' }






//____________________________________________________________________________________________________
//rest operetor

const func = (...rest)=>{  //the input function will be in array eg 
    
    console.log(rest); //[1,2,3,4,5,6]
}

func(1,2,3,4,5,6);