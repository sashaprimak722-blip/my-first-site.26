// Находим элементы на странице
const startAmountInput = document.getElementById('startAmount');
const interestRateInput = document.getElementById('interestRate');
const yearsInput = document.getElementById('years');
const calcBtn = document.getElementById('calcBtn');
const resultBox = document.getElementById('result');
const finalAmountSpan = document.getElementById('finalAmount');
const profitAmountSpan = document.getElementById('profitAmount');

// Функция расчета
function calculateCompoundInterest() {
    // Получаем значения из полей
    let startAmount = parseFloat(startAmountInput.value);
    let interestRate = parseFloat(interestRateInput.value);
    let years = parseFloat(yearsInput.value);

    // Проверка, чтобы поля не были пустыми
    if (isNaN(startAmount) || isNaN(interestRate) || isNaN(years) || years <= 0) {
        alert("Пожалуйста, заполните все поля корректными числами!");
        return;
    }

    // Формула сложного процента: A = P * (1 + r)^t
    // Где P - начальная сумма, r - ставка (в долях), t - годы
    let rateDecimal = interestRate / 100;
    let finalAmount = startAmount * Math.pow((1 + rateDecimal), years);
    
    // Считаем прибыль
    let profit = finalAmount - startAmount;

    // Выводим результат на экран (округляем до 2 знаков)
    finalAmountSpan.textContent = finalAmount.toFixed(2);
    profitAmountSpan.textContent = profit.toFixed(2);

    // Показываем блок с результатом
    resultBox.style.display = 'block';
}

// Привязываем функцию к кнопке
calcBtn.addEventListener('click', calculateCompoundInterest);
