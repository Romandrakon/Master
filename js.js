function myFirstApp(name, age) {

	document.write ("Привет, меня зовут " + name + " и это моя первая программа! <br/>");

	function showSkills() {
		let skills = ["HTML", "CSS", "JS", "JQUERY"];

		for (let i=0; i < skills.length; i++) {
         document.write(skills[i] + "<br/>");
		}
	}

	showSkills();

	function checkAge() {
		if (age > 18) {
			document.write("Вы прошли долгий путь <br/>");
		} else {
			document.write("У вас все еще впереди <br/>");
		}
	}
	checkAge();

	function calcPow(num) {
		document.write("Квадрат числа- " + num + " равен: " + num * num);
	}
	calcPow(5);
}

myFirstApp("Роман Сухачев", 27);