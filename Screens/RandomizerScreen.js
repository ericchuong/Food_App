import React from 'react';
import { Text, 
  View, 
  TouchableWithoutFeedback,
  Platform,
  Image } from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';
import Images from '../Images/Images';
import styles from '../styles/randomizerStylesheet';
import Button from '../components/StyledButton.js';
import { connect } from 'react-redux';

class RandomizerScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tooltipState: false,
      randomizerValue: 0,
    }
  }

  randomize = () => {
    let newRandomValue = this.state.randomizerValue;

    if (this.props.listOfRestaurants.length > 1) {
     while (newRandomValue === this.state.randomizerValue) {
        newRandomValue = Math.floor(Math.random() * this.props.listOfRestaurants.length);
      }
    }

    this.setState({
      randomizerValue: newRandomValue
    });
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        {/* Top section. Text instructions */}
        <Text style={{marginTop: 10}}>Randomly Select from {this.props.listOfRestaurants.length} Options</Text>

        {/* Center section. Result Name and the info icon */}
        <View style={[styles.inLineView, {top: '50%'}]}>
          <Text style={{fontSize: 40, fontWeight: 'bold'}}>{this.props.listOfRestaurants[this.state.randomizerValue].name}</Text>
          <Tooltip isVisible={this.state.tooltipState} 
            content={<Text> Result Info Here </Text>}
            placement="bottom"
            onClose={() => this.setState({tooltipState: false})}
            topAdjustment={Platform.OS === 'android' ? -StatusBar.currentHeight : 0}
          >
            <TouchableWithoutFeedback onPress={() => this.setState({tooltipState: true})}>
              <Image source={Images.info} style={styles.smallInfoIcon}/>
            </TouchableWithoutFeedback>
          </Tooltip>        
        </View>

        {/* Bottom section. Button */}
        <Button title="Click Me!" buttonStyle={styles.button} textStyle={styles.buttonText} onPress={this.randomize}/>
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