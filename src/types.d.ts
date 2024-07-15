export interface ExchangeCurrencyType {
	success: boolean;
	query: {
		from: string;
		to: string;
		amount: number;
	};
	info: {
		timestamp: number;
		rate: number;
	};
	date: Date;
	result: number;
}
