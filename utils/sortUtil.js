import Constants from '../Constants';

export function getCompareFn(sort) {
    let compareFn = () => {};

    switch(sort) {
        case Constants.ASCENDING:
            compareFn = (a, b) => a.name.localeCompare(b.name);
            break;
        case Constants.DESCENDING:
            compareFn = (a, b) => b.name.localeCompare(a.name);
            break;
        default:
            break;
    }

    return compareFn;
}