//Zadanie 3

const names = ["Grzegorz", "Marcin", "Bonawentura"];
const [name1, name2, name3] = names;
console.log(name1, name2, name3);

//Zadanie 4

const generateRandomNumbers = () => {
    function randomIntFromInterval(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const numbers = [];
    for (let i = 0; i < 6; i++) {
        numbers.push(randomIntFromInterval(0,5))
    }
    console.log(numbers);
    return numbers;
}

const [first, , third] = generateRandomNumbers();
console.log(first, third);

//Zadanie 5

const cat = {
    name: "Mruczek",
    age: 10,
    getVoice: () => "miau miau"
};
const showAnimal = ({name, age : catAge, getVoice}) => {
    return `Kot ${name} ma ${catAge} lat i robi ${getVoice()}.`;
}

console.log(showAnimal(cat));