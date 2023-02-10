import React from 'react';
import { Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { updateListOfRestaurantsInRedux } from '../store/reducers/RestaurantListReducer.js';

class ListScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listState: new Array(0)
    }

    this.fetchData();
  }

  fetchData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const results = await AsyncStorage.multiGet(keys);

      let fetchedList = [];
      results.forEach((name) => {
        if (name.length > 0 && name[0].charAt(0) === '@') {
          fetchedList.push(name[1]);
          // console.log("fetched name: ", name[1]);
        }
      });
      this.props.updateListOfRestaurants(fetchedList);
    } catch(e) {
      console.log("Error reading keys or values... ", e);
    }
  }

  clearAll = async () => {
    AsyncStorage.clear();
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
        <Text>List!</Text>
        {
          this.props.listOfRestaurants.map((name, id) => (
            <Text key={id}>{name}</Text>
          ))
        }
        <View style={{ paddingTop: 100 }}>
          <Button title="CLEAR DATABASE" onPress={this.clearAll}></Button>
        </View>
      </View>
    );
  }
};

const mapStateToProps = state => {
  return {
    listOfRestaurants: state.restaurantReducer.listOfRestaurants
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateListOfRestaurants: (newList) => dispatch(updateListOfRestaurantsInRedux(newList))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);