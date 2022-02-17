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
    const food = parseFloat(foodId.value);
    const rent = parseFloat(rentId.value);
    const cloth = parseFloat(clothId.value);
    const totalExpense = food + rent + cloth;
    const totalBalance = income - totalExpense;
    if (income == '') {
        alert('Income Cant be Null')
    }
    if (food == '') {
        alert('food Cant be Null')
    }
    if (rent == '') {
        alert('rent Cant be Null')
    }
    if (cloth == '') {
        alert('cloth insert number')
    }
    debugger
    if (totalExpense > income) {
        totalBalanceId.innerHTML = `<p class="ml-1 text-xl text-red-600 text-center">You don't have enought money</p > `;
    } else {
        if (typeof(income) == 'number' && typeof(food) == 'number' && typeof(rent) == 'number' && typeof(cloth) == 'number') {
            if (totalExpense > income) {
                totalBalanceId.innerHTML = `<p class="ml-1 text-xl text-red-600 text-center">You don't have enought money</p > `;
            }
            if (isNaN(totalExpense)) {
                totalExpenseId.innerHTML = `<p class="ml-1 text-xl text-red-600 text-center">Give all input value as a numer</p > `;
            } else {
                totalExpenseId.innerText = totalExpense;
            }
            if (isNaN(totalBalance)) {
                totalBalanceId.innerHTML = `<p class="ml-1 text-xl text-red-600 text-center">Give all input value as a numer</p > `;

            } else {
                totalBalanceId.innerText = totalBalance;
            }

        }
    }

}

// Save Money
function saveMoney() {
    const income = parseFloat(incomeId.value);
    const food = parseFloat(foodId.value);
    const rent = parseFloat(rentId.value);
    const cloth = parseFloat(clothId.value);
    const totalExpense = food + rent + cloth;
    const saveAmount = parseFloat(saveAmountId.value) / 100;
    const totalSaveAmount = income * saveAmount;
    const totalBalance = income - totalExpense;
    const remainingBalance = totalBalance - totalSaveAmount
    totalSaveId.innerText = totalSaveAmount;
    remainingBalanceId.innerText = remainingBalance;

    if (isNaN(totalSaveAmount) || totalSaveAmount < 0) {
        totalSaveId.innerHTML = `<p class="ml-1 text-xl text-red-600 text-center">Please give all input value and saving %  + value</p>`;
    }
    if (isNaN(remainingBalance)) {
        remainingBalanceId.innerHTML = `<p class="ml-1 text-xl text-red-600 text-center">Please give all input value as a numer</p>`;
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