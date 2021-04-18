var calculateButton = document.getElementById("calculate")
var onClick = function() {
    return function() {
        console.log('Tip me !')
        var numberOfPeople = document.getElementsByName("peoplecount")[0].value
        var originalBill = document.getElementsByName("billtotal")[0].value
        var tipPercent = document.getElementsByName("tippercent")[0].value
        var totalPerPerson = document.getElementById("costpp")

        var tipAsNumber = (Number.parseFloat(tipPercent) / 100)
        var totalBill = Number.parseFloat(originalBill) + (originalBill * tipAsNumber)

        var costPerPerson = (totalBill / numberOfPeople).toFixed(2)
        totalPerPerson.textContent = costPerPerson
         
        console.log("For "+numberOfPeople+ " people the bill of "+originalBill + "\n"
        + "with a tip of " + tipPercent+"% brings the per-person cost to \n"
        + costPerPerson)
    }
}

calculateButton.addEventListener("click", onClick())