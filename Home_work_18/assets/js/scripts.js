let doc = document;

let name_last = prompt('Введите вашу фамилию');
let name_first = prompt('Введите ваше имя');
let cur_year = (new Date()).getFullYear();
let birth_year
do {
    birth_year = prompt(`Введите ваш год рождения в интервале 1910 - ${cur_year}`, 0);
} while ((birth_year <= 1920 || birth_year > cur_year) && birth_year );
let age = 0;

//console.log(name_last)
//console.log(name_first)
//console.log(age)
//console.log((new Date()).getFullYear())

age = cur_year - birth_year

doc.querySelector("#user_last_name").innerText = name_last
doc.querySelector("#user_first_name").innerText = name_first
doc.querySelector("#user_age").innerText = age
