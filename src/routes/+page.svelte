<script>
	import HeadlineFull from '$lib/svg-text/headline-full.svelte';
	import Pen from '$lib/svg-text/pen.svelte';
	import Paper from '$lib/svg-text/paper.svelte';
</script>

<div class="w-full relative pb-16 px-8 pt-8 bg-[url('/background.svg')] bg-no-repeat bg-bottom">
	<!-- <img src="/background.svg" class="fill-swiss-coffee-800 opacity-20 absolute w-full bottom-0 object-none" /> -->
	<div
		class="flex flex-col gap-8 w-full h-full max-w-screen-xl mx-auto justify-stretch items-stretch"
	>
		<div class="flex flex-col flex-1 justify-center min-h-96">
			<HeadlineFull class="w-full" />
		</div>
		<div class="flex self-end justify-self-end text-right flex-col gap-3">
			<h1 class="text-8xl font-bold">Loïc Payol</h1>
			<div class="text-2xl font-normal">Web & Blockchain Engineer</div>
		</div>
	</div>
</div>

<div class="mx-auto px-4 max-w-screen-xl mt-4 flex flex-col">
	<h2 class="text-3xl md:text-6xl mb-2">It all starts with a <nobr><Pen /> & <Paper /></nobr></h2>
	<div class="max-w-prose text-xl space-y-2">
		<p>
			Away from screens and pixels, I find the clearest path to bringing thoughts to life. Here, I
			can shape ideas freely – bending, erasing, and redrawing them in the endless space of
			creativity. But ideas alone aren't enough. They need a purpose, they need to be shared, they
			need to make a difference.
		</p>
		<p>
			<strong>That's where you come in.</strong> Bring your projects, your hopes, and your dreams. Hand
			in hand, we can turn bold ideas into reality, change the world for the better, teach others, and
			give back to our communities.
		</p>
		<p class="font-normal text-2xl pt-2">
			Together, we can turn visionary ideas into groundbreaking realities.
		</p>
	</div>
</div>
