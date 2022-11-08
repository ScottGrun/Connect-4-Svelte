import { writable } from 'svelte/store';

// TODO: Explain using stores over classes due to svelte not being able to track class instance changes

// Keeps track of whose pieces are where on the board
export const board = writable(new Array(6).fill([]).map(() => new Array(7).fill(0)));

// Keeps track of whose turn it is
export const currentPlayer = writable(1);

// Keeps track of the winner
export const winner = writable<number | null>(null);

// Holds scoreboard state
export const score = writable({ 1: 0, 2: 0 });

// Game clock
export const timer = writable(0);
