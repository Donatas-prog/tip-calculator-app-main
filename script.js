"use strict";
const bill = document.querySelector('.bill_input');
const people = document.getElementById('people_input');
const button = document.querySelector('.right_submit'); 
const custom = document.getElementById('tips_input_value');
const percent = document.querySelectorAll('#percent_button');
const errorBill = document.getElementById('error_bill');
const errorPeople = document.getElementById('error_people')
const tipsAmount = document.getElementById('amount_tip');
const personAmount = document.getElementById('person_tip');


button.addEventListener('click', () => {
  bill.value = '0';
  people.value = '1';
  custom.value = '';
  tipsAmount.innerText = '$0.00';
  personAmount.innerText = '$0.00';

  percent.forEach((btn) => {
    btn.classList.remove('active');
  })
  percent[2].classList.add('active');
})
percent.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    percent.forEach((tipBtn) => {
      tipBtn.classList.remove('active');
    })
    if(event.target.classList.contains('tips_input_value')) {
      event.target.parentElement.classList.add('active');
    } else {
    event.target.classList.add('active');
    }
    calculateTip();
  });
});
const calculateTip = () => {
const billValue = parseFloat(bill.value);
const numberPeople = parseFloat(people.value);
const customTip = document.querySelector('.tips_input.active');
let tipsPercent = parseInt(document.querySelector('#percent_button.active').dataset.percentage);

if(customTip) {
  tipsPercent = parseFloat(document.querySelector('.tips_input_value').value
  );
}
const totalAmount = parseFloat((tipsPercent / 100) * billValue).toFixed(2);
const tipAmount = parseFloat(totalAmount / numberPeople).toFixed(2);
const actualTotalAmount = parseFloat((billValue + parseFloat(totalAmount)) / numberPeople).toFixed(2);
tipsAmount.innerText = `$${tipAmount}`;
personAmount.innerText = `$${totalAmount}`;
console.log(totalAmount);
};
const biggerThanZero = (value) => {
const regex = /^\d+$/;
return regex.test(value);
}

bill.addEventListener('keyup', (event) => {
  calculateTip();
});
custom.addEventListener('keyup', (event) => {
  calculateTip();
});
people.addEventListener('keyup', (event) => {
  calculateTip();
});


