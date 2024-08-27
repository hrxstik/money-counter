document.addEventListener('DOMContentLoaded',  disable_buttons);
document.addEventListener('DOMContentLoaded', function() {
    document.body.className = 'light';
});

var interval;
var salary_value;
var nightmode = false;

function disable_buttons() {
    const buttons = [document.getElementById('start_button'),
document.getElementById('stop_button')];
     buttons.forEach(element => {
        element.disabled = true;
    });

    salary.addEventListener('input', checkInputs);
    function checkInputs() {
       buttons[0].disabled = !salary.value
    }
}

function setTheme() {
    const currentTheme = document.body.className;
    const content = document.getElementById('content')
    if (currentTheme === 'light') {
        document.body.className = 'dark';
        content.className = 'dark';
    } else {
        document.body.className = 'light';
        content.className = 'light';
    }
}

function startCounting() {
    const buttons = [document.getElementById('start_button'),
    document.getElementById('stop_button')];
    const salary = document.getElementById('salary');
    const current_salary = document.getElementById('current_salary');
    const currency = document.querySelector('input[name="currency"]:checked').value;
    salary_value = salary.value;
    if (salary_value && !isNaN(salary_value)) {
        parseInt(salary_value);
        salary.value = '';
        buttons[1].disabled = false
        buttons[0].disabled = true
        salary.disabled = true;
        current_salary.innerText = `Введенная зараплата в час ${salary_value}  ${currency}`
    }
    else {
        alert('Пожалуйста, введите целое число')
    }
    const money_node = document.getElementById('money');
    let money = 0;
    interval = setInterval(addMoney, 100);
    
    function addMoney() {
        money += salary_value / 36000 ;
        money_node.innerText = money.toFixed(2) + ' ' + currency;
    }
}

function stopCounting() {
    disable_buttons();
    salary.disabled = false;
    clearInterval(interval)
}