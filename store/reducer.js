import { combineReducers } from 'redux';
import { listOfRestaurantsReducer } from './reducers/RestaurantListReducer';
import { sortReducer } from './reducers/SortReducer';

const rootReducer = combineReducers({
    restaurantReducer: listOfRestaurantsReducer,
    sortReducer: sortReducer,
});

export default rootReducer;