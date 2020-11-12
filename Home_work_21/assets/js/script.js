// 1
/*1.
Написать стрелочную функцию, которая будет принимать один праметр question.
Функция должна, что-то спросить у пользователя и вернуть (return)
значение в alert(): "Ваш ответ: Рома"
Вызвать функцию 3 раза с разными вопросами.*/
let func_ask = question => {
    let answer = prompt(question);
    console.log(answer);
    return alert(`Ваш ответ: ${answer}`);
}

let per_name = func_ask("Your name: ");
let per_surname = func_ask("Your surname: ");
let per_age = func_ask("Your age: ");

// 1/


// 2
/*
2. Создать объект person, где будут ключи:
- name: ''
- age: ''
- sayHello: здесь анонимная функция, которая выводит сообщение:
"Здравствуйте, this.name. Вам this.age лет"
Вызвать функцию и вывести ее в консоль.
 */
console.log("________________________________________________");

let person = {
    name: 'user_name',
    age: 100,
    sayHello: function(){
        return `Здравствуйте, ${this.name}. Вам ${this.age} лет`;
    }
};

console.log(person.sayHello());

/*
function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}
let person = new Person(per_name,per_surname,per_age);
console.log(person.name);
console.log(person.surname);
console.log(person.age);
 */
// 2/


// 3
/*
3. Написать функцию, которая будет задавать вопросы пользователю (это уже сложней):
- Как вас зовут?
- Сколько вам лет?
- Вы женаты/замужем?
- Кем вы работаете?
- Какая у вас ЗП?
- Где вы были за границей последний раз?

Вопросы изначально занесены в массив askList (одномерный).

Также нужно объявить объект answers со следующей парой ключ-значение:
- name: null,
- age: null,
- family: null,
- job: null,
- salery: null,
- abroad: null

Сейчас, по сути, он пустой.

и возвращать объект answers с ответами пользователя в консоль.
Просто нужно распечатать объект в консоль.
 */
console.log("________________________________________________");

let count = 0;

let arr_questions = ["Как вас зовут?",
    "Сколько вам лет?",
    "Вы женаты/замужем?",
    "Кем вы работаете?",
    "Какая у вас ЗП?",
    "Где вы были за границей последний раз?"];

let answer = {
    name: null,
    age: null,
    family: null,
    job: null,
    salery: null,
    abroad: null
}

function ask() {

    for (let val in answer){
        //console.log(count);
        let ans = prompt(arr_questions[count]);
        answer[val] = ans;
        count++;
    }
    return answer;
}
console.log(ask());

// 3/