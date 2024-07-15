<script lang="ts">
	import type { EventHandler } from 'svelte/elements';
	import SelectCurrency from '../components/SelectCurrency.svelte';
	import currency from '../lib/currency';
	import { getExChange, el } from '../lib';

	const currencys = Object.entries(currency).sort();
	let fromCurrency = 'MXN';
	let toCurrency = 'USD';

	$: if (fromCurrency === toCurrency) {
		const nextIndex = (currencys.findIndex(([code]) => code === toCurrency) + 1) % currencys.length;
		toCurrency = currencys[nextIndex][0];
	}

	const propsSelectCurrecy = (currency: string) => {
		return { currencys, currency };
	};

	const handleSubmit: EventHandler<SubmitEvent, HTMLFormElement> = async (e) => {
		e.preventDefault();
		const $fromCurrency = el('from-currency') as HTMLInputElement;
		const $toCurrency   = el('to-currency');
		
		if (fromCurrency === toCurrency) return alert('Not is possibly exchange currency to currency equals');
		if (Boolean(/^[0-9]+$/.test(fromCurrency))) return alert('Not is possibly exchange currency to currency if es null');
		const dates = await getExChange({ to: toCurrency, from: fromCurrency, count: $fromCurrency.value });
		
		if ($toCurrency === null) return;
		if ($fromCurrency === null) return;
		$toCurrency.innerText = dates.result.toString();
	};
</script>

<section>
	<form class="flex flex-col items-center justify-center gap-2" on:submit={handleSubmit}>
		<div class="flex gap-2 [&>div]:flex [&>div]:flex-col [&>div]:gap-2">
			<div>
				<SelectCurrency {...propsSelectCurrecy(fromCurrency)} />
				<input
					type="number"
					id="from-currency"
					class="h-[50px] w-[170px] rounded-lg border-none bg-zinc-800 p-2 outline-none"
				/>
			</div>
			<div>
				<SelectCurrency {...propsSelectCurrecy(toCurrency)} />
				<div id="to-currency" class="h-[50px] w-[170px] gap-[2px] rounded-lg bg-zinc-800 p-2"></div>
			</div>
		</div>
		<button
			class="h-[50px] w-[170px] gap-[2px] rounded-lg bg-zinc-800 transition-colors duration-300 hover:bg-zinc-700 focus:bg-zinc-600"
			>Exchange currency's</button
		>
	</form>
</section>
