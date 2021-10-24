// Всем привет 

// вам задание по прошлым темам 

// 1. В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// 2. В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

// 3. Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

let day = +prompt('day, 1 / 31')

if (day <= 10) {
    alert('1 декада');
}
if (day > 10 && day <= 20) {
    alert('2 декада');
}
if (day >= 20 && day <= 31) {
    alert('3 декада');
}
if(day > 31) {
    alert('error')
}

//

let month = +prompt('month, 1 / 12')

if (month >= 1 && month <= 2) {
    alert('Зима')
}
if (month === 12) {
    alert('Зима')
}
if (month > 2 && month <= 5) {
    alert('Весна')
}
if (month > 5 && month <= 8) {
    alert('Leto')
}
if (month > 8 && month <= 11) {
    alert('Osen')
}
if(month > 12) {
    alert('error')
}

//

let random_number = prompt('random_number 12345')

if (random_number.trim().charAt() === '1') {
    alert('yes')
} else if (random_number.trim().charAt() === '2') {
    alert('yes')
}
else if (random_number.trim().charAt() === '3') {
    alert('yes')
}
else {
    alert('no')
}