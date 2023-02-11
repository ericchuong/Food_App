import React from 'react';
import { Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { updateListOfRestaurantsInRedux } from '../store/reducers/RestaurantListReducer.js';

class SwipeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  clearAll = async () => {
    AsyncStorage.clear();
    this.props.updateListOfRestaurants([]);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Swipe!</Text>

        <View style={{ paddingTop: 100 }}>
          <Button title="CLEAR DATABASE" onPress={this.clearAll}></Button>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    listOfRestaurants: state.restaurantReducer.listOfRestaurants
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateListOfRestaurants: (newList) => dispatch(updateListOfRestaurantsInRedux(newList))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SwipeScreen);