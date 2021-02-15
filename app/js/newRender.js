const main = document.querySelector('main');
const p = console.log;

const div = className => {
	const div = document.createElement('div');
	div.classList.add(className);

	return div;
};

const container = div('container');
const digitBox = div('digit-box');
const digitBits = Array(7)
	.fill('box')
	.map((item, i) => {
		const bit = div(`${item}${i}`);
		bit.setAttribute('data-number', `${i}`);
		bit.style.backgroundColor = 'rgba(193, 21, 21, 0.76)';
		bit.style.boxShadow = '2px 2px 10px rgba(255, 0, 0, 0.7)';
		bit.style.borderRadius = '40%';
		return bit;
	});
digitBits.forEach(item => digitBox.append(item));
container.append(digitBox);
main.append(container);

const digitalNumbers = [
	[1],
	[0, 1, 2, 3, 5],
	[3, 6],
	[3, 5],
	[0, 2, 5],
	[4, 5],
	[4],
	[1, 2, 3, 5],
	[],
	[5],
];

window.addEventListener('keydown', e => {
	let key = e.key;
	digitBits.forEach(bit => {
		bit.style.backgroundColor = 'rgba(193, 21, 21, 0.76)';
		bit.style.boxShadow = '2px 2px 10px rgba(255, 0, 0, 0.7)';
		bit.style.borderRadius = '40%';
	});

	for (let i = 0; i <= 9; i++) {
		if (key == i) {
			10;
			digitalNumbers[i].map(item => {
				digitBits.forEach(bit => {
					if (item == bit.getAttribute('data-number')) {
						bit.style.backgroundColor = 'transparent';
						bit.style.boxShadow = 'none';
					}
				});
			});
		}
	}
});
