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
