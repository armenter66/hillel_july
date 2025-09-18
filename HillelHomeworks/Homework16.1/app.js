function Student(dateBirth, name, LastName, scoreArray) {
	this.dateBirth = dateBirth;
	this.name = name;
	this.LastName = LastName;
	this.scoreArray = scoreArray;
	this.visits = new Array(25);
	this.current = 0;

	this.getStudentAge = function () {
		const date = new Date();
		const presentYear = date.getFullYear();

		const age = presentYear - this.dateBirth;

		return age;
	};

	this.getAvarageScore = function () {
		let sumofScore = 0;

		for (let i = 0; i < this.scoreArray.length; i++) {
			sumofScore += scoreArray[i];
		}

		const avarageScore = sumofScore / this.scoreArray.length;

		return avarageScore;
	};

	this.present = function () {
		if (this.current < this.visits.length) {
			this.visits[this.current] = true;
			this.current++;
		} else {
			console.log('All 25 index is full');
		}
	};

	this.absent = function () {
		if (this.current < this.visits.length) {
			this.visits[this.current] = false;
			this.current++;
		} else {
			console.log('All 25 index is full');
		}
	};

	this.summary = function () {
		const avarageScore = this.getAvarageScore();

		let visits = 0;
		let trueVisits = 0;

		for (let i = 0; i < this.visits.length; i++) {
			if (this.visits[i] !== undefined) {
				trueVisits++;
				if (this.visits[i] === true) {
					visits++;
				}
			}
		}

		const avarageVisits = trueVisits > 0 ? visits / trueVisits : 0;

		if (avarageScore > 90 && avarageVisits > 0.9) {
			return 'Молодець!';
		} else if (avarageScore > 90 || avarageVisits > 0.9) {
			return 'Добре, але можна краще';
		} else {
			return 'Редиска!';
		}
	};
}

const student1 = new Student(2005, 'Oleg', 'Recun', [100, 95, 96, 100, 90]);

const student2 = new Student(2008, 'Pasha', 'Vladov', [80, 95, 96, 100, 100]);

const student3 = new Student(2007, 'Max', 'Usupov', [70, 65, 66, 80, 90]);

student1.getStudentAge();
student1.getAvarageScore();
student1.present();
student1.absent();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();

student2.getStudentAge();
student2.getAvarageScore();
student2.present();
student2.absent();
student2.present();
student2.absent();
student2.present();
student2.absent();
student2.present();
student2.absent();
student2.present();
student2.absent();
student2.present();
student2.absent();
student2.present();
student2.absent();

student3.getStudentAge();
student3.getAvarageScore();
student3.present();
student3.absent();

console.log(student1.summary());
console.log(student2.summary());
console.log(student3.summary());
