import React from 'react';
import { Platform, 
  StatusBar, 
  Text, 
  Image, 
  View, 
  TextInput, 
  Pressable, 
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Checkbox from 'expo-checkbox';
import Tooltip from 'react-native-walkthrough-tooltip';
import Images from '../Images/Images';
import styles from '../stylesheet';
import { connect } from 'react-redux';
import { updateListOfRestaurantsInRedux } from '../store/reducers/RestaurantListReducer.js';
import { Root, Popup } from 'react-native-popup-confirm-toast';
import Constants from '../Constants';
import { showPopup } from '../utils/popupUtil';

const Button = (props) => {
  const { onPress, title, buttonStyle, textStyle } = props;
  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
}

class AddScreen extends React.Component {
  constructor(props) {
    super(props);

    this.categories = ["American", "Chinese", "French", "German", "Indonesian", "Spanish", "Vietnamese", "Other"];

    // State variables for all sections section
    this.state = {
      nameState: "",
      checkState: new Array(this.categories.length).fill(false),
      descriptionState: "",
      nameTooltipState: false,
      categoryTooltipState: false,
      successModalState: false,
    }
  }

  handleTEWChange = (characters) => {
    const regex = /[^A-Za-z 0-9]/;
    if (!regex.test(characters)) {
      this.setState({nameState: characters});
    }
  };

  handleCheckboxChange = (position) => {
    const updatedCheckedState = this.state.checkState.map((category, index) => index === position ? !category : category);
    this.setState({checkState: updatedCheckedState});
  }

  handleDescriptionChange = (characters) => {
    if (characters) {
      this.setState({descriptionState: characters});
    }
  }

  handleClear = () => {
    this.setState({nameState: ""});

    const updatedCheckedState = this.state.checkState.map((category, index) => index = false);
    this.setState({checkState: updatedCheckedState});

    this.setState({descriptionState: ""});
  }

  handleSubmit = async () => {
    const oldList = this.props.listOfRestaurants;

    // Check for errors
    if (oldList.includes(this.state.nameState)) {
      // If entry already exists, show duplicate alert
      showPopup('duplicate', this.state.nameState);
      return;
    } else if (this.state.nameState.length === 0) {
      // If name is empty, show alert
      showPopup('emptyName', this.state.nameState);
      return;
    } else if (this.state.checkState.length === 0 || !this.state.checkState.includes(true)) {
      // If no categories are selected, show alert
      showPopup('emptyCategory', this.state.nameState);
      return;
    }
    
    const newList = new Array();
    oldList.forEach(restaurant => {
      newList.push(restaurant);
    });

    newList.push(this.state.nameState);
    this.props.updateListOfRestaurants(newList);

    try {
      await AsyncStorage.setItem('@'+this.state.nameState, this.state.nameState);
      showPopup('confirm', this.state.nameState);
    } catch (e) {
      showPopup('error', this.state.nameState);
    }
  }

  render() {
    return (
      <Root>
        {/* This is the Popup. Will span the whole screen */}
        <Popup/>

        <ScrollView>
          <KeyboardAvoidingView style={styles.addScreen}>
            {/* This is the Name section */}
            <View style={styles.inLineView}>
              <Text style={styles.boldedFont}>Name:</Text>
              <Tooltip isVisible={this.state.nameTooltipState} 
                content={<Text> Character limit 30 {"\n\n"} No special characters </Text>}
                placement="bottom"
                onClose={() => this.setState({nameTooltipState: false})}
                topAdjustment={Platform.OS === 'android' ? -StatusBar.currentHeight : 0}
              >
                <TouchableWithoutFeedback onPress={() =>  this.setState({nameTooltipState: true})}>
                  <Image source={Images.info} style={styles.smallInfoIcon}/>
                </TouchableWithoutFeedback>
              </Tooltip>
              <TextInput style={styles.nameTEW} value={this.state.nameState} onChangeText={this.handleTEWChange} maxLength={Constants.MAX_NAME_LENGTH} placeholder="Enter food name" placeholderTextColor={"gray"}/>
            </View>

            {/* This is the Category section */}
            <View style={{marginTop: 25}}>
              <View style={styles.inLineView}>
                <Text style={styles.boldedFont}>Category:</Text>
                <Tooltip isVisible={this.state.categoryTooltipState} 
                  content={<Text> Must select at least 1 category </Text>}
                  placement="bottom"
                  onClose={() => this.setState({categoryTooltipState: false})}
                  topAdjustment={Platform.OS === 'android' ? -StatusBar.currentHeight : 0}
                >
                  <TouchableWithoutFeedback onPress={() => this.setState({categoryTooltipState: true})}>
                    <Image source={Images.info} style={styles.smallInfoIcon}/>
                  </TouchableWithoutFeedback>
                </Tooltip>
              </View>
              <View style={[styles.checkboxArea, styles.checkboxGrid]}>
                {
                  this.categories.map((category, index) => (
                    <View style={[styles.inLineView, styles.checkboxItem]} key={index}>
                      <Checkbox style={styles.checkbox} value={this.state.checkState[index]} onValueChange={() => this.handleCheckboxChange(index)}/>
                      <Text style={styles.regularFont}>  {category}</Text>
                    </View>
                  ))
                }
              </View>
            </View>

            {/* This is the Description section */}
            <View style={{marginTop: 25, marginBottom: 10}}>
              <Text style={styles.boldedFont}>Description:{"\n"}</Text>
              <TextInput value={this.state.descriptionState} multiline={true} style={styles.descriptionTEW} maxLength={Constants.MAX_DESCRIPTION_LENGTH} onChangeText={this.handleDescriptionChange}/>
              <Text style={styles.charactersLeft}>{Constants.MAX_DESCRIPTION_LENGTH-this.state.descriptionState.length} characters left</Text>
            </View>

            {/* This is the Clear/Submit section */}
            <View style={[{marginTop: 50}, styles.inLineButtons]}>
              <Button title="Clear" buttonStyle={styles.clearButton} textStyle={styles.clearText} onPress={this.handleClear}/>
              <Button title="Submit" buttonStyle={styles.submitButton} textStyle={styles.submitText} onPress={this.handleSubmit}/>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </Root>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(AddScreen);
