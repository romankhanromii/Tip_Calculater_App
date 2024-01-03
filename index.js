

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
  if (numberOfPeople === 0) {
    alert("Please enter a valid number");
    numberOfPeople.style.borderColor = 'red';
  }

  let tipAmount = billAmount * tipPercentage;
  console.log('tip amount',tipAmount)
  let totalAmountPerPerson = (billAmount + tipAmount) / numberOfPeople;
  console.log('TAPP',totalAmountPerPerson)

  document.querySelector('.tip_calculater').innerText = tipAmount.toFixed(2);
  document.querySelector('.per_person_amount').innerText = totalAmountPerPerson.toFixed(2);
}


function resetValues() {

  document.getElementById('bill').value = '';
  document.getElementById('people').value = '';
  document.getElementById('custom-tip').value = '';


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




