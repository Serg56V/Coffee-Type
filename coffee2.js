let radios = document.querySelectorAll('input[type="radio"]');
let button = document.querySelector('#button');
let coffeeTitle = document.querySelector('.coffee__title');
let coffeeCup = document.querySelectorAll('.coffee__cup_type');
const description = document.querySelector('.description');
//console.log(radios);
//console.log(button);
//console.log(coffeeTitle);
//console.log(coffeeCup);


/*
	for (cupType in coffeeCup) {
		if (coffeeCup[cupType].className == 'coffee__cup_type americano' ) {
			coffeeCup.classList.add('active');
		}
		//console.log(coffeeCup[cupType].className);
	}
 */


button.addEventListener('click', function(event) {
	event.preventDefault(); // Отменяем стандартную отправку по кнопке
});
button.addEventListener('click', 
	function() {
		for (let radio of radios) {
			if (radio.checked) {
				coffeeTitle.textContent = radio.value;
				switch (radio.value) {
					case 'Espresso':
						for (let i = 0; i <=coffeeCup.length-1; i++) {
							if (i == 0) {
								coffeeCup[i].classList.add('active');
							} else {
								coffeeCup[i].classList.remove('active');
							}
						}
						description.textContent = 'Эспрессо (также Normale) – напиток приготовленный с помощью рожковой эспрессо-машины. Принципиальные различия во вкусе достигаются благодаря более длительному времени экстракции, за которое в чашку попадает и большее количество кофеина.';
						break;
					case 'Doppio':
						for (let i = 0; i <=coffeeCup.length-1; i++) {
							if (i == 1) {
								coffeeCup[i].classList.add('active');
							} else {
								coffeeCup[i].classList.remove('active');
							}
						}
						description.textContent = 'Доппио (en. double shot) – готовится как двойная порция эспрессо, две закладки кофе и два объема воды. На выходе 60 мл напитка. Стандартный объем для оценки качества кофе на соревнованиях бариста.';
						break;
					case 'Tripplo':
						for (let i = 0; i <=coffeeCup.length-1; i++) {
							if (i == 2) {
								coffeeCup[i].classList.add('active');
							} else {
								coffeeCup[i].classList.remove('active');
							}
						}
						description.textContent = 'Триппло – готовится как тройная порция эспрессо, три закладки кофе и три объема воды. На выходе 90 мл напитка.';
						break;
					
					case 'Americano':
						for (let i = 0; i <=coffeeCup.length-1; i++) {
							if (i == 3) {
								coffeeCup[i].classList.add('active');
							} else {
								coffeeCup[i].classList.remove('active');
							}
						}
						description.textContent = 'Американо – эспрессо обычный или двойной, в который после приготовления добавили (30–470 мл) горячей воды. Крепость зависит от количества шотов эспрессо. В Италии и Франции даже не пытайтесь просить Американо, вам принесут лунго.';
						break;
					case 'Capuccino':
						for (let i = 0; i <=coffeeCup.length-1; i++) {
							if (i == 4) {
								coffeeCup[i].classList.add('active');
							} else {
								coffeeCup[i].classList.remove('active');
							}
						}
						description.textContent = 'Капучино (it. Cappuccino, fr. Café crème) – эспрессо со вспененным молоком. Название происходит от ит. слова “капуцин” – отсылка к характерному красно-коричневому цвету роб у монашеского ордена капуцинов. В отличие от латте, подается, как и эспрессо, в предварительно прогретой кофейной чашке на 150–180 мл. Если сравнивать латте и капучино – молока больше в латте, о нём дальше. Соотношение частей эспрессо, молока и пенки 1:1:1';
						break;
					case 'Latte':
						for (let i = 0; i <=coffeeCup.length-1; i++) {
							if (i == 5) {
								coffeeCup[i].classList.add('active');
							} else {
								coffeeCup[i].classList.remove('active');
							}
						}
						description.textContent = 'Латте (it. Caffellatte, fr. Grand crème, de. Milchkaffee) – международный напиток из эспрессо со вспененным молоком. В 240 мл стакан добавляют шот эспрессо, который заливают молоком с молочной пенкой. Толщина пенки 12мм. В отличие от капучино, в латте кроме пенки есть еще и слой молока. Будьте внимательны, когда заказываете напиток в Европе. Сказав просто “Латте” – в Италии вам подадут молоко, во Франции – кофе с молоком. Соотношение эспрессо, молока и пенки 1:3-5:1';
						break;
					case 'Ristretto':
						for (let i = 0; i <=coffeeCup.length-1; i++) {
							if (i == 6) {
								coffeeCup[i].classList.add('active');
							} else {
								coffeeCup[i].classList.remove('active');
							}
						}
						description.textContent = 'Ристрето (it. Ristretto, fr. Café serré, также Corto) – эспрессо заваренный из того же количества кофе и за то же время экстракции, но с использованием вдвое меньшего количества воды. Для ристретто обычно используют более мелкий помол. Имеет более концентрированный вкус, но меньше содержание кофеина. Подается со стаканом воды. 15 мл. Соотношения воды и кофе 1:1';
						break;
					case 'Lungo':
						for (let i = 0; i <=coffeeCup.length-1; i++) {
							if (i == 7) {
								coffeeCup[i].classList.add('active');
							} else {
								coffeeCup[i].classList.remove('active');
							}
						}
						description.textContent = 'Лунго (it. Lungo, fr. Caffe alonge) – похож на Американо по пропорции воды к кофе. Однако, этот объем воды используется при заваривании (пропускается через кофе), в противоположность Американо, где вода заливается в готовый эспрессо. Соответственно Лунго выходит меньше по объему чем Американо. Менее крепкий, чем доппио, но более крепкий по сравнению с эспрессо.90 мл. Соотношение воды к кофе 1:4';
						break;
				}
			}
		}
	}
);



 // Перезагрузка с новыми данными
 //     for (let item of document.querySelectorAll("input")) {
 //     item.addEventListener("input", multiplication);
   //   }
