<script lang="ts">
	import WhiteBoardLayer from '../assets/WhiteBoardLayer.svelte';
	import BlackBoardLayer from '../assets/BlackBoardLayer.svelte';
	import BoardCell from './BoardCell.svelte';
	import { board, currentPlayer } from '../util/store';
	let class_name = '';
	export { class_name as class };

	function dropInColumn(xPos: number) {
		for (let i = 5; i >= 0; i--) {
			if ($board[i][xPos] === 0) {
				$board[i][xPos] = $currentPlayer;
				$currentPlayer = $currentPlayer === 1 ? 2 : 1;
				return;
			}
		}
	}

	function playTurn(row: number) {
		// TODO: implement player turn check here
		dropInColumn(row);
	}
</script>

<div class="board-container {class_name}">
	<BlackBoardLayer />
	<WhiteBoardLayer />
	<!-- TODO: Make this a table to support  navigation -->
	<div class="board">
		{#each $board as row, _}
			{#each row as playerPiece, xIndex}
				<BoardCell value={playerPiece} on:click={() => playTurn(xIndex)} />
			{/each}
		{/each}
	</div>
</div>

<style>
	.board {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 9px;
		padding: 9px;
		padding-bottom: 36px;
	}

	.board-container {
		position: relative;
	}
</style>
