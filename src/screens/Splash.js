import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = { timwer: 0 };
    // setInterval(() => {
    //   this.setState({ timwer: this.state.timwer + 1})
    // }, 1000)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{'Xin chào!!!'}</Text>
        {/* <Text style={styles.title}>{'Xin chào mình là Huỳnh Hoa: ${this.state.timwer}'}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    color: 'green'
  },
});
