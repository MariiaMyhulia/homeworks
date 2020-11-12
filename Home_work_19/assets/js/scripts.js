let names = ["Дмитрий", "Олег", "Павел", "Мария", "Валентина", "Дарья", "Андрей", "Михаил", "Максим", "Зураб"];

    //- Вывести все элементы массива по индексу массива, например:
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log(names[5]);
console.log(names[6]);
console.log(names[7]);
console.log(names[8]);
console.log(names[9]);
    // по индексу/

    // for
console.log('_____________________________________');
console.log('Вывод с помощью цикла for: ');

for(let i = 0; i < names.length; i++){
    console.log(`Индекс ${i} - ` + names[i]);
}
    // for/

    // for...in
console.log('_____________________________________');
console.log('Вывод с помощью цикла for...in: ');

for (let val in names){
    console.log(`Индекс ${val} - ` + names[val]);
}
    // for...in/

    //while
console.log('_____________________________________');
console.log('Вывод с помощью цикла while: ');
let i = 0;

while (i < names.length)
{
    console.log(`Индекс ${i} - ` + names[i])
    i += 1;
}
    //while/

    //do...while
console.log('_____________________________________');
console.log('Вывод с помощью цикла do...while: ');
let y = 0;

do {
    console.log(`Индекс ${y} - ` + names[y])
    y += 1;
} while (y < names.length)
    // do...while/

    // Вывод элементов массива в DOM
let item = document.querySelector("#arr")
for(let z = 0; z < names.length; z++){
    item.innerHTML += '' +
        '<div class = arr_item>' +
            names[z] +
        '</div>' +
        ''
}
    // DOM/