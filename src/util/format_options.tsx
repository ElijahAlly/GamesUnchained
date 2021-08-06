import { FiltersState } from "../reducers/filters_reducer";

export const formatOptions = (filters: FiltersState) => {
    const {category, platform, sortBy} = filters;
    let options = '';

    if (category.length === 1) {
        options += `&category=${category[0]}`
    } else {
        category.forEach((filter, i) => {
            options += `${i === 0 ? '&tag=' : '.'}${filter}`;
        })
    }

    platform.forEach((filter, i) => {
        options += `${i === 0 ? '&platform=' : '.'}${filter}`;
    })

    sortBy.forEach((filter, i) => {
        options += `${i === 0 ? '&sort-by=' : '.'}${filter}`;
    })

    return options.length > 0 ? `?${options.slice(1)}` : ''
}