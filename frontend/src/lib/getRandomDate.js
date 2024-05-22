const getRandomDate = () => {
	const start = new Date();
	const end = new Date();
	end.setFullYear(start.getFullYear() - 1);

	const randomTime =
		start.getTime() + Math.random() * (end.getTime() - start.getTime());
	const randomDate = new Date(randomTime);

	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	return randomDate.toLocaleDateString('en-US', options);
};

const randomDate = getRandomDate();

export default randomDate;
