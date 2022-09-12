const students = [
    {
        name: "Tanya",
        course: 3,
        subjects: {
            math: [4, 4, 3, 4],
            algorithms: [3, 3, 3, 4, 4, 4],
            data_science: [5, 5, 3, 4],
        },
    },
    {
        name: "Victor",
        course: 4,
        subjects: {
            physics: [5, 5, 5, 3],
            economics: [2, 3, 3, 3, 3, 5],
            geometry: [5, 5, 2, 3, 5],
        },
    },
    {
        name: "Anton",
        course: 2,
        subjects: {
            statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
            english: [5, 3],
            cosmology: [5, 5, 5, 5],
        },
    },
];

/*Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - 
яка повертає список предметів для конкретного студента. Зверніть увагу 
– назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл */

function getSubjects(studentName) {
    let arr;
    for (let key in studentName.subjects) {
        arr = Object.keys(studentName.subjects).map((item) => {
            return item.replaceAll("_", "-").replace(item[0], item[0].toUpperCase());
        });
    }
    console.log(arr);
    return arr;
}
getSubjects(students[0]);

/* Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам
для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть 
до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :) */

function getAverageMark(obj) {
    let result;
    let leng = 0;
    for (let key in obj) {
        result = Object.values(obj.subjects)
            .flat()
            .reduce((acc, item, index, array) => {
                leng = array.length;
                return acc + item;
            });
    }

    return (result / leng).toFixed(2);
}
getAverageMark(students[0]);

/*Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79}
– яка повертає інформацію загального виду по переданому студенту 
(вам знадобиться функція з попереднього завдання). ПОвинна бути виведена інформація: курс, ім'я, середня оцінка. */

function getStudentInfo(info) {
    let unit = {};
    for (let key in info) {
        unit = {
            course: info.course,
            name: info.name,
            averageMark: getAverageMark(info),
        };
    }
    console.log(unit);
    return unit;
}
getStudentInfo(students[0]);

/*Ствроіть функцію getStudentsNames(students) --> 
["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку. */

function getStudentsNames(obj) {
    const arrName = [];
    for (let key in obj) {
        arrName.push(obj[key].name);
    }
    console.log(arrName);
    return arrName.sort();
}
getStudentsNames(students);

/*Створіть функцію getBestStudent(students) --> "Anton" 
– яка повертає кращого студента зі списку по показнику середньої оцінки. */

function getBestStudent(best) {
    const bestName = best.reduce((acc, item) => {
        return getAverageMark(acc) > getAverageMark(item) ? acc : item;
    });
    console.log(bestName.name);
    return bestName.name;
}
getBestStudent(students);

/*Створіть функцію calculateWordLetters("тест") --> 
{ "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень. */

function calculateWordLetters(word) {
    let result;
    const words = word.toLowerCase().split("");
    result = words.reduce((acc, item) => {
        acc[item] ? (acc[item] += 1) : (acc[item] = 1);
        return acc;
    }, {});
    console.log(result);
    return result;
}
calculateWordLetters("Тест");
