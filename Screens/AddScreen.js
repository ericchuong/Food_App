import React, { useState } from 'react';
import { Platform, 
  StatusBar, 
  Text, 
  Image, 
  View, 
  TextInput, 
  Button, 
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView } from 'react-native';
import Checkbox from 'expo-checkbox';
import Tooltip from 'react-native-walkthrough-tooltip';
import Images from '../Images/Images';
import styles from '../stylesheet';

const MAX_NAME_LENGTH = 30;
const MAX_DESCRIPTION_LENGTH = 100;

export default function AddScreen({ navigation }) {
  // State variables for Name section
  const [nameState, setNameState] = useState("");

  // State variables for Category section
  const categories = ["American", "Chinese", "French", "German", "Indonesian", "Spanish", "Vietnamese"];
  const [checkState, setCheckState] = useState(new Array(categories.length).fill(false));

  // State variables for Description section
  const [descriptionLengthState, setDescriptionLengthState] = useState(0);

  const [nameTooltipState, setNameTooltipState] = useState(false);
  const [categoryTooltipState, setCategoryTooltipState] = useState(false);

  function handleTEWChange(characters) {
    const regex = /[^A-Za-z 0-9]/;
    if (!regex.test(characters)) {
      setNameState(characters);
    }
  };

  function handleCheckboxChange(position) {
    const updatedCheckedState = checkState.map((category, index) => index === position ? !category : category);
    setCheckState(updatedCheckedState);
  }

  function handleDescriptionChange(characters) {
    if (characters) {
      setDescriptionLengthState(characters.length);
    }
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.addScreen}>
        {/* This is the Name section */}
        <View style={styles.inLineView}>
          <Text style={styles.boldedFont}>Name:</Text>
          <Tooltip isVisible={nameTooltipState} 
            content={<Text> Character limit 30 {"\n\n"} No special characters </Text>}
            placement="bottom"
            onClose={() => setNameTooltipState(false)}
            topAdjustment={Platform.OS === 'android' ? -StatusBar.currentHeight : 0}
          >
            <TouchableWithoutFeedback onPress={() => setNameTooltipState(true)}>
              <Image source={Images.info} style={styles.smallInfoIcon}/>
            </TouchableWithoutFeedback>
          </Tooltip>
          <TextInput style={styles.nameTEW} value={nameState} onChangeText={handleTEWChange} maxLength={MAX_NAME_LENGTH} placeholder="Enter restaurant name" placeholderTextColor={"gray"}/>
        </View>

        {/* This is the Category section */}
        <View style={{marginTop: 25}}>
          <View style={styles.inLineView}>
            <Text style={styles.boldedFont}>Category:</Text>
            <Tooltip isVisible={categoryTooltipState} 
              content={<Text> Must select at least 1 category </Text>}
              placement="bottom"
              onClose={() => setCategoryTooltipState(false)}
              topAdjustment={Platform.OS === 'android' ? -StatusBar.currentHeight : 0}
            >
              <TouchableWithoutFeedback onPress={() => setCategoryTooltipState(true)}>
                <Image source={Images.info} style={styles.smallInfoIcon}/>
              </TouchableWithoutFeedback>
            </Tooltip>
          </View>
          <View style={[styles.checkboxArea, styles.checkboxGrid]}>
            {
              categories.map((category, index) => (
                <View style={[styles.inLineView, styles.checkboxItem]} key={index}>
                  <Checkbox style={styles.checkbox} value={checkState[index]} onChange={() => handleCheckboxChange(index)}/>
                  <Text style={styles.regularFont}>  {category}</Text>
                </View>
              ))
            }
          </View>
        </View>

        {/* This is the Description section */}
        <View style={{marginTop: 25}}>
          <Text style={styles.boldedFont}>Description:{"\n\n"}</Text>
          <TextInput multiline={true} style={styles.descriptionTEW} maxLength={MAX_DESCRIPTION_LENGTH} onChangeText={handleDescriptionChange}/>
          <Text style={styles.charactersLeft}>{MAX_DESCRIPTION_LENGTH-descriptionLengthState} characters left</Text>
        </View>

        {/* This is the Clear/Submit section */}
        <View style={{marginTop: 50}}>
          <Button title="Clear"/>
          <Button title="Submit"/>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}