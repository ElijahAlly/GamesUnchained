import React, { useState } from 'react';
import { useEffect } from 'react';
import { hideGame } from '../actions/game_actions';
import { useAppDispatch, useAppSelector } from '../hooks';
import GameShow from './game_show';
export interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = () => {
	const gameId: string = useAppSelector((state) => `${state.entities.gameId}`);
	const showGame: boolean = gameId !== 'undefined';
	const dispatch = useAppDispatch();

	useEffect(() => console.log(''), [showGame]);

	return (
		<section className={`navbar ${showGame ? 'show-game-background' : ''}`}>
			{showGame && <GameShow gameId={gameId} />}
			<h1 className='app-name'>Games Unchained</h1>
			{showGame && <h3 onClick={() => dispatch(hideGame())}>Close</h3>}
		</section>
	);
};

export default Navbar;
