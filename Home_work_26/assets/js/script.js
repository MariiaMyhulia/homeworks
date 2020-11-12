let doc = document;

doc.querySelector('#normal_button').addEventListener('click', function () {
    alert("Hi, it is one click button!")
});

doc.querySelector('#double_button').addEventListener('dblclick', function () {
    alert("Hi, it is double click button!")
});

doc.querySelector('#input_message').addEventListener('keyup',function () {
    doc.querySelector('#input_message_repeat').innerHTML = this.value;
});