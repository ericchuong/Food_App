import { combineReducers } from 'redux';
import { listOfRestaurantsReducer } from './reducers/RestaurantListReducer';

const rootReducer = combineReducers({
    restaurantReducer: listOfRestaurantsReducer
});

export default rootReducer;