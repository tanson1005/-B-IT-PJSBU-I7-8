document.getElementById('function').addEventListener('change', function() {
    if (this.value === 'swap') {
        document.getElementById('swapInputs').style.display = 'block';
    } else {
        document.getElementById('swapInputs').style.display = 'none';
    }
});

function calculate() {
    const numbers = document.getElementById('numbers').value.split(',').map(Number);
    const numbers2 = document.getElementById('numbers2').value.split(',').map(Number);
    const functionType = document.getElementById('function').value;
    let positions;
    if (functionType === 'swap') {
        positions = document.getElementById('positions').value.split(',').map(Number);
    }
    let result;
    switch (functionType) {
        case 'sum':
            result = sumPositive(numbers);
            break;
        case 'count':
            result = countPositive(numbers);
            break;
        case 'smallest':
            result = smallestNumber(numbers);
            break;
        case 'smallestPositive':
            result = smallestPositiveNumber(numbers);
            break;
        case 'lastEven':
            result = lastEvenNumber(numbers);
            break;
        case 'swap':
            result = swapValues(numbers, positions);
            break;
        case 'sort':
            result = sortArray(numbers);
            break;
        case 'firstPrime':
            result = firstPrimeNumber(numbers);
            break;
        case 'countIntegers':
            result = countIntegers(numbers2);
            break;
        case 'comparePosNeg':
            result = comparePositiveNegative(numbers);
            break;
        default:
            result = 'Hàm không hợp lệ';
    }
    document.getElementById('result').innerHTML = result;
}

function sumPositive(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum += numbers[i];
        }
    }
    return sum;
}

function countPositive(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            count++;
        }
    }
    return count;
}

function smallestNumber(numbers) {
    let smallest = Number.MAX_VALUE;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    return smallest;
}

function smallestPositiveNumber(numbers) {
    let smallest = Number.MAX_VALUE;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0 && numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    return smallest === Number.MAX_VALUE ? 'Không có số dương' : smallest;
}

function lastEvenNumber(numbers) {
    let lastEven = Number.MIN_VALUE;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            lastEven = numbers[i];
        }
    }
    return lastEven === Number.MIN_VALUE ? 'Không có số chẵn' : lastEven;
}

function swapValues(numbers, positions) {
    if (positions[0] >= numbers.length || positions[1] >= numbers.length) {
        return 'Vị trí không hợp lệ';
    }
    const temp = numbers[positions[0]];
    numbers[positions[0]] = numbers[positions[1]];
    numbers[positions[1]] = temp;
    return numbers;
}

function sortArray(numbers) {
    return numbers.sort((a, b) => a - b);
}

function firstPrimeNumber(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (isPrime(numbers[i])) {
            return numbers[i];
        }
    }
    return 'Không có số nguyên tố';
}

function countIntegers(numbers2) {
    let count = 0;
    for (let i = 0; i < numbers2.length; i++) {
        if (Number.isInteger(numbers2[i])) {
            count++;
        }
    }
    return count;
}

// function comparePositiveNegative(numbers, numbers2) {
//     const positiveCount = countPositive(numbers);
//     const negativeCount = countPositive(numbers2);
//     if (positiveCount > negativeCount) {
//         return 'Số Dương lớn hơn';
//     } else if (positiveCount < negativeCount) {
//         return 'Số Âm lớn hơn';
//     } 
//     else {
//         return 'Cả hai bằng nhau';
//     }
// }
function comparePositiveNegative(numbers) {
    let positiveCount = 0;
    let negativeCount = 0;

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positiveCount++;
        } else if (numbers[i] < 0) {
            negativeCount++;
        }
    }

    if (positiveCount > negativeCount) {
        document.getElementById('result').innerHTML = 'Số Dương lớn hơn';
        return 'Số Dương lớn hơn';
    } else if (positiveCount < negativeCount) {
        document.getElementById('result').innerHTML = 'Số Âm lớn hơn';
        return  'Số Âm lớn hơn';
    } else {
        document.getElementById('result').innerHTML = 'Số Dương và số Âm bằng nhau';
        return  'Số Dương và số Âm bằng nhau';
    }
}
function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

document.getElementById("btn-tt").onclick = calculate;