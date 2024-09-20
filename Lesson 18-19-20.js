// 10 EASY TASKS

//1
let number = prompt("Введите любое число:");
if (number % 2 === 0) {
    alert("Число четное");
} else {
    alert("Число нечетное");
}
//2
let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");
if (num1 > num2) {
    alert("Наибольшее число: " + num1);
} else if (num2 > num1) {
    alert("Наибольшее число: " + num2);
} else {
    alert("Оба числа равны");
}
//3
let year = prompt("Введите год:");
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    alert("Год високосный");
} else {
    alert("Год не високосный");
}
//4
let variable = prompt("Введите значение переменной:");
if (typeof variable === "string" && !isNaN(variable)) {
    variable = parseFloat(variable);
}
if (typeof variable === "string") {
    alert("Переменная является строкой");
} else if (typeof variable === "number") {
    alert("Переменная является числом");
} else {
    alert("Переменная не является строкой или числом");
}
//5
let hour = prompt("Введите текущий час 0-24:");
if (hour >= 6 && hour < 12) {
    alert("Доброе утро");
} else if (hour >= 12 && hour < 18) {
    alert("Добрый день");
} else if (hour >= 18 && hour < 24) {
    alert("Добрый вечер");
} else if (hour >= 0 && hour < 6) {
    alert("Доброй ночи");
} else {
    alert("Неправильный ввод. Введите число от 0 до 23.");
}
//6
let num3 = prompt("Введите первое число:");
let num4 = prompt("Введите второе число:");
let num5 = prompt("Введите третье число:");
let max = Math.max(num3, num4, num5);
alert("Наибольшее число: " + max);
//7
let login = "admin";
let password = "12345";
let userLogin = prompt("Введите логин:");
let userPassword = prompt("Введите пароль:");
if (userLogin === login && userPassword === password) {
    alert("Доступ разрешен");
} else {
    alert("Доступ запрещен");
}
//8
let monthNumber = prompt("Введите номер месяца (1-12):");
let months = [
    "Январь", "Февраль", "Март", "Апрель", 
    "Май", "Июнь", "Июль", "Август", 
    "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
if (monthNumber >= 1 && monthNumber <= 12) {
    alert("Месяц: " + months[monthNumber - 1]);
} else {
    alert("Неправильный номер месяца. Введите число от 1 до 12.");
}
//9
let age = prompt("Введите ваш возраст:");
if (age < 12) {
    alert("Детский возраст");
} else if (age >= 12 && age < 18) {
    alert("Подростковый возраст");
} else if (age >= 18 && age < 65) {
    alert("Взрослый возраст");
} else if (age >= 65) {
    alert("Пожилой возраст");
} else {
    alert("Некорректный ввод");
}
//10
let month = prompt("Введите номер месяца (от 1 до 12):");
if (month === 12 || month === 1 || month === 2) {
    alert("Зима");
} else if (month >= 3 && month <= 5) {
    alert("Весна");
} else if (month >= 6 && month <= 8) {
    alert("Лето");
} else if (month >= 9 && month <= 11) {
    alert("Осень");
} else {
    alert("Некорректный месяц");
}

// 5 MEDIUM TASKS

//1
let guests = prompt("Введите количество гостей:");
let cuts;
if (guests === 1) {
    cuts = 0;
} else if (guests % 2 === 0) {
    cuts = guests / 2; 
} else {
    cuts = guests;
}
alert("Минимальное количество разрезов: " + cuts);

//2
let apples = prompt("Введите количество яблок:");
if (apples % 3 === 0) {
    alert("Яблоки можно разделить поровну между тремя детьми.");
} else {
    alert("Яблоки нельзя разделить поровну между тремя детьми.");
}
//3
let a = prompt("Введите длину стороны a:");
let b = prompt("Введите длину стороны b:");
let c = prompt("Введите длину стороны c:");
if (a + b > c && a + c > b && b + c > a) {
    alert("Да");
} else {
    alert("Нет");
}
//4
if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        alert("Равносторонний");
    } else if (a === b || a === c || b === c) {
        alert("Равнобедренный");
    } else {
        alert("Разносторонний");
    }
} else {
    alert("Несуществующий");
}
//5
let weight = prompt("Введите вес товара (в кг):");
let country = prompt("Введите страну доставки (например, США):");
let cost;
if (weight <= 1) {
    cost = 10;
} else if (weight > 1 && weight <= 5) {
    if (country === "США" || country === "USA") {
        cost = 20;
    } else {
        cost = 30;
    }
} else if (weight > 5) {
    cost = 50;
} else {
    cost = "Некорректный ввод";
}
alert("Стоимость доставки: " + cost + " долларов");










