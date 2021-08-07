export const EXPAND_IMAGE = 'EXPAND_IMAGE';
export const COLLAPSE_IMAGE = 'COLLAPSE_IMAGE';

export const expandImg = (src: string) => ({
    type: EXPAND_IMAGE,
    src,
})

export const collapseImg = () => ({
    type: COLLAPSE_IMAGE,
})