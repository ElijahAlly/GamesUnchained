import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { RAPID_API_KEY } from '../util/keys/Rapid_API';

export interface GameShowProps {
	gameId: string;
}

const GameShow: React.FunctionComponent<GameShowProps> = ({ gameId }) => {
	const [game, setGame] = useState(null);

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

	if (!game) return null;
	const { title, thumbnail, description } = game;

	return (
		<section className='game-show'>
			{title}
			<img src={thumbnail} />
			{description}
		</section>
	);
};

export default GameShow;
