import React from 'react';
import { Text, View } from 'react-native';

class SwipeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Swipe!</Text>
      </View>
    )
  }
}

export default SwipeScreen;