import React, { useEffect, useState } from 'react';
import { expandImg } from '../actions/image_actions';
import { useAppDispatch, useAppSelector } from '../hooks';
import { RAPID_API_KEY } from '../util/keys/Rapid_API';
import ExpandedImg from './expanded_img';

export interface GameShowProps {
	gameId: string;
}

interface MinSystemRequirements {
	os: string;
	processor: string;
	memory: string;
	graphics: string;
	storage: string;
}

interface GameProps {
	id: number;
	title: string;
	thumbnail: string;
	status: string;
	short_description: string;
	description: string;
	game_url: string;
	genre: string;
	platform: string;
	publisher: string;
	developer: string;
	release_date: string;
	freetogame_profile_url: string;
	minimum_system_requirements: MinSystemRequirements;
	screenshots: {
		id: number;
		image: string;
	}[];
}

const _initialGameState: GameProps = {
	id: 0,
	title: '',
	thumbnail: '',
	description: '',
	status: '',
	short_description: '',
	freetogame_profile_url: '',
	genre: '',
	game_url: '',
	platform: '',
	publisher: '',
	release_date: '',
	developer: '',
	minimum_system_requirements: {
		os: '',
		processor: '',
		memory: '',
		graphics: '',
		storage: '',
	},
	screenshots: [
		{
			id: 0,
			image: '',
		},
	],
};

const GameShow: React.FunctionComponent<GameShowProps> = ({ gameId }) => {
	const [game, setGame] = useState(_initialGameState);
	const dispatch = useAppDispatch();
	const imgSrc: any = useAppSelector((state) => `${state.entities.images.img}`);

	useEffect(() => {
		const getGame = async () => {
			// await fetch and then await to json()
			const data = await (
				await fetch(
					`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,
					{
						method: 'GET',
						headers: {
							'x-rapidapi-key': RAPID_API_KEY,
							'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
						},
					}
				)
			).json();
			setGame(data);
		};

		getGame();
	}, []);

	const [highlight, setHighlight] = useState('description');

	if (!game.id) return null;

	const getTabInfo = (tab: string) => {
		const descriptionEle = document.getElementsByClassName('description')[0];
		const secondEle = document.getElementById('second-ele');

		switch (tab) {
			case 'description':
				descriptionEle.innerHTML = game.description;
				setHighlight('description');
				return;
			case 'game-info':
				descriptionEle.innerHTML = 'Short Descrption: ' + game.short_description;
				if (secondEle) secondEle.innerHTML = 'Link To Game: ' + game.game_url;
				setHighlight('game-info');
				return;
			case 'stats':
				descriptionEle.innerHTML = 'Developer: ' + game.developer;
				setHighlight('stats');
				return;
			default:
				return;
		}
	};

	const openInNewTab = (url: string): void => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
		if (newWindow) newWindow.opener = null
	}

	return (
		<section className='game-show'>
			{imgSrc && imgSrc.length > 0 ? (
				<ExpandedImg src={imgSrc}/>
			) : null}
			<h3 className='title' onClick={() => openInNewTab(game.game_url)}>{game.title}</h3>
			<div className='images'>
				<img className='main-img' src={game.thumbnail} draggable={false} onClick={() => dispatch(expandImg(game.thumbnail))} />
				{game.screenshots.map((img) => (
					<img className='main-img' src={`${img.image}`} key={img.id} draggable={false} onClick={() => dispatch(expandImg(img.image))} />
				))}
			</div>
			<ul className='description-headers'>
				<li
					className={`header ${
						highlight == 'description' ? 'highlight-header' : ''
					}`}
					onClick={() => getTabInfo('description')}>
					Description
				</li>
				<li
					className={`header ${
						highlight == 'game-info' ? 'highlight-header' : ''
					}`}
					onClick={() => getTabInfo('game-info')}>
					More Game Info
				</li>
				<li
					className={`header ${highlight == 'stats' ? 'highlight-header' : ''}`}
					onClick={() => getTabInfo('stats')}>
					Tech Stats
				</li>
			</ul>
			<h3 className='description'>{game.description}</h3>
		</section>
	);
};

export default GameShow;
