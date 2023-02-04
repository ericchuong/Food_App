export const ACTION_TYPE_UPDATE_LIST = "UPDATE_LIST";

const initialState = {
    listOfRestaurants: new Array()
};

const updateListOfRestaurants = (state, action) => {
    return {
        ...state,
        listOfRestaurants: action.payload.listOfRestaurants
    }
};

const ACTION_REDUCERS = new Map(
    [[ACTION_TYPE_UPDATE_LIST, updateListOfRestaurants]]
);

export const listOfRestaurantsReducer = (state = initialState, action) => {
    return ACTION_REDUCERS.has(action.type) ? ACTION_REDUCERS.get(action.type)(state, action) : state;
};

export const updateListOfRestaurantsInRedux = newList => {
    return {
        type: ACTION_TYPE_UPDATE_LIST,
        payload: {
            listOfRestaurants: newList
        }
    }
};