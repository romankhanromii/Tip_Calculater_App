document.addEventListener('DOMContentLoaded', function () {
    // Function to calculate tip and total
    function calculateTip() {
        // Get values from input fields
        let billAmount = parseFloat(document.getElementById('bill').value);
        let tipPercentage;

        // Check if a custom tip is selected
        if (document.querySelector('.btn.custom').classList.contains('active')) {
            tipPercentage = parseFloat(document.getElementById('custom-tip').value) / 100;
        } else {
            // Use selected tip percentage if no custom tip is selected
            tipPercentage = parseFloat(document.querySelector('.btn.active').innerText) / 100;
        }

        let numberOfPeople = parseInt(document.getElementById('people').value);

        // Calculate tip amount and total amount per person
        let tipAmount = billAmount * tipPercentage;
        let totalAmountPerPerson = (billAmount + tipAmount) / numberOfPeople;

        // Update the displayed values
        document.querySelector('.tip_calculater').innerText = tipAmount.toFixed(2);
        document.querySelector('.per_person_amount').innerText = totalAmountPerPerson.toFixed(2);
    }

    // Call calculateTip initially to set initial values
    calculateTip();

    // Attach input event listener to bill, people, and custom tip inputs
    let billInput = document.getElementById('bill');
    let peopleInput = document.getElementById('people');
    let customTipInput = document.getElementById('custom-tip');

    [billInput, peopleInput, customTipInput].forEach(function (input) {
        input.addEventListener('input', function () {
            // Update the displayed values without recalculating
            document.querySelector('.tip_calculater').innerText = "0.00";
            document.querySelector('.per_person_amount').innerText = "0.00";
        });
    
})
let tipButtons = document.querySelectorAll('.btn');
    tipButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            tipButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });

            if (button.classList.contains('custom')) {
                // Toggle the visibility of custom tip input
                let customTipInput = document.getElementById('custom-tip');
                customTipInput.style.display = customTipInput.style.display === 'none' ? 'inline-block' : 'none';
            } else {
                // Hide the custom tip input when a standard tip button is clicked
                document.getElementById('custom-tip').style.display = 'none';
            }

            button.classList.add('active');
            
            // Update the displayed values without recalculating
            document.querySelector('.tip_calculater').innerText = "0.00";
            document.querySelector('.per_person_amount').innerText = "0.00";
        });
    });
