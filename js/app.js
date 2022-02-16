/* 
 * Author: Hasan
 * Github: https://github.com/hasanrafi69
 * Email: hasanrafi69@gmail.com
 * Mobile: +880-161-782323
 */
// ===========Mobile Menu=========
function CalculateMoney() {
    document.getElementById('calculate').addEventListener('click', function() {
        // console.log(e.target.id)
        const incomeId = document.getElementById('income');
        const income = parseFloat(incomeId.value);
        const foodId = document.getElementById('food');
        const food = foodId.value;
        const rentId = document.getElementById('rent');
        const rent = rentId.value;
        const clothId = document.getElementById('cloth');
        const cloth = clothId.value;
        const totalExpenseId = document.getElementById('total-expense');
        const totalExpense = parseFloat(food) + parseFloat(rent) + parseFloat(cloth);
        totalExpenseId.innerText = totalExpense;
        const totalBalanceId = document.getElementById('total-balance');
        const totalBalance = income - totalExpense;
        totalBalanceId.innerText = totalBalance;
        console.log(income, food, rent, cloth, totalExpense, totalBalance)
            // const calculateId = document.getElementById('income');
    })
}
CalculateMoney();

// Save Money
document.getElementById('save').addEventListener('click', function(params) {
    const saveAmounId = document.getElementById('save-amount');
    const totalSaveId = document.getElementById('total-save');
    const remainingBalanceId = document.getElementById('remaining-balance');
})