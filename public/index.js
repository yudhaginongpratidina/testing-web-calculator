'use strict';

import Calculator from './calculator.js';

const tambah = document.querySelector('#tambah');
const kurang = document.querySelector('#kurang');
const kali = document.querySelector('#kali');
const bagi = document.querySelector('#bagi');

const result = document.querySelector('#result');

tambah.addEventListener('click', (e) => {
    e.preventDefault();

    const firstNumber = document.getElementById('firstNumber');
    const secondNumber = document.getElementById('secondNumber');

    const firstNumberValue = Number(firstNumber.value);
    const secondNumberValue = Number(secondNumber.value);
    const resultValue = Calculator.penjumlahan(firstNumberValue, secondNumberValue);
    result.textContent = resultValue;
});

kurang.addEventListener('click', (e) => {
    e.preventDefault();

    const firstNumber = document.getElementById('firstNumber');
    const secondNumber = document.getElementById('secondNumber');

    const firstNumberValue = Number(firstNumber.value);
    const secondNumberValue = Number(secondNumber.value);
    const resultValue = Calculator.pengurangan(firstNumberValue, secondNumberValue);
    result.textContent = resultValue;
});

bagi.addEventListener('click', (e) => {
    e.preventDefault();

    const firstNumber = document.getElementById('firstNumber');
    const secondNumber = document.getElementById('secondNumber');

    const firstNumberValue = Number(firstNumber.value);
    const secondNumberValue = Number(secondNumber.value);
    const resultValue = Calculator.pembagian(firstNumberValue, secondNumberValue);
    result.textContent = resultValue;
});

kali.addEventListener('click', (e) => {
    e.preventDefault();

    const firstNumber = document.getElementById('firstNumber');
    const secondNumber = document.getElementById('secondNumber');

    const firstNumberValue = Number(firstNumber.value);
    const secondNumberValue = Number(secondNumber.value);
    const resultValue = Calculator.perkalian(firstNumberValue, secondNumberValue);
    result.textContent = resultValue;
});
