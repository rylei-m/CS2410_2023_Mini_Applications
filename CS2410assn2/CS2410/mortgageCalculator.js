function calculateMortgage() {
    let principal = parseFloat(document.getElementById("loanAmount").value);
    let yearlyInterestRate = parseFloat(document.getElementById("interestRate").value) / 100;
    let years = parseFloat(document.getElementById("loanTerm").value);

    if (Number.isNaN(principal) || Number.isNaN(yearlyInterestRate) || Number.isNaN(years)) {
        document.getElementById("mortgageResult").innerText = "Error occurred. Check input values.";
        return;
    }

    let monthlyInterestRate = yearlyInterestRate / 12;
    let numberOfMonths = years * 12;

    let monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow((1 + monthlyInterestRate), -numberOfMonths));
    document.getElementById("mortgageResult").innerText = "Your monthly mortgage is: $" + monthlyPayment.toFixed(2);
}
document.addEventListener("DOMContentLoaded", (_event) => {
    document.getElementById("loanAmount").addEventListener("blur", calculateMortgage);
    document.getElementById("interestRate").addEventListener("blur", calculateMortgage);
    document.getElementById("loanTerm").addEventListener("blur", calculateMortgage);
});