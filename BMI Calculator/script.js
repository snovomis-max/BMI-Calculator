function calculateBMI() {
    const weight = document.querySelector('#weight').value;
    const height = document.querySelector('#height').value / 100;
    if (!weight || !height || weight <= 0 || height <= 0) {
        document.querySelector('#bmiResult').textContent = 'Введи коректні дані!';
        document.querySelector('#bmiDesc').textContent = '';
        return;
    }
    const bmi = (weight / (height * height)).toFixed(1);
    document.querySelector('#bmiResult').textContent = `Твій BMI: ${bmi}`;
    let desc = '';
    if (bmi < 18.5) desc = 'Недостатня вага';
        else if (bmi < 25) desc = 'Норма';
        else if (bmi < 30) desc = 'Надмірна вага';
        else desc = 'Ожиріння';
        document.querySelector('#bmiDesc').textContent = desc;
}