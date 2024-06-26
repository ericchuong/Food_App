import React from 'react';
import { connect } from 'react-redux';
import { Text, 
  View, 
  TouchableWithoutFeedback,
  Image,
  Modal } from 'react-native';
import Images from '../Images/Images';
import styles from '../styles/randomizerStylesheet';
import Button from '../components/StyledButton.js';
import Toolbar from '../components/Toolbar.js';
import Constants from '../Constants.js';

class RandomizerScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tooltipState: false,
      currentIndex: 0,
      timeRemaining: 0,
      isModalVisible: false,
    }
  }

  randomize = () => {
    // Only Randomize if there is more than 1 option in the list
    if (this.props.listOfRestaurants.length > 1) {
      // Set the time remaining
      this.setState({
        timeRemaining: Constants.RANDOMIZER_DURATION_IN_MSEC
      });

      // Start the interval
      const countdownFn = setInterval(() => {
        this.setState({
          currentIndex: Math.floor(Math.random() * this.props.listOfRestaurants.length),
          timeRemaining: this.state.timeRemaining - Constants.RANDOMIZER_INTERVAL_IN_MSEC,
        });

        if (this.state.timeRemaining <= 0) {
          clearInterval(countdownFn);
        }
      }, Constants.RANDOMIZER_INTERVAL_IN_MSEC);
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {/* Filter and Sort Toolbar */}
        <Toolbar isSortAvailable={false}/>

        {/* The rest of the page */}
        <View style={{flex: 1, alignItems: 'center', maxWidth: '95%'}}>
          <Modal 
            visible={this.state.isModalVisible}
            transparent={true}
            presentationStyle='overFullScreen'
            animationType='fade'
            onRequestClose={() => this.setState({isModalVisible: false})}>
              <TouchableWithoutFeedback onPress={() => this.setState({isModalVisible: false})}>
                <View style={[styles.centeredView, {backgroundColor: "rgba(0, 0, 0, 0.5)"}]}>
                  <View style={styles.modalView}>
                    <Image style={styles.modalImage} source={this.props.listOfRestaurants[this.state.currentIndex].image}/>
                    <View style={{flexShrink: 1}}>
                      <Text style={styles.modalNameText}>
                        {this.props.listOfRestaurants[this.state.currentIndex].name}
                      </Text>
                      <Text style={styles.modalDescriptionText}>
                        {this.props.listOfRestaurants[this.state.currentIndex].description}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
          </Modal>

          {/* Top section. Text instructions */}
          <Text style={{marginTop: 10}}>Randomly Select from {this.props.listOfRestaurants.length} Options</Text>
            
          {/* Center section. Result Name and the info icon */}
          <View style={{top: '30%'}}>
            <Text style={styles.mainNameText}>
              {this.props.listOfRestaurants[this.state.currentIndex].name}
              <View>
                <TouchableWithoutFeedback onPress={() => this.setState({isModalVisible: true})}>
                  <Image source={Images.info} style={styles.smallInfoIcon}/>
                </TouchableWithoutFeedback>
              </View>
            </Text>
          </View>

          {/* Bottom section. Button */}
          <View style={{position: 'absolute', bottom: '20%'}}>
            <Button title="Click Me!" buttonStyle={styles.button} textStyle={styles.buttonText} onPress={this.randomize}/>
          </View>
        
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    listOfRestaurants: state.restaurantReducer.listOfRestaurants,
  }
};

export default connect(mapStateToProps)(RandomizerScreen);