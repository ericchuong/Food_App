export const ACTION_TYPE_UPDATE_LIST = "UPDATE_LIST";
import Images from '../../Images/Images';

const initialState = {
    listOfRestaurants: [{name: "TestName", category: [true, true, true, true, true, true, true, true], description: "Test Description", image: Images.letterT}]
};

const updateListOfRestaurants = (state, action) => {
    return {
        ...state,
        listOfRestaurants: action.payload
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
        payload: newList
    }
};