const Calculator = {
    penjumlahan(firstNumber, secondNumber) {
        if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
            throw new Error('Parameter firstNumber dan secondNumber harus berupa angka!');
        }
        return firstNumber + secondNumber;
    },
    pengurangan(firstNumber, secondNumber) {
        if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
            throw new Error('Parameter firstNumber dan secondNumber harus berupa angka!');
        }
        
        return firstNumber - secondNumber;
    },
    perkalian(firstNumber, secondNumber) {
        if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
            throw new Error('Parameter firstNumber dan secondNumber harus berupa angka!');
        }

        return firstNumber * secondNumber;
    },
    pembagian(firstNumber, secondNumber) {
        if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
            throw new Error('Parameter firstNumber dan secondNumber harus berupa angka!');
        }

        return firstNumber / secondNumber;
    }
};

export default Calculator;