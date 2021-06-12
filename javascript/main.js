/* 
Kiekviena užduotis turi būti aprašyta kaip atskira funkcija
kuriai yra paduodami duomenys. Aprašykite visas funkcijas žemiau. 
Visas funkcijas iškvieskite vieną po kitos, žemiau šio komentaro.

Taip pat parašykite funkciją kuri: isikviesdama save pačią atspausdina skaičius nuo 1 iki 10

*/

console.log(data);
countTheCafes(data);
countTheCafesInKaunas(data);
countDishesInTheCafe(data);


function countTheCafes(data) {
    let totalCafes = data.length;
    console.log("Question 1: How many cafes in the list?");
    console.log(`Answer: ${totalCafes} cafes in the list.`);
}

function countDishesInTheCafe(data) {
    let firstCafeMenu = data[0]['menu'];
    console.log("Question 2: How many dishes in the first cafe menu?");
    console.log(`Answer: ${firstCafeMenu.length} dishes in the first cafe menu.`);
}

function countTheCafesInKaunas(data) {
    // searching for "Kaunas" or "kaunas" in address and creating new array 'cafesInKaunas'
    let cafesInKaunas = [];
    for(let i = 0; i < data.length; i++) {
        if (data[i]['adresas'].indexOf("Kaunas") != -1 || data[i]['adresas'].indexOf("kaunas") != -1) {
        cafesInKaunas.push(data[i]);
        }  
    }
    console.log("Question 3: How many cafes in Kaunas?");
    console.log(`Answer: ${cafesInKaunas.length} cafes in Kaunas.`);  
    return cafesInKaunas;
}

countDifferentDishesInKaunas(data);

function countDifferentDishesInKaunas(data) {
    let cafesInKaunas = countTheCafesInKaunas(data);
    let dishesInKaunas = [];
    for (let i = 0; i < cafesInKaunas.length; i++) {
        const menu = cafesInKaunas[i]['menu'];
        for (let a = 0; a < menu.length; a++) {
            const dish = Object.keys(menu[a])[0];
            dishesInKaunas.push(dish); 
        }
    } 
    let uniqDishes = dishesInKaunas.filter((value, index) => dishesInKaunas.indexOf(value) === index);
    
    console.log("Question 4: How many uniq dishes in Kaunas?");
    console.log(`Answer: ${uniqDishes.length} uniq dishes in Kaunas.`);  
} 
