<script>
	import TimeCard from '../../components/TimeCard.svelte';
	import Gameboard from '../../components/Gameboard.svelte';
	import Scorecard from '../../components/Scorecard.svelte';
	const score = { player1: 0, player2: 0 };
</script>

<main>
	<div class="scoreboard">
		<Scorecard playerName="Player 1" score={score.player1} />
		<Scorecard playerName="Player 2" score={score.player2} flip />
	</div>
	<div class="board-wrapper">
		<Gameboard class="gameboard" />
		<TimeCard class="time-card" />
	</div>
	<div class="background" />
</main>

<style>
	.scoreboard {
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin-top: 50px;
	}

	:global(.gameboard) {
		margin-top: 50px;
	}

	.board-wrapper {
		position: relative;
	}

	:global(.time-card) {
		position: absolute;
		z-index: 2;
		transform: translateY(-27px);
		left: calc(50% - 95.5px);
	}

	.background {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 375px;
		height: 236px;
		z-index: -1;
		background: #5c2dd5;
		border-radius: 60px 60px 0px 0px;
	}
</style>
