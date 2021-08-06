export const SHOW_GAME = 'SHOW_GAME';
export const HIDE_GAME = 'HIDE_GAME';

export const showGame = (gameId: number) => ({
    type: SHOW_GAME,
    gameId
})

export const hideGame = () => ({
    type: HIDE_GAME,
})