import Calculator from "../public/calculator";

describe('Calculator', () => {
    const firstNumber = 10;
    const secondNumber = 5;

    const firstString = '10';
    const secondString = '5';

    it('Operasi Penjumlahan', () => {
        const result = Calculator.penjumlahan(firstNumber, secondNumber);
        expect(result).toBe(15);
    });

    it('Operasi Pengurangan', () => {
        const result = Calculator.pengurangan(firstNumber, secondNumber);
        expect(result).toBe(5);
    });

    it('Operasi Perkalian', () => {
        const result = Calculator.perkalian(firstNumber, secondNumber);
        expect(result).toBe(50);
    });

    it('Operasi Pembagian', () => {
        const result = Calculator.pembagian(firstNumber, secondNumber);
        expect(result).toBe(2);
    });

    it('Mengembalikan error ketika memasukkan nilai string', () => {
        expect(() => Calculator.penjumlahan(firstString, secondString)).toThrow();
        expect(() => Calculator.pengurangan(firstString, secondString)).toThrow();
        expect(() => Calculator.perkalian(firstString, secondString)).toThrow();
        expect(() => Calculator.pembagian(firstString, secondString)).toThrow();
    });
});


