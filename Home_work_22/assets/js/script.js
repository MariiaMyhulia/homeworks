/*
1. Пишем исключительно стрелочные функции
2. Написать два метода:
- askEarningsDay(аргумент_с_вопросом)
- salary(аргумент_кол_рабочих_дней, аргумент_который_возвращает_функция_askEarningsDay)
3. askEarningsDay() - Запрашивает у пользователя стоимость его рабочего дня
4. salary() - возвращает ЗП на конец мес.
5. Вызвать функцию salary() и вывести результат в alert с сообщением "На конец мес. Ваша ЗП составит: 14 000 грн."
6. 14 000 грн. это то, чтовернет salary()1. Пишем исключительно стрелочные функции
 */
let ask = 'Стоимость рабочего дня: ';
let work_days = 30;

let askEarningsDay = (ask_par) => {
    let days = prompt(ask_par);
    return Number(days);
};

let salary = (day_numb, salary_per_day) => {
    let salary_total = day_numb * salary_per_day();
    return salary_total;
};

let your_salary = salary(work_days, ()=>{
       return askEarningsDay(ask);
    });

alert(`На конец мес. Ваша ЗП составит: ${your_salary} грн.`)