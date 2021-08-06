export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';

export const addFilter = (filter: string, where: string) => ({
    type: ADD_FILTER,
    where,
    filter,
})

export const removeFilter = (filter: string, where: string) => ({
    type: REMOVE_FILTER,
    where,
    filter,
})