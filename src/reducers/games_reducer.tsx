import {HIDE_GAME, SHOW_GAME} from '../actions/game_actions';

interface ActionPayload {
    type: string,
    gameId: number
}

export default (state: any = 'undefined', action: ActionPayload) => {
    switch (action.type) {
        case SHOW_GAME:
            return action.gameId;
        case HIDE_GAME:
            return 'undefined';
        default:
            return state;
    }
}