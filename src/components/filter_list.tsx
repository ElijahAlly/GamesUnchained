import * as React from 'react';
import { useEffect } from 'react';
import { addFilter, removeFilter } from '../actions/filter_actions';
import { useAppDispatch, useAppSelector } from '../hooks';
import { FiltersState } from '../reducers/filters_reducer';

interface FilterListProps {
	filters: string[];
	filterBy: any;
}

const FilterList: React.FunctionComponent<FilterListProps> = ({
	filters,
	filterBy,
}) => {
	const dispatch = useAppDispatch();
	const selectedFilters: FiltersState =
		useAppSelector((state) => state.entities.filters) || [];

	const toggleFilter = (filter: string, indx: number) => {
		if (selectedFilters[filterBy].includes(filter)) {
			dispatch(removeFilter(filter, filterBy));
			return;
		}
		dispatch(addFilter(filter, filterBy));
	};

	return (
		<ul className='filter-list'>
			{filters.map((filter, i) => (
				<li
					key={i}
					className={`filters ${
						selectedFilters[filterBy].includes(filter) ? 'selected-filter' : ''
					}`}
					onClick={() => toggleFilter(filter, i)}>
					{filter}
				</li>
			))}
		</ul>
	);
};

export default FilterList;
