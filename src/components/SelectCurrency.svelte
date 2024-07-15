<script lang="ts">
	export let currency: string;
	export let currencys: [string, string][];
</script>

<select
	on:change={(e) => (currency = e.currentTarget.value)}
	class="w-[170px] text-ellipsis whitespace-nowrap rounded-lg border-none bg-zinc-800 p-2 outline-none"
	bind:value={currency}
>
	{#each currencys as [code, name]}
		<option value={code}>{name} ({code})</option>
	{/each}
</select>
