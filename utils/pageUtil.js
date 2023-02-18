import Constants from '../Constants';

export function calculateNumPages(list) {
    return (
        Math.ceil(list.length/Constants.RESULTS_PER_PAGE)
    )
}