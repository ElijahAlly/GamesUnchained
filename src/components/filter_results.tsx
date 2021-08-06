import React from 'react';
import { useState } from 'react';
import FilterList from './filter_list';
import { Categories, SortBy, Platforms } from '../util/filters';
import { FiltersState } from '../reducers/filters_reducer';
import { useAppSelector } from '../hooks';

export interface FilterResultsProps {}

const FilterResults: React.FunctionComponent<FilterResultsProps> = () => {
	const [showCategories, setShowCategories] = useState(false);
	const [showSortBy, setShowSortBy] = useState(false);
	const [showPlatforms, setShowPlatforms] = useState(false);

	const show = (type: string) => {
		switch (type) {
			case 'categories':
				setShowCategories((prev) => !prev);
				break;
			case 'sortBy':
				setShowSortBy((prev) => !prev);
				break;
			case 'platforms':
				setShowPlatforms((prev) => !prev);
				break;
			default:
				return null;
		}
	};

	const selectedFilters: FiltersState =
		useAppSelector((state) => state.entities.filters) || [];
	const filtersArr = Object.values(selectedFilters);
	const categoryFilterCount = filtersArr[0].length;
	const platformFilterCount = filtersArr[1].length;
	const sortByFilterCount = filtersArr[2].length;

	return (
		<section className='filter-results'>
			<h3 id='category' onClick={() => show('categories')}>
				Category
				{categoryFilterCount > 0 && (
					<div className='filter-count'>{`${categoryFilterCount}`}</div>
				)}
				<div className={`filter-arrow ${showCategories ? 'open' : ''}`}>‹</div>
			</h3>
			{showCategories ? (
				<FilterList filters={Categories} filterBy={'category'} />
			) : null}
			<h3 id='sort-by' onClick={() => show('sortBy')}>
				Sort By
				{sortByFilterCount > 0 && (
					<div className='filter-count'>{`${sortByFilterCount}`}</div>
				)}
				<span className={`filter-arrow ${showSortBy ? 'open' : ''}`}>‹</span>
			</h3>
			{showSortBy ? <FilterList filters={SortBy} filterBy={'sortBy'} /> : null}
			<h3 id='platform' onClick={() => show('platforms')}>
				Platform
				{platformFilterCount > 0 && (
					<div className='filter-count'>{`${platformFilterCount}`}</div>
				)}
				<span className={`filter-arrow ${showPlatforms ? 'open' : ''}`}>‹</span>
			</h3>
			{showPlatforms ? (
				<FilterList filters={Platforms} filterBy={'platform'} />
			) : null}
		</section>
	);
};

export default FilterResults;
