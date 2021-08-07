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
			<h3 className={`music ${showGame ? 'show-music' : ''}`}></h3>
			{showGame && <GameShow gameId={gameId} />}
			<div className='nav-footer'>
				<div className='app-header'>
					<h1 className='app-name'>Games Unchained</h1>
					<h2 className='app-description'>Explore 100% FREE games!</h2>
				</div>
				{showGame && <h3 className='close' onClick={() => dispatch(hideGame())}>Close</h3>}
			</div>
		</section>
	);
};

export default Navbar;
