function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputAmount = parseFloat(inputText);
    return inputAmount
}
// Calculate Button Handler
document.getElementById('calculate-btn').addEventListener('click', function(){
    // Income
    const income = getInputValue('income');
    // Expenses'
    const food = getInputValue('food-expenses');
    const rent = getInputValue('rent-expenses');
    const cloths = getInputValue('cloths-expenses');
    const expenses = food + rent + cloths;

    // Set Total Expenses
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = expenses;

    // Set Balance
    const balance = document.getElementById('balance');
    balance.innerText = income - expenses;
})
// Save button handler
document.getElementById('save-btn').addEventListener('click', function(){
    // Income
    const income = getInputValue('income');
    // Save
    const save = getInputValue('save');
    // Percentage Calculation
    const savingAmount = (income * save) / 100;
    // Set Saving Amount
    const previousSavingAmount = document.getElementById('saving-amount');
    previousSavingAmount.innerText = savingAmount;
    // get balance amount
    const balanceElement = document.getElementById('balance');
    const balance = parseFloat(balanceElement.innerText);
    // set remaining balance
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = balance - savingAmount;
})