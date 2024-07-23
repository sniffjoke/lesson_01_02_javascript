//методы массивовю Полифилы
//push, pop, shift, unshift - мутабельные методы массива
//push - добавляет 1 и более элементов в конец массива

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const pushResult = names.push('1', {car: 'bmw'}, 3) // - возвращает длину массива
//
// console.log('names: ', names)
// console.log('pushResult: ', pushResult)

//pop - удаляет последний элемент массива

// const names2 = ['Alex', 'Bob', 'Ivan', 'Sasha']
// const names2Result = names2.pop()
//
// const arr1 = []
// const resultArr1 = arr1.pop()
//
// console.log(names2)
// console.log('names2Result: ', names2Result) // - возвращает удаленный элемент
// console.log('resultArr1: ', resultArr1)

// shift - удаляет первый элемент массива

// const names3 = ['Alex', 'Bob', 'Ivan', 'Sasha']
// const resultNames3 = names3.shift()
//
// const arr2 = []
// const resArr2 = arr2.shift()
//
// console.log('names3: ', names3)
// console.log('resultNames3: ', resultNames3) // - возвращает удаленный элемент
// console.log('resArr2: ', resArr2)

// unshift - добавляет 1 и более элементов в начало массива

// const names4 = ['Alex', 'Bob', 'Ivan', 'Sasha']
// const unshiftResult = names4.unshift('test value1', ['nre value 1', 'new value 2'], 3)
//
// console.log('names4: ', names4)
// console.log('unshiftResult: ', unshiftResult) // - возвращает длину массива

//////////////////////////////

//reverse() - меняет порядок элементов массива на обратный (мутабельным методом массива)

// const newArr = ['Alex', 'Bob', 'Ivan', 'Sasha']
// const reverseResult = newArr.reverse()
//
// console.log('newArr: ', newArr)
// console.log('reverseResult: ', reverseResult)

// split - метод для работы со строками

// получить на выходе массив
// const str = 'ab-cd-ef'
// const result = str.split('-')
// console.log(str)
// console.log(result)

// на выходе хочу получить каждый элемент отдельно
// const str2 = 'ab-cd-ef' //expected result: ['a', 'b', '-', 'c', 'd'...]
// const result2 = str2.split('')
// console.log(result2)

//лимиты в сплите

// const str3 = 'Hello new World!'
// const result3 = str3.split(' ', 2)
// console.log(result3) //[ 'Hello', 'new' ]

//пустой сплит
// const str4 = 'ab-cd-ef'
// const result4 = str4.split()
// console.log(result4) //[ 'ab-cd-ef' ]

//join - метод массива, объединяющий элементы в строку с указанным разделителем

// // объединим элементы в строку с разделителем "-"
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha']
// const result = names.join('-')
// console.log('result: ', result)
//
// //пустой join (по дефолту запятая)
// const names2 = ['Alex', 'Bob', 'Ivan', 'Sasha']
// const result2 = names2.join()
// const result3 = names2.join('')
// console.log(result2)
// console.log(result3)

// const telephoneNumber = '123456789'
// const reverseTelephoneNumber = telephoneNumber.split('').reverse().join('')
// console.log(reverseTelephoneNumber)

// const telephoneNumber = '123456789'
// const res = Array.from(telephoneNumber).reverse().join('')
// console.log(res)

//concat - метод массива (не мутирующий)

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3 = [5, 6];
//
// const result = arr1.concat(arr2, arr3, 'test value 1')
// console.log('arr1: ', arr1)
// console.log('result: ', result)

//concat быстрее spread оператора

//example 1
// const newArr1 = [1, 2];
// const newArr2 = [[3, 4], [5,6]];
// const result = newArr1.concat(newArr2)
// console.log(result)
//concat не раскрывает скобки

//flat
// const initialArr = [ 1, 2, [ 3, 4, ['test 1', 'test 2', [1, 2]] ], [ 5, 6 ] ]
// const res = initialArr.flat() //по дефолту раскроет только один уровень вложенности
// console.log('res: ', res)
// const res1 = initialArr.flat(Infinity) //откроет все уровни вложенности
// console.log(res1)

//Practical Task На выходе хочу собрать всю информацию с массива и получить на выходе один массив с информацией

// let usersFromAPI1 = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
// ];
//
// let usersFromAPI2 = [
//     { id: 3, name: 'Charlie' },
//     { id: 4, name: 'David' },
// ];
//
// const resultApi = usersFromAPI1.concat(usersFromAPI2)
// const resultApi2 = [...usersFromAPI1, ...usersFromAPI2]
// console.log(resultApi2)

//forEach -

//arr.forEach(function(el, index, arr) {})

// найти сумму элементов в массиве

// const arr = [1, 2, 3, 4, 5]
// let sum = 0
// arr.forEach(function(item) {
//     sum  = sum + item
// })
//
// console.log(sum)

// const arr = [1, 2, 3, 4, 5]
// arr.forEach(function(item, index, array) {
//     // console.log('el: ', item)
//     // console.log('index: ', index)
//     // console.log('array: ', array)
//     array[index] = item * 2
// })

// console.log('arr: ', arr)

//map - возвращает новый массивб принимает коллбек функцию и применяет эту коллбек функцию к каждому элементу массива

// const arr = [1, 2, 3, 4, 5]
// const res = arr.map((number) => {
//     console.log('number: ', number)
//     return number * 2
// })
//
// console.log(res)

//indexOf

// const arr = [1, 2, 3, 4, 5]
// const result = arr.indexOf(4) //возвращает индекс
// const isHere = arr.indexOf(10)
// console.log(result)
// console.log(isHere) // -1 в ответе сообщает, что элемента нет

// let allowedIPs = ['192.168.1.1', '192.168.1.2', '192.168.1.3']
// let userIP = '192.168.1.4'
// console.log(allowedIPs.indexOf(userIP) === -1 ? 'Access Granted' : 'Access Denied')

// При повторяющихся элементах возвращает первый найденный

//lastIndexOf - функционал такой же как и в indexOf только поиск элементов идет с конца

// const arr = [1, 2, 3, 4, 5, 3, 4, 3];

// const res = arr.lastIndexOf(3)
// console.log(res)

//find

// const words = ['spray', 'elite', 'exu', 'des', 'present']
// const res = words.find(item => {
//     return item.length == 3
// })
//
// console.log(res)

//findIndex

// const arr = [1, 2, 3, 4, 5];
// const res = arr.findIndex(el => {
//     return el%2 == 0
// })
// console.log(res)

//при ненахождении элемента возвращает "-1"

//includes - метод массива, который проверяет включено ли значение в массив

// const arr = [1, 2, 3];
// const res = arr.includes(3)
// console.log(res)

// const words = ['spray', 'elite', 'exu', 'des', 'pre']
// const res = words.filter(word => word.length ==  3) // [добавляет все найденные слова по условию]
// console.log(res)

//sort - мутабельный метод массива

// const numbers = [-1, 100, 2323, -3243532, 234, 45, 78, 0, 11]
// console.log(numbers.sort()) // сортирует по значению в таблице
// console.log(numbers)

//arr.sort(sortedFunction) - функция сравнения (сортировкиk)
// let numbers = [5, 2, 9, 1, 5, 6]
//числу а = 5
//числу b = 2
//применяем инструкцию a - b
//a(5) - b(2) = 3
//если получаем число положительное (результат > 0), то мы меняем местами (т.е. а должно быть перед b)
//если результат < 0, то b будет перед а
//если результат равен нулю, то порядок не меняется
// const res = numbers.sort((a, b) => a - b)
// const res2 = numbers.sort((a, b) => b - a)
// console.log(res)
// console.log(res2)

let words = ['яблоко', 'банан', 'апельсин']
// let result = words.sort((a, b) => a.localeCompare(b))
let result = words.sort((a, b) => b.localeCompare(a))
console.log(result)
