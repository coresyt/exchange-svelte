import type { ExchangeCurrencyType } from '../types';

export const el = (element: string) => document.getElementById(element)

export async function getExChange({
	to,
	from,
	count
}: {
	to: string;
	from: string;
	count: string | number;
}): Promise<ExchangeCurrencyType> {
	const URL_API = `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${from}&to=${to}&amount=${count}`;
	const res = await fetch(URL_API, {
		headers: {
			'X-RapidApi-Key': import.meta.env.VITE_API_KEY
		}
	});
	const json: Promise<ExchangeCurrencyType> = await res.json();
	return json;
}
