<script lang="ts">
	import playerFaceSrc from '../assets/player-face.svg';
	export let playerName: string;
	export let score: number = 0;
	export let flip: boolean = false;
</script>

<div class="score-card" class:flip-card={flip}>
	<h2 class="heading-xs">{playerName}</h2>
	<span class="score">{score}</span>
	<img src={playerFaceSrc} alt="" class:flip />
</div>

<style>
	.score-card {
		position: relative;
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		width: 142px;
		height: 81px;
		background-color: var(--white);
		border: 3px solid var(--black);
		box-shadow: 0px 10px 0px var(--black);
		border-radius: 20px;
		margin-left: 11px;
	}

	.score {
		font-size: 2rem;
		font-weight: 700;
		line-height: 41px;
		letter-spacing: 0px;
	}

	img {
		width: 54px;
		position: absolute;
		left: -27px;
	}

	.flip-card {
		margin-right: 11px;
	}

	.flip {
		transform: scaleX(-1);
		right: -27px !important;
		left: auto;
	}
</style>
