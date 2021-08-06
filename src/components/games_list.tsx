import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { formatTitle } from '../util/format_title';
import { formatOptions } from '../util/format_options';
import { FiltersState } from '../reducers/filters_reducer';
import { showGame } from '../actions/game_actions';
import { RAPID_API_KEY } from '../util/keys/Rapid_API';

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
	const [options, setOptions] = useState('');
	const dispatch = useAppDispatch();

	const filterCategories: FiltersState =
		useAppSelector((state) => state.entities.filters) || [];

	useEffect(() => {
		console.table(filterCategories);
		setOptions(() => formatOptions(filterCategories));
	}, [filterCategories]);

	useEffect(() => {
		console.log('options', options);
		const getGames = async () => {
			// await fetch and then await to json()
			const data = await (
				await fetch(
					`https://free-to-play-games-database.p.rapidapi.com/api/${
						options.includes('tag') ? 'filter' : 'games'
					}${options}`,
					{
						method: 'GET',
						headers: {
							'x-rapidapi-key': RAPID_API_KEY,
							'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
						},
					}
				)
			).json();
			setGames(data);
		};

		getGames();
	}, [options]);

	return (
		<ul className='games-list'>
			{games.length > 0 ? (
				<>
					{games.length > 0 &&
						games.map((game: any) => (
							<li
								key={game.id}
								className='game-card'
								onClick={() => dispatch(showGame(game.id))}>
								<img
									src={`${game.thumbnail}`}
									className='game-img'
									draggable={false}
								/>
								<h2 className='game-title'>{formatTitle(game.title, 17)}</h2>
							</li>
						))}
				</>
			) : (
				<li className='no-results'> No Results. Try removing some filters.</li>
			)}
		</ul>
	);
};

export default GamesList;
