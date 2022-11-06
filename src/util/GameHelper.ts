export class GameHelper {
	private board: number[][];
	private currentPlayer: 1 | 2;

	constructor() {
		this.board = new Array(6).fill([]).map(() => new Array(7).fill(0));
		this.currentPlayer = 1;
	}

	dropInColumn(column: number) {
		for (let i = 5; i >= 0; i--) {
			if (this.board[i][column] === 0) {
				this.board[i][column] = this.currentPlayer;
				this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
				return;
			}
		}
	}
}
