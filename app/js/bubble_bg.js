const getBubbles = async () => {
	const response = await fetch('Json/bubbles.json');

	if (response.status !== 200) {
		throw new Error('cannot fetch the data');
	}

	const data = await response.json();

	const { bubbles } = data;
	return data;
};
const myBubbles = async () => {
	try {
		const data = await getBubbles();
		renderData(data);
	} catch (err) {
		p('rejected:', err.message);
	}
};

window.addEventListener('DOMContentLoaded', () => myBubbles());

// *******************************************************
// *******************************************************
const renderData = ({ bubbles }) => bubbles.map(renderBg);

const renderBg = ({ left, top, opacity, size }) => {
	const div = document.createElement('div');
	div.style.left = left;
	div.style.top = top;
	div.style.opacity = opacity;
	div.style.width = size;
	div.style.height = size;
	div.style.position = 'absolute';
	div.style.borderRadius = '50%';
	div.style.backgroundColor = 'white';
	div.style.boxShadow =
		'inset 0 0 50px rgba(194, 188, 188, 0.479), 0 0 15px rgba(0,0,0,0.6)';
	div.style.filter = 'blur(2px)';

	main.append(div);

	return div;
};
