// place files you want to import through the `$lib` alias in this folder.
export default async function getExChange() {
	const url =
		'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP';
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': ''
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}
