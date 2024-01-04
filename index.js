
//function of tip calculater
function calculateTip() {

  let billAmount = parseFloat(document.getElementById('bill').value);
  console.log("bill",billAmount)
  let tipPercentage;


  if (document.querySelector('.btn.custom').classList.contains('active')) {
    tipPercentage = parseFloat(document.getElementById('custom-tip').value) / 100;
  } else {

    tipPercentage = parseFloat(document.querySelector('.btn.active').innerText) / 100;
  }
  console.log("tipp",tipPercentage)
  let numberOfPeople = parseInt(document.getElementById('people').value);
  console.log(numberOfPeople)

  let zeroWarning = document.getElementById('zeroWarning');
  if (numberOfPeople === 0) {
    zeroWarning.style.display = 'inline-block';
    zeroWarning.classList.add('hidden')
  } else {
    zeroWarning.style.display = 'none';
    zeroWarning.classList.remove('hidden')
  }

  if (numberOfPeople === 0 || isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numberOfPeople)) {
    // If any input is invalid or not filled, clear the displayed values
    document.querySelector('.tip_calculater').innerText = '0.00';
    document.querySelector('.per_person_amount').innerText = '0.00';
    return; // Exit the function early if any input is invalid
  }

 
  let tipAmount = billAmount * tipPercentage;
  console.log('tip amount',tipAmount)
  let totalAmountPerPerson = (billAmount + tipAmount) / numberOfPeople;
  console.log('TAPP',totalAmountPerPerson)

  document.querySelector('.tip_calculater').innerText = tipAmount.toFixed(2);
  document.querySelector('.per_person_amount').innerText = totalAmountPerPerson.toFixed(2);
}


function resetValues() {
  //make all the three input to empty value
  document.getElementById('bill').value = '';
  document.getElementById('people').value = '';
  document.getElementById('custom-tip').value = '';

  //remove the active classlist from the tip
  let tipButtons = document.querySelectorAll('.btn');
  tipButtons.forEach(function (button) {
    button.classList.remove('active');
  });


  document.getElementById('custom-tip').style.display = 'none';


  document.querySelector('.tip_calculater').innerText = '0.00';
  document.querySelector('.per_person_amount').innerText = '0.00';
}


let tipButtons = document.querySelectorAll('.btn');
tipButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    tipButtons.forEach(function (btn) {
      btn.classList.remove('active');
    });

    if (button.classList.contains('custom')) {

      let customTipInput = document.getElementById('custom-tip');
      customTipInput.style.display = customTipInput.style.display === 'none' ? 'inline-block' : 'none';
    } else {

      document.getElementById('custom-tip').style.display = 'none';
    }

    button.classList.add('active');

    calculateTip();
  });
});

let billInput = document.getElementById('bill');
let peopleInput = document.getElementById('people');
let customTipInput = document.getElementById('custom-tip');

[billInput, peopleInput, customTipInput].forEach(function (input) {
  input.addEventListener('input', function () {
    calculateTip();
  });
});


let resetButton = document.querySelector('.reset_btn button');
resetButton.addEventListener('click', resetValues);




