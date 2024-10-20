<script>
	import HeadlineFull from '$lib/svg-text/headline-full.svelte';
</script>

<div class="w-full relative pb-16 px-8 pt-8 bg-[url('/background.svg')] bg-no-repeat bg-bottom">
	<!-- <img src="/background.svg" class="fill-swiss-coffee-800 opacity-20 absolute w-full bottom-0 object-none" /> -->
	<div
		class="flex flex-col gap-8 w-full h-full max-w-full md:max-w-screen-xl mx-auto justify-stretch items-stretch"
	>
		<div class="flex flex-col flex-1 justify-center min-h-96">
			<HeadlineFull class="w-full" />
		</div>
		<div class="flex self-end justify-self-end text-right flex-col gap-3">
			<h1 class="text-8xl font-bold">Loïc Payol</h1>
			<div class="text-2xl">Web & Blockchain Engineer</div>
		</div>
	</div>
</div>
