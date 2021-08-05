import React, { useEffect, useState } from 'react';
import {formatTitle} from '../util/format_title'

// developer: "Phoenix Labs, Iron Galaxy"
// freetogame_profile_url: "https://www.freetogame.com/dauntless"
// game_url: "https://www.freetogame.com/open/dauntless"
// genre: "MMORPG"
// id: 1
// platform: "PC (Windows)"
// publisher: "Phoenix Labs"
// release_date: "2019-05-21"
// short_description: "A free-to-play, co-op action RPG with gameplay similar to Monster Hunter."
// thumbnail: "https://www.freetogame.com/g/1/thumbnail.jpg"
// title: "Dauntless"

const GamesData: object[] = [];

interface GamesListProps {}

const GamesList: React.FunctionComponent<GamesListProps> = () => {
	const [games, setGames] = useState(GamesData);

	useEffect(() => {
		const getGames = async () => {
			// await fetch and then await to json()
			const data = await (
				await fetch(
					`https://free-to-play-games-database.p.rapidapi.com/api/games`,
					{
						method: 'GET',
						headers: {
							'x-rapidapi-key':
								'0375b53b85msh1880c2c65fc1799p1766aajsn58835e09a56f',
							'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
						},
					}
				)
			).json();
			setGames(data);
		};

		getGames();
	}, []);

	return (
		<ul className='games-list'>
			{games.length > 0 &&
				games.map((game: any) => (
					<li key={game.id} className='game-card'>
						<img src={`${game.thumbnail}`} className='game-img' draggable={false}/>
						<h2 className='game-title'>{formatTitle(game.title, 17)}</h2>
					</li>
				))}
		</ul>
	);
};

export default GamesList;
