import React from 'react';
import { Text, 
  View, 
  Image, 
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { updateListOfRestaurantsInRedux } from '../store/reducers/RestaurantListReducer.js';
import {getCompareFn} from "../utils/sortUtil";
import Toolbar from '../components/Toolbar.js';
import styles from '../styles/swipeStylesheet';

class SwipeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0
    }
  }

  clearAll = async () => {
    AsyncStorage.clear();
    this.props.updateListOfRestaurants([]);
  }

  buildCard = (data) => {
    return (
      <View style={styles.centeredView}>
        <View style={styles.defaultView}>
          <Image style={styles.image} source={data.image}/>
          <Text style={styles.nameText}>
            {data.name}
          </Text>
          <Text style={styles.descriptionText}>
            {data.description}
          </Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      //     <View style={{ paddingTop: 100 }}>
      //       <Button title="CLEAR DATABASE" onPress={this.clearAll}></Button>
      //     </View>

      <View>
        {/* Filter and Sort Toolbar */}
        <Toolbar isSortAvailable={true}/>

        {/* List of cards */}
        <FlatList
        horizontal={true}
        data={this.props.listOfRestaurants.sort(getCompareFn(this.props.currentSort))}
        renderItem={({item}) => this.buildCard(item)}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    listOfRestaurants: state.restaurantReducer.listOfRestaurants,
    currentSort: state.sortReducer.currentSort,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateListOfRestaurants: (newList) => dispatch(updateListOfRestaurantsInRedux(newList))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SwipeScreen);