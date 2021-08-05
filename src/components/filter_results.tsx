import React from 'react';

export interface FilterResultsProps {
    
}
 
const Categories = ['mmorpg', 'shooter', 'strategy', 'moba', 'racing', 'sports', 'social', 'sandbox', 'open-world', 'survival', 'pvp', 'pve', 'pixel', 'voxel', 'zombie', 'turn-based', 'first-person', 'third-Person', 'top-down', 'tank', 'space', 'sailing', 'side-scroller', 'superhero', 'permadeath', 'card', 'battle-royale', 'mmo', 'mmofps', 'mmotps', '3d', '2d', 'anime', 'fantasy', 'sci-fi', 'fighting', 'action-rpg', 'action', 'military', 'martial-arts', 'flight', 'low-spec', 'tower-defense', 'horror', 'mmorts']
const SortBy = ['release-date', 'popularity', 'alphabetical', 'relevance']
const Platform = [];

const FilterResults: React.FunctionComponent<FilterResultsProps> = () => {
    return (  
        <section className='filter-results'>
            <h3 id='category'>Category <div className='filter-arrow'>‹</div></h3>
            <h3 id='sort-by'>Sort By <span className='filter-arrow'>‹</span></h3>
            <h3 id='platform'>Platform <span className='filter-arrow'>‹</span></h3>
        </section>
    );
}

export default FilterResults;