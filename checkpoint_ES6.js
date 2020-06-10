let pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

const getAge=(pet)=> {
  return new Date().getFullYear() - pet.bornOn;
}

let petsWithAge = []
pets.forEach(pet =>{ pet.age = getAge(pet);
petsWithAge.push(pet);
} )
// for (let i = 0; i < pets.length; i++) {
//   let pet = pets[i];
//   pet.age = getAge(pet);

//   petsWithAge.push(pet);
// }
console.log(petsWithAge);

let dogs=pets.filter(pet=> pet.type==="dog" );

console.log(dogs)

// for (let i = 0; i < pets.length; i++) {
//   let pet = pets[i];
//   if (pet.type === "dog") {
//     dogs.push(pet);
//   }
// }
// console.log(dogs);

let jasper = pets.find(pet => pet.name==='Jasper');
// for (let i = 0; i < pets.length; i++) {
//   let pet = pets[i];
//   if (pet.name === "Jasper") {
//     jasper = pet;
//   }
// }
console.log(`Jasper is ${jasper.age}  years old`);