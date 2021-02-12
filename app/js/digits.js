const main = document.querySelector('main');
const p = console.log;

const div = className => {
	const x = document.createElement('div');
	x.classList.add(className);

	return x;
};

// ************************************************************
//  SETTING BACKGROUND OF UNUSED STRIPES

const setBlackBg = (arr, stripes) => {
	arr.forEach(stripe => {
		stripes[stripe].style.backgroundColor = 'transparent';
		stripes[stripe].style.boxShadow = 'none';
	});
};

const setBlackbg2 = (arr, stripes) => {
	stripes[arr].style.backgroundColor = 'transparent';
	stripes[arr].style.boxShadow = 'none';
};

// *************************************************************
// THE MAIN FUNCTION

const renderDigits = () => {
	const container = div('container');
	const digitBox = div('digit-box');
	const bits = new Array(7).fill().map(renderBits);
	bits.forEach(bit => digitBox.append(bit));
	getNumbers(bits);

	container.append(digitBox);

	return container;
};

// ***************************************************************
//  SETTING UP THE STRIPES WITH MAP METHOD

const renderBits = (_, i) => {
	const box = div(`box${i}`);
	box.classList.add('box');
	box.style.backgroundColor = 'rgba(193, 21, 21, 0.76)';

	return box;
};

// *********************************************************8
//  LISTENING TO KEYDOWN EVENTS
const getNumbers = stripes => {
	const counter = 7;
	const stripeArray = new Array(counter).fill().map((_, i) => i);
	window.addEventListener('keydown', e => {
		let key = e.key;
		stripeArray.forEach(
			n => (stripes[n].style.backgroundColor = 'rgba(193, 21, 21, 0.76)')
		);
		switch (key) {
			case '0':
				const num0 = stripeArray.filter(n => n === 1);
				setBlackbg2(num0, stripes);

				break;
			case '1':
				const num1 = stripeArray.filter(n => n !== 4 && n !== 6);
				setBlackBg(num1, stripes);

				break;
			case '2':
				const num2 = stripeArray.filter(n => n == 3 || n == 6);
				setBlackBg(num2, stripes);

				break;
			case '3':
				const num3 = stripeArray.filter(n => n == 3 || n == 5);
				setBlackBg(num3, stripes);

				break;
			case '4':
				const num4 = stripeArray.filter(
					n => n == 0 || n == 2 || n == 5
				);
				setBlackBg(num4, stripes);

				break;
			case '5':
				const num5 = stripeArray.filter(n => n == 4 || n == 5);
				setBlackBg(num5, stripes);

				break;
			case '6':
				const num6 = stripeArray.filter(n => n === 4);
				setBlackbg2(num6, stripes);

				break;
			case '7':
				const num7 = stripeArray.filter(n => n > 0 && n < 6 && n !== 4);
				setBlackBg(num7, stripes);
				break;

			case '9':
				const num9 = stripeArray.filter(n => n === 5);
				setBlackbg2(num9, stripes);
				break;
			case 'Enter':
				const enter = stripeArray.filter(n => n === 4 || n === 6);
				setBlackBg(enter, stripes);

				break;
			default:
				const error = stripeArray.filter(n => n !== 2);
				setBlackBg(error, stripes);

				return;
		}
	});
};

main.append(renderDigits());
