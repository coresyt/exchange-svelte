<script lang="ts">
	import './app.css';
	import SvelteIcon from './components/SvelteIcon.svelte';
	import currency from './lib/currency';
	const currencys = Object.entries(currency)
	let fromCurrency: string
	let toCurrency: string
</script>

<main class="container box-border h-[500px] w-[350px] overflow-hidden">
	<section class="flex h-auto w-auto items-center justify-center gap-1">
		<a href="https://svelte.dev/docs" target="_blank" rel="noopener noreferrer">
			<SvelteIcon className="w-16 h-16 [&>g]:fill-svelteColor" />
		</a>
		<h1 class="text-left text-3xl font-bold [&>span]:font-mono [&>span]:text-svelteColor">
			Exchange Currency <span>Svelte</span>
		</h1>
	</section>
	<section class="flex gap-2 [&>div]:flex [&>div]:flex-col [&>div]:gap-2">
		<div>
			<select class="bg-zinc-800 border-none outline-none w-[170px] whitespace-nowrap text-ellipsis rounded-lg p-2">
				{#each currencys as curr}
					<option value={curr[0]}>{curr[1]}</option>
				{/each}
			</select>
			<input type="number" class="w-[170px] h-[150px] resize-none bg-zinc-800 rounded-lg outline-none border-none p-2" />
		</div>
		<div>
			<select class="bg-zinc-800 border-none outline-none w-[170px] whitespace-nowrap text-ellipsis rounded-lg p-2">
				{#each currencys as curr}
					<!-- {#if curr[1] === currency.}
						
					{/if} -->
					<option value={curr[0]}>{curr[1]}</option>
				{/each}
			</select>
			<div class="w-[170px] h-[150px] gap-[2px] bg-zinc-800 rounded-lg"></div>
		</div>
	</section>
</main>
