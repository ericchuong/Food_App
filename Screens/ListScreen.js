import React from 'react';
import { Text, 
  View, 
  Image, 
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { updateListOfRestaurantsInRedux } from '../store/reducers/RestaurantListReducer.js';
import styles from '../styles/stylesheet';
import Constants from '../Constants.js';

class ListScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }

    this.fetchData();
  }

  fetchData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const results = JSON.parse(await AsyncStorage.getItem(Constants.ACCESS_KEY));

      let fetchedList = [];

      if (results) {
        results.forEach((result) => {
          if (result.name && result.name.length > 0) {
            console.log("fetching: ", result.name);

            const fetchedData = {
              name: result.name,
              category: result.category, 
              description: result.description, 
              image: result.image
            };

            fetchedList.push(fetchedData);
          }
        });

        if (fetchedList.length > 0) {
          this.props.updateListOfRestaurants(fetchedList);
        }
      }
    } catch(e) {
      console.log("Error reading keys or values... ", e);
    }
  }

  render() {
    return (
      <ScrollView>
        {
          this.props.listOfRestaurants.map((data, id) => (
            <View key={id}>
              <View style={styles.entryInList}>
                <Image style={styles.listImage} source={data.image}/>
                <View style={{flexShrink: 1}}>
                  <Text style={styles.listNameText}>
                    {data.name}
                  </Text>
                  <Text style={styles.listDescriptionText}>
                      {data.description}
                    </Text>
                </View>
              </View>
              <View style={styles.horizontalLine}/>
            </View>
          ))
        }
      </ScrollView>
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