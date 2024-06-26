export const ACTION_TYPE_UPDATE_LIST = "UPDATE_LIST";
export const ACTION_TYPE_UPDATE_PAGE = "UPDATE_PAGE";
import Images from '../../Images/Images';

const initialState = {
    listOfRestaurants: [{name: "TestName", category: [true, true, true, true, true, true, true, true], description: "Test Description", image: Images.letterT}],
    currentPage: 1,
};

const updateListOfRestaurants = (state, action) => {
    return {
        ...state,
        listOfRestaurants: action.payload
    }
};

const updateCurrentPage = (state, action) => {
    return {
        ...state,
        currentPage: action.payload.currentPage
    }
};

const ACTION_REDUCERS = new Map(
    [
        [ACTION_TYPE_UPDATE_LIST, updateListOfRestaurants],
        [ACTION_TYPE_UPDATE_PAGE, updateCurrentPage]
    ]
);

export const listOfRestaurantsReducer = (state = initialState, action) => {
    return ACTION_REDUCERS.has(action.type) ? ACTION_REDUCERS.get(action.type)(state, action) : state;
};

export const updateListOfRestaurantsInRedux = newList => {
    return {
        type: ACTION_TYPE_UPDATE_LIST,
        payload: newList
    }
};

export const updateCurrentPageInRedux = newPage => {
    return {
        type: ACTION_TYPE_UPDATE_PAGE,
        payload: {
            currentPage: newPage
        }
    }
};