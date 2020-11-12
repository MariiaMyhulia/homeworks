let cars = {
    car_1:{img:'assets/imges/img-1.webp', car:'Audi', model:'A6', age:2014, price:20900},
    car_2:{img:'assets/imges/img-2.webp', car:'Mazda', model:'6', age:2015, price:5500},
    car_3:{img:'assets/imges/img-3.webp', car:'Hyundai', model:'Tucson IDEAL', age:2018, price:25800},
    car_4:{img:'assets/imges/img-4.webp', car:'Mazda', model:'6 Grand Touring', age:2015, price:13600},
    car_5:{img:'assets/imges/img-5.webp', car:'Porsche', model:'Panamera', age:2010, price:25000},
    car_6:{img:'assets/imges/img-6.webp', car:'Mercedes-Benz', model:'CLS 220 Shooting', age:2017, price:39500},
    car_7:{img:'assets/imges/img-7.webp', car:'Nissan', model:'X-Trail 4x4 GAZ', age:2010, price:17500},
    car_8:{img:'assets/imges/img-8.webp', car:'Opel', model:'Zafira ERODYNAMIC OPS SPORT', age:2009, price:7490},
    car_9:{img:'assets/imges/img-9.webp', car:'BMW', model:'X5 M', age:2019, price:92000},
    car_10:{img:'assets/imges/img-10.webp', car:'Ford', model:'Focus SE flex fuel', age:2015, price:8800}
}
console.log(cars);
let doc = document;
let prise_sign_doll = '$';

let div = doc.createElement('div');
div.className = 'cars_list';

for(let key in cars){
    //console.log(cars[key]);
    let div_item = doc.createElement('div');
    div_item.className = 'cars_list_item';
    div_item.innerHTML = ''+
      '<div class = "cars_lst_item_element">'+
        '<div class="cars_list_item_img">' +
            '<img src="' + cars[key].img + '" alt = "' + cars[key].car + '' + cars[key].model + '">' +
        '</div>'+
        '<div class = "cars_list_item_content">'+
            '<h2>'+cars[key].car +' '+cars[key].model+ '</h2>'+
            '<div class = "cars_list_item_price">' +
                prise_sign_doll+' ' +new Intl.NumberFormat('ru-RU').format(cars[key].price) +
            '</div>'+
            '<div class = "cars_list_item_age">' +
                'Year: '+cars[key].age +
            '</div>'+
        '</div>'+
      '</div>'+
    '';
    div.append(div_item);
}
doc.body.append(div);

