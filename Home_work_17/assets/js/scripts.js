let doc = document;

//  rectangle
let side1 = 10
let side2 = 8
//  rectangle/

//  circle
let radius = 10
const PI = Math.PI.toFixed(2)
//  circle/

let number = 6
let pow = 4
// pow/

doc.querySelector('#button1').addEventListener('click',f_square);
doc.querySelector('#button2').addEventListener('click',f_circle);
doc.querySelector('#button3').addEventListener('click',f_pow);

function f_square() {
    console.log("Сторона прямоугольника 1 = " + side1)
    console.log("Сторона прямоугольника 2 = " + side2)
    let square = side1 * side2;
    console.log(`Площадь прямоугольника со сторонами ${side1} и ${side2} = ` + square)
    console.log("___________________________________")
}

function f_circle() {
    console.log("Радиус = " + radius)
    let square_circle = PI * Math.pow(radius,2)
    console.log(`Площадь круга с радиусом ${radius} = ` + square_circle)
    console.log("___________________________________")
}

function f_pow() {
    let pow_result = Math.pow(number,pow)
    console.log(`Возводим число ${number} в степень ${pow} = ` + pow_result)
    console.log("___________________________________")
}