import React from 'react';
import { Text, 
  View, 
  Image, 
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { updateListOfRestaurantsInRedux,
  updateCurrentPageInRedux } from '../store/reducers/RestaurantListReducer.js';
import styles from '../styles/listStylesheet';
import Constants from '../Constants.js';
import { calculateNumPages } from '../utils/pageUtil';
import Button from '../components/StyledButton.js';
import Toolbar from '../components/Toolbar.js';
import {getCompareFn} from '../utils/sortUtil';

class ListScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.scrollRef = React.createRef();

    const fetchData = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const results = JSON.parse(await AsyncStorage.getItem(Constants.ACCESS_KEY));
  
        let fetchedList = [];
  
        if (results) {
          results.forEach((result) => {
            if (result.name && result.name.length > 0) {
              // console.log("fetching: ", result.name);
  
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

    fetchData();
  }

  showResultsForPage = (page) => {
    const lowerIndex = (page - 1) * Constants.RESULTS_PER_PAGE;
    const upperIndex = page * Constants.RESULTS_PER_PAGE;

    // Sort the list first
    const sortedListOfRestaurants = this.props.listOfRestaurants.sort(getCompareFn(this.props.currentSort));
    const slicedListOfRestaurants = sortedListOfRestaurants.slice(lowerIndex, upperIndex);

    const showList = (data, id) => {
      return (
        <View key={id}>
          <View style={styles.entryInList}>
            <Image style={styles.listImage} source={data.image}/>
            <View style={{flexShrink: 1}}>
              <Text style={styles.listNameText}>
                {id+1 + '. ' + data.name}
              </Text>
              <Text style={styles.listDescriptionText}>
                  {data.description}
                </Text>
            </View>
          </View>
          <View style={styles.horizontalLine}/>
        </View>
      )
    }

    return (
      slicedListOfRestaurants.map((data, id) => showList(data, id + ((page - 1) * Constants.RESULTS_PER_PAGE)))
    )
  }

  getPrevButton = () => {
    const isSelectable = this.props.currentPage !== 1;

    const handlePrev = () => {
      this.props.updateCurrentPage(this.props.currentPage - 1);
      this.scrollRef.current.scrollTo({y: 0});
    }

    return isSelectable ? (<Button title="<" textStyle={[styles.selectablePrevNext, {marginLeft: 0}]} onPress={handlePrev}/>) :
      (<Button title="<" textStyle={[styles.pageNumText, {marginLeft: 0}]}/>)
  }

  getPageNumberButtons = () => {
    const numPages = calculateNumPages(this.props.listOfRestaurants);
    const pageArray = [...Array(numPages).keys()];

    const calculatePageNumbersToShow = (numPages, currentPage) => {
      if (numPages <= 5) {
        // If less than 5 pages, show all page numbers
        return [0, numPages];
      } else {
        // If there are more than 5 pages...
        if (currentPage - 2 <= 0) {
          // If the current page is one of the first 2 pages, show the first 5 page numbers
          return [0, 5];
        } else if (currentPage + 2 >= numPages) {
          // If the current page is one of the last pages, show the last 5 pages numbers
          return [numPages - 5, numPages];
        } else {
          // If the current page is in the middle somewhere, show the current page as the middle option
          return [currentPage - 3, currentPage + 2];
        }
      }
    }

    const [lowerIndex, upperIndex] = calculatePageNumbersToShow(numPages, this.props.currentPage);
    const slicedPageArray = pageArray.slice(lowerIndex, upperIndex);

    const renderPageNum = (pageIndex, id, currentPage) => {
      const pageNum = pageIndex+1;
      const textStyle = pageNum === currentPage ? styles.selectedPageNumText : styles.pageNumText;
  
      const handlePage = (pageNum) => {
        this.props.updateCurrentPage(pageNum);
        this.scrollRef.current.scrollTo({y: 0});
      }

      return (
        <View key={id}>
          <Button title={pageNum} textStyle={textStyle} onPress={() => handlePage(pageNum)}/>
        </View>
      )
    }
    
    return (
      slicedPageArray.map((pageIndex, id) => renderPageNum(pageIndex, id, this.props.currentPage)
      )
    )
  }

  getNextButton = () => {
    const isSelectable = this.props.currentPage !== calculateNumPages(this.props.listOfRestaurants);
    
    const handleNext = () => {
      this.props.updateCurrentPage(this.props.currentPage + 1);
      this.scrollRef.current.scrollTo({y: 0});
    }

    return isSelectable ? (<Button title=">" textStyle={styles.selectablePrevNext} onPress={handleNext}/>) :
      (<Button title=">" textStyle={styles.pageNumText}/>)
  }

  render() {
    return (
      <View>
        {/* Filter and Sort Toolbar */}
        <Toolbar isSortAvailable={true}/>

        {/* The results */}
        <ScrollView ref={this.scrollRef}>
          {this.showResultsForPage(this.props.currentPage)}
          <View style={styles.inLinePageNum}>
            {this.getPrevButton()}
            {this.getPageNumberButtons()}
            {this.getNextButton()}
            <Text style={styles.pageOfPagesText}>{this.props.currentPage} of {calculateNumPages(this.props.listOfRestaurants)}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
};

const mapStateToProps = state => {
  return {
    listOfRestaurants: state.restaurantReducer.listOfRestaurants,
    currentPage: state.restaurantReducer.currentPage,
    currentSort: state.sortReducer.currentSort,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateListOfRestaurants: (newList) => dispatch(updateListOfRestaurantsInRedux(newList)),
    updateCurrentPage: (newPage) => dispatch(updateCurrentPageInRedux(newPage)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);