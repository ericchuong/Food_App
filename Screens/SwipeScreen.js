import React from 'react';
import { Text, 
  View, 
  Image, 
  FlatList, 
  Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { updateListOfRestaurantsInRedux } from '../store/reducers/RestaurantListReducer.js';
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

  buildCards = () => {
    return (
      this.props.listOfRestaurants.map((data) => this.buildCard(data))
    )
  }

  render() {
    return (
      // <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={true}>
      //   {this.buildCards()}
      //     {/* <View style={{ paddingTop: 100 }}>
      //       <Button title="CLEAR DATABASE" onPress={this.clearAll}></Button>
      //     </View> */}
      // </ScrollView>

      <FlatList
        horizontal={true}
        data={this.props.listOfRestaurants}
        renderItem={({item}) => this.buildCard(item)}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      />
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