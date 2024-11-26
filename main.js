//1. create an array of 5 person objects, the objhects should contain first name last name, age and job properties, jobb should be a boolean.
//------------------------------------------------------------------------------------------------------------------------------------------------

function ExternalCtor(firstName, lastName, age, job) {
    // TODO: data validation
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        job: job
    }
}

const objectArray = [
    ExternalCtor("Ole", "Nordmann", 30, true),
    ExternalCtor("Ola", "Nordmann", 30, true),
    ExternalCtor("Personikus", "Pontificus", 55, false),
    ExternalCtor("Korporeal", "Abstracticus", 77, false),
    ExternalCtor("Firma", "Solid", 99, true),
];

//2. print First and last name of the first person in the array. using dot notation on firstname and bracket notation last name
//------------------------------------------------------------------------------------------------------------------------------------------------

const firstPerson = objectArray[0];
console.log(`${firstPerson.firstName} ${firstPerson["lastName"]}`);

//3. That was tiresome.. just so much typing. Lets write a method to that we never need to that again..
//create a method in every person object that returns first and last name, call it fullName. This can be done manually for each one or with a loop.
//Print fullName of the second person in the array by calling the method.
//------------------------------------------------------------------------------------------------------------------------------------------------

objectArray.forEach((person) => {
    person.fullName = () => {
        return `${person.firstName} ${person.lastName}`
    };
});

console.log(objectArray[1].fullName());

//4. Its the third person's birthday! And their job status changed. Update their age and job status using dot notation.
//------------------------------------------------------------------------------------------------------------------------------------------------

const thirdPerson = objectArray[2];
thirdPerson.age += 1;
thirdPerson.job = !thirdPerson.job;

//5. Person three is throwing a giant party! create a function called fotballPubben(). The function should check if the person is over 18, print "party time" if they are and "too young" if they are not. It should also print the name of the person.
// use a loop to call the function for every person in the array.
//------------------------------------------------------------------------------------------------------------------------------------------------

function fotballPubben(person) {
    if (person.age > 18) {
        console.log(`${person.fullName()}: party time`);
    } else {
        console.log(`${person.fullName()}: too young`);
    }
}

objectArray.forEach((person) => { fotballPubben(person) });

//6. It's time for school! Create a function called university. It should take in an person object as well as type of degree (bachelors or masters) as arguments.
// The function should update age and add two properties called "degree" and "student loan". The value of age, degree and student loan should change depending on what degree
//was passed into the function. Send one person to uni and print the result.
//------------------------------------------------------------------------------------------------------------------------------------------------
function university(person, degree) {
    switch (degree.toLowerCase()) {
        case "bachelors":
            person.degree = degree;
            person.age += 2;
            person["student loan"] = 2_000;
            break;
        case "masters":
            person.degree = degree;
            person.age += 5;
            person["student loan"] = 5_000;
            break;
        default:
            break
    }
}

university(firstPerson, "bachelors");
console.log(firstPerson);

// 7. API TIME!
// Read the documentation of this dog API: https://dog.ceo/dog-api/documentation/
// Fetch 4 dogs of the same breed or sub-breed and display them in the DOM
//feel free to change the ID of the images and/or add css.
//------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @type {Array<HTMLImageElement>}
 */
const dogElems = [
    document.getElementById("dog1"),
    document.getElementById("dog2"),
    document.getElementById("dog3"),
    document.getElementById("dog4"),
];


try {
    const resp = await fetch("https://dog.ceo/api/breed/hound/images/random/4");
    const json = await resp.json();
    json.message.forEach((value, idx) => {
        const dog = dogElems[idx];
        dog.src = value;
    });
} catch (error) {
    console.error(error);
}


//BONUS!!
//create a way for you to change the breed of the dogs displayed on your page
//------------------------------------------------------------------------------------------------------------------------------------------------
