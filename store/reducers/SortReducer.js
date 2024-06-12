import Constants from "../../Constants";

export const ACTION_TYPE_UPDATE_SORT = "UPDATE_SORT";

const initialState = {
    currentSort: Constants.ASCENDING
};

const updateSort = (state, action) => {
    return {
        ...state,
        currentSort: state.currentSort === Constants.ASCENDING ? Constants.DESCENDING : Constants.ASCENDING
    }
};

const ACTION_REDUCERS = new Map(
    [
        [ACTION_TYPE_UPDATE_SORT, updateSort],
    ]
);

export const sortReducer = (state = initialState, action) => {
    return ACTION_REDUCERS.has(action.type) ? ACTION_REDUCERS.get(action.type)(state, action) : state;
};

export const toggleSortInRedux = () => {
    return {
        type: ACTION_TYPE_UPDATE_SORT,
    }
};