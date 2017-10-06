setTimeout(function (){
	location.href = 'rocket.html';
}, 2000);
var car={
	make: 'VW',
	type: 'polo',
	color: 'Blue',
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: ['seat 1','seat 2', 'seat 3', 'seat 4'],
	turnOn: function () {
		this.isTurnedOn = true;

	},
	fly: function () {
		alert('fly');
	},
	switchCar: function (carState) {
		console.log('the car is ' + carState);
		if (carState == 'on' || carState == 'On') {
			this.isTurnedOn = true;
		} else if (carState == 'off' || carState == 'Off') {
			this.isTurnedOn = false;
		} else {
			alert('wrong word no action done');
		};

	}
};

console.log('hello there friends')
