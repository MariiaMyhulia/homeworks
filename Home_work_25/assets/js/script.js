let doc = document;
let baseText = doc.querySelector('.order_pay').innerText;;

doc.querySelector(".order_form_button").addEventListener('click', function () {

    let name = doc.querySelector('#name').value;
    let table_num = doc.querySelector('#table_num').value;
    let first_meal = doc.querySelector('#first_meal').value;
    let second_meal = doc.querySelector('#second_meal').value;
    let drink = doc.querySelector('#drink').value;

    for(let i = 0; i < doc.getElementsByTagName('input').length; i++) {
        if(doc.getElementsByTagName('input')[i].value !== ''){
            doc.querySelector('.order_pay').innerHTML = `
                <div>Имя: ${name}</div>
                <div>Номер столика: ${table_num}</div>
                <div>Первое: ${first_meal}</div>
                <div>Второе: ${second_meal}</div>
                <div>Напиток: ${drink}</div>
                `;
        }
    }
})
doc.querySelector(".order_form_button_reset").addEventListener('click', function () {
    doc.querySelector('#name').value = '';
    doc.querySelector('#table_num').value = '';
    doc.querySelector('#first_meal').value = '';
    doc.querySelector('#second_meal').value = '';
    doc.querySelector('#drink').value = '';

    doc.querySelector('.order_pay').innerHTML = baseText;
})
