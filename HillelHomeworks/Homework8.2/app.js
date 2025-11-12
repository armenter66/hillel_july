// Задание:

// 1. С помощью filter выбрать только книги жанра "programming".
// 2. С помощью map получить массив только с названиями этих книг.
// 3. С помощью reduce посчитать общую стоимость выбранных книг.

const books = [
	{ title: 'JS для начинающих', price: 500, genre: 'programming' },
	{ title: 'CSS в деталях', price: 300, genre: 'design' },
	{ title: 'React быстро', price: 800, genre: 'programming' },
];

const programsBooks = books.filter((book) => {
	if (book.genre === 'programming') {
		return book;
	}
});

const programsArray = programsBooks.map((book) => book.title);

const priceOfBooks = programsBooks.reduce(
	(prevBook, currentBook) => prevBook.price + currentBook.price
);

console.log(programsBooks);
console.log(programsArray);
console.log(priceOfBooks);

// Задание:

// 1. Используя map и стрелочные функции, получить массив объектов с именем и средним баллом студента.
// 2. Отфильтровать тех, у кого средний балл меньше 4.5.

const students = [
	{ name: 'Аня', grades: [5, 4, 4, 5] },
	{ name: 'Петя', grades: [3, 4, 4, 3] },
	{ name: 'Ира', grades: [5, 5, 5, 5] },
];

const resultOfStudents = students.map((student) => {
	let averagePoint = 0;
	for (let i = 0; i < student.grades.length; i++) {
		averagePoint += student.grades[i] / student.grades.length;
	}

	return { name: student.name, averagePoint: averagePoint };
});

const filterStudents = resultOfStudents.filter(
	(student) => student.averagePoint < 4.5
);

console.log(resultOfStudents);
console.log(filterStudents);

// Задание:
// Реализовать метод increment, который увеличивает value на 1 каждую секунду, используя стрелочную функцию внутри setInterval(придется погуглить этот метод) для сохранения контекста this.

const counter = {
	value: 0,
	increment() {
		setInterval(() => {
			this.value++;
			console.log(this.value);
		}, 1000);
	},
};
counter.increment();

// Задание:

// 1. С помощью map создать новый массив, где к каждому товару добавлено поле total = quantity * price.
// 2. С помощью reduce найти общую стоимость всех товаров.

const items = [
	{ name: 'apple', quantity: 2, price: 30 },
	{ name: 'banana', quantity: 5, price: 10 },
	{ name: 'orange', quantity: 3, price: 20 },
];

const newItems = items.map((item) => {
	let total = item.quantity * item.price;
	return { name: item.name, total: total };
});

const sumofItems = newItems.reduce(
	(sum, currentItem) => sum + currentItem.total,
	0
);

console.log(newItems);
console.log(sumofItems);

// Задание:

// 1. С помощью filter оставить только слова, начинающиеся на букву "a".
// 2. С помощью reduce сгруппировать все слова по первой букве в объект, где ключ — буква, значение — массив слов.

const words = ['apple', 'banana', 'avocado', 'blueberry', 'apricot'];

const filterWords = words.filter((word) => {
	if (word[0] === 'a') {
		return word;
	}
});

console.log(filterWords);

const newWords = words.reduce((prevWord, currentWord) => {
	const firstLetter = currentWord[0];
	if (!prevWord[firstLetter]) {
		prevWord[firstLetter] = [];
	}
	prevWord[firstLetter].push(currentWord);
	return prevWord;
}, {});

console.log(newWords);
