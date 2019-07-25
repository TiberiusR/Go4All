/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class go4all extends Component {

  constructor(){
    super();
    this.state={
      ColorHolder: '#FFFFFF'
    }
  }

ChangeColor=()=>
{
  var colorList = {
    0: '#FFFFFF',
    1: '#000000',
    2: '#0022FF',
    3: '#5CFF78',
    4: '#F05CFF',
    5: '#FF0000',
    6: '#8900FF',
    7: '#EFFF00',
    8: '#919191',
    9: '#B666D2'
  }
  var timestamp = Date.now();
  timestamp = timestamp.toString();
  var colorCode = colorList[parseInt(timestamp[timestamp.length - 1])];

  this.setState({
    ColorHolder: colorCode
  })
}

  render() {
    return (
      <View style={[styles.sectionContainer, {backgroundColor: this.state.ColorHolder}]}>
        <Text style={styles.sectionTitle}>Go 4All</Text>
        <Button
          onPress={this.ChangeColor}
          title="Press Me"
          color="green"
          accessibilityLabel="Button changes background color"
        />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 48,
    fontWeight: '600',
    color: '#362121',
  },
});
