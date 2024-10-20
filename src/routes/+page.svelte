<script>
	import HeadlineFull from '$lib/svg-text/headline-full.svelte';
	import Pen from '$lib/svg-text/pen.svelte';
	import Paper from '$lib/svg-text/paper.svelte';
	import LetsGetInTouch from '$lib/svg-text/lets-get-in-touch.svelte';

	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import TransformativeTechnologies from '$lib/svg-text/transformative-technologies.svelte';
	import EmpoweringPeople from '$lib/svg-text/empowering-people.svelte';
</script>

<div
	class="w-full relative pb-16 px-8 pt-8 bg-[url('/background.svg')] bg-no-repeat bg-bottom mb-24 md:mb-0"
>
	<div class="flex flex-col gap-8 w-full max-w-screen-xl mx-auto justify-stretch items-stretch">
		<div class="flex flex-col justify-center md:min-h-96">
			<div class="hidden md:block -mx-6">
				<HeadlineFull class="w-full" />
			</div>
			<div class="md:hidden -mx-6">
				<TransformativeTechnologies class="w-full" />
				<EmpoweringPeople class="w-3/4 ml-auto -mt-16" />
			</div>
		</div>
		<div class="flex self-center md:self-end md:text-right flex-col gap-1 md:gap-3">
			<h1 class="text-6xl md:text-7xl lg:text-8xl font-bold">Loïc Payol</h1>
			<div class="text-2xl lg:text-3xl font-normal">Web & Blockchain Engineer</div>
		</div>
	</div>
</div>

<div class="space-y-24 mt-4">
	<div
		class="mx-auto px-4 max-w-screen-xl flex flex-col min-h-[60dvh] items-stretch justify-center"
	>
		<h2 class="text-3xl md:text-4xl lg:text-5xl text-center md:text-start mb-2">
			It all starts with a <nobr><Pen /> & <Paper /></nobr>
		</h2>
		<div class="max-w-prose text-xl space-y-2 text-justify md:text-start">
			<p>
				Away from screens and pixels, I find the clearest path to bringing thoughts to life. Here, I
				can shape ideas freely – bending, erasing, and redrawing them in the endless space of
				creativity. But ideas alone aren't enough. They need a purpose, they need to be shared, they
				need to make a difference.
			</p>
			<p>
				<strong>That's where you come in.</strong> Bring your projects, share your passion, show your
				drive. Hand in hand, we can turn bold ideas into reality, change the world for the better, teach
				others, and give back to our communities.
			</p>
			<p class="font-normal text-2xl pt-2">
				Together, we can turn visionary ideas into groundbreaking realities.
			</p>
		</div>
	</div>

	<div
		class="mx-auto px-4 max-w-screen-xl flex flex-col gap-8 min-h-[60dvh] items-center justify-center"
	>
		<h2 class="text-3xl md:text-4xl lg:text-5xl mb-2 lg:self-end">How may I help you?</h2>
		<div class="flex flex-wrap justify-center gap-8 text-center">
			<div class="flex flex-col gap-2 service">
				<h3>Full-stack Development</h3>
				<p>
					With a <strong>decade of experience in web technologies</strong>, I provide comprehensive
					full-stack development services with a strong emphasis on
					<strong>scalable back-end solutions</strong>. While my expertise centers on the JavaScript
					ecosystem, my versatility allows me to adapt swiftly to diverse environments. This
					flexibility enables me to <strong>consistently deliver high-quality results</strong> across
					a wide range of technological landscapes and project requirements.
				</p>
			</div>
			<div class="flex flex-col gap-2 lg:mt-8 service">
				<h3>Blockchain Engineering</h3>
				<p>
					I offer expert services in both <strong>EVM networks</strong> and
					<strong>Hyperledger Fabric</strong>. I provide comprehensive solutions across the full
					lifecycle of distributed applications, from architectural design to secure implementation,
					testing, and infrastructure management. <br /> With
					<strong>rare experience operating live production Hyperledger Fabric networks</strong>, I
					design complex network topologies, develop advanced chaincode data models, implement
					custom CI/CD pipelines, debug and optimize networks' TPS.
				</p>
			</div>
			<div class="flex flex-col gap-2 lg:mt-16 service">
				<h3>Strategy & Management</h3>
				<p>
					I help companies <strong>bridging technical and business domains</strong>, facilitating
					clear communication across diverse teams. My experience encompasses
					<strong>leading recruitment</strong>, <strong>managing cross-functional teams</strong>,
					and driving <strong>key technical and business decisions</strong>. With a product-first
					approach, I focus on the big picture, streamlining daily interactions to emphasize what
					truly matters:
					<strong>people, product, and core values</strong>, ensuring efficient and purposeful
					organizational growth.
				</p>
			</div>
		</div>
	</div>
</div>

<svg
	viewBox="0 0 100 100"
	preserveAspectRatio="none"
	fill="currentColor"
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	width="100%"
	height="160"
	class="bg-transparent text-brand-700 mt-16 lg:mt-48"
>
	<path d="M 0 100 V 40 L 100 100"></path>
	<path d="M 100 100 V 0 L 0 100" opacity="0.5"></path>
</svg>

<div class="flex min-h-screen bg-brand-700 py-24 px-16 items-center justify-center">
	<div class="w-full max-w-screen-xl lg:w-2/3 mx-auto space-y-16">
		<LetsGetInTouch class="mx-auto drop-shadow" />
		<div
			class="flex items-center gap-8 md:gap-12 lg:gap-16 text-swiss-coffee-200 w-4/5 max-h-80 justify-center mx-auto"
		>
			<a
				href="https://www.linkedin.com/in/loic-payol/"
				class="hover:text-swiss-coffee-300 hover:rotate-3 hover:scale-110 transition-all"
			>
				<FaLinkedin />
			</a>
			<a
				href="https://github.com/palra"
				class="hover:text-swiss-coffee-300 hover:-rotate-3 hover:scale-110 transition-all"
			>
				<FaGithub />
			</a>
		</div>
	</div>
</div>

<style>
	.service {
		@apply max-w-96 shrink grow basis-80 lg:basis-60;

		& > h3 {
			@apply text-4xl w-4/5 mx-auto pb-8 relative max-w-96;

			&::after {
				content: url('/scribble.svg');
				@apply absolute inset-x-0 bottom-0 pointer-events-none -z-10;
			}
		}

		> p {
			@apply text-lg text-justify;
		}
	}
</style>
