import Calculator from "../public/calculator"

// TEST CASE
// 1. Dapat melakukan operasi aritmatika dengan baik
// 2. Mengembalikan error ketika memasukkan nilai string
// 3. Mengembalika error ketika memasukkan nilai NaN

describe('Calculator', () => {
    const firstNumber = 10;
    const secondNumber = 5;

    it ('Operasi Penjumlahan', () => {
        const result = Calculator.penjumlahan(firstNumber, secondNumber);
        expect(result).toBe(15);
    });

    it ('Operasi Pengurangan', () => {
       const result = Calculator.pengurangan(firstNumber, secondNumber);
       expect(result).toBe(5); 
    });

    it ('Operasi Perkalian', () => {
        const result = Calculator.perkalian(firstNumber, secondNumber);
        expect(result).toBe(50);
    });

    it ('Operasi Pembagian', () => {
        const result = Calculator.pembagian(firstNumber, secondNumber);
        expect(result).toBe(2);
    });
})