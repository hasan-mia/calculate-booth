/* 
 * Author: Hasan
 * Github: https://github.com/hasanrafi69
 * Email: hasanrafi69@gmail.com
 * Mobile: +880-161-782323
 */
// ===========Mony Booth=========
const incomeId = document.getElementById('income');
const totalExpenseId = document.getElementById('total-expense');
const foodId = document.getElementById('food');
const rentId = document.getElementById('rent');
const clothId = document.getElementById('cloth');
const totalBalanceId = document.getElementById('total-balance');
const saveAmountId = document.getElementById('save-amount');
const totalSaveId = document.getElementById('total-save');
const remainingBalanceId = document.getElementById('remaining-balance');
// Calculate Money
function calculateMoney() {
    const income = parseFloat(incomeId.value);
    const food = foodId.value;
    const rent = rentId.value;
    const cloth = clothId.value;
    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(cloth)) {
        alert('insert number')
    } else {
        const totalExpense = parseFloat(food) + parseFloat(rent) + parseFloat(cloth);
        totalExpenseId.innerText = totalExpense;
        const totalBalance = income - totalExpense;
        totalBalanceId.innerText = totalBalance;
    }
}

// Save Money
function saveMoney() {
    const income = parseFloat(incomeId.value);
    const food = foodId.value;
    const rent = rentId.value;
    const cloth = clothId.value;
    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(cloth)) {
        alert('insert number')
    } else {
        const totalExpense = parseFloat(food) + parseFloat(rent) + parseFloat(cloth);
        const saveAmount = parseFloat(saveAmountId.value) / 100;
        const totalSaveAmount = income * saveAmount;
        totalSaveId.innerText = totalSaveAmount;
        const totalBalance = income - totalExpense;
        const remainingBalance = totalBalance - totalSaveAmount
        remainingBalanceId.innerText = remainingBalance;
    }
}

// Calculate Button
document.getElementById('calculate').addEventListener('click', function() {
    calculateMoney();
});
// Save Money Button
document.getElementById('save').addEventListener('click', function(params) {
    saveMoney()
});