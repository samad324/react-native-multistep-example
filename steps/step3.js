import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import styles from "./styles";

export class step3 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { getState } = this.props;
    const state = getState();
    console.log("TCL: step3 -> componentDidMount -> state", state);
  }

  render() {
    return (
      <View style={[styles.container, styles.step3]}>
        <Text> Step 3 </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={this.props.back}>
            <Text>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.next}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default step3;
