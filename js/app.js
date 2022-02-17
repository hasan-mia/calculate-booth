/* 
 * Author: Hasan
 * Github: https://github.com/hasanrafi69
 * Email: hasanrafi69@gmail.com
 * Mobile: +880-161-782323
 */
// =================================//
//      Money Booth Assignment      //
//==================================//
// common varialbe
const incomeId = document.getElementById('income');
const totalExpenseId = document.getElementById('total-expense');
const foodId = document.getElementById('food');
const rentId = document.getElementById('rent');
const clothId = document.getElementById('cloth');
const totalBalanceId = document.getElementById('total-balance');
const saveAmountId = document.getElementById('save-amount');
const totalSaveId = document.getElementById('total-save');
const remainingBalanceId = document.getElementById('remaining-balance');
// error variable
const incomeError = document.getElementById('income-error');
const foodError = document.getElementById('food-error');
const rentError = document.getElementById('rent-error');
const clothError = document.getElementById('cloth-error');

//All Input Value function
function inputValue(id) {
    const inputMoney = parseFloat(id.value);
    return inputMoney;
}

// Calculate Money
function calculateMoney() {
    const income = inputValue(incomeId);
    const food = inputValue(foodId);
    const rent = inputValue(rentId);
    const cloth = inputValue(clothId);
    const totalExpense = food + rent + cloth;
    const totalBalance = income - totalExpense;
    if (income == '' || income < 0) {
        incomeError.style.display = "block";
    } else {
        incomeError.style.display = "none";
    }
    if (food == '' || food < 0) {
        foodError.style.display = "block";
    } else {
        foodError.style.display = "none";
    }
    if (rent == '' || rent < 0) {
        rentError.style.display = "block";
    } else {
        rentError.style.display = "none";
    }
    if (cloth == '' || cloth < 0) {
        clothError.style.display = "block";
    } else {
        clothError.style.display = "none";
    }

    if (totalExpense > income) {
        totalExpenseId.innerText = 'Sorry! 😇';
        totalBalanceId.innerHTML = `<p class="ml-1 text-xl text-red-600 text-center">You don't have enought money</p > `;
    } else {
        if (typeof(income) == 'number' && typeof(food) == 'number' && typeof(rent) == 'number' && typeof(cloth) == 'number') {
            if (totalExpense > income) {
                totalBalanceId.innerHTML = `<p class="ml-1 text-xl text-red-600 text-center">You don't have enough money</p > `;
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
    const income = inputValue(incomeId);
    const food = inputValue(foodId);
    const rent = inputValue(rentId);
    const cloth = inputValue(clothId);
    const totalExpense = food + rent + cloth;
    const saveAmount = inputValue(saveAmountId) / 100;
    const totalSaveAmount = income * saveAmount;
    const totalBalance = income - totalExpense;
    const remainingBalance = totalBalance - totalSaveAmount
    totalSaveId.innerText = totalSaveAmount;
    remainingBalanceId.innerText = remainingBalance;
    if (remainingBalance < 0) {
        remainingBalanceId.innerHTML = `<p class="ml-1 text-xl text-red-600 text-center">Sorry! you are trying to get too much save</p>`;
    }
    if (isNaN(totalSaveAmount) || totalSaveAmount < 1) {
        totalSaveId.innerHTML = `<p class="ml-1 text-xl text-red-600 text-center">Please give all input value and saving %  + value</p>`;
    }
    if (isNaN(remainingBalance) || totalSaveAmount < 1) {
        remainingBalanceId.innerHTML = `<p class="ml-1 text-xl text-red-600 text-center">Please give all input value and saving %  + value</p>`;
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