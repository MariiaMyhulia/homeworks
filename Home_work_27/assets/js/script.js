let doc = document;

let currencies = new Promise((resolve, reject) => {
    fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
        .then(data => {
            return data.json();
        })
        .then(data => {
            resolve(data);
        })
        .catch( err =>{
            console.log('Ошибка '+err);
        });
});

doc.querySelector(".order_form_button").addEventListener('click', function () {

    let amount = doc.querySelector('#name').value;
    if (document.getElementById('usd').checked) {
        currencies
            .then(data => {
                let new_uah= amount * parseFloat(data[0].sale)
                doc.querySelector('.order_pay').innerHTML = `
                    <div>отдав <strong>${amount} $</strong> вы получите: <strong>${new_uah} грн.</strong></div>
                `;
            })
    }else if (document.getElementById('uah').checked) {
        currencies
            .then(data => {
                let new_usd = amount / parseFloat(data[0].buy)
                doc.querySelector('.order_pay').innerHTML = `
                    <div>отдав <strong>${amount} грн.</strong> вы получите: <strong>${new_usd} $</strong></div>
                `;
            })
    }else if(doc.querySelector('#name').value == ''){
        doc.querySelector('.order_pay').innerHTML = `
                    <div><strong>Пожалуйста, задайте количество денег, которые хотите обменять</strong></div>
                `;
    }
    else{
        doc.querySelector('.order_pay').innerHTML = `
                    <div><strong>Пожалуйста, выберите тип транзакции</strong></div>
                `;
    }

})
