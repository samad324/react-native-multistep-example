import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import styles from "./styles";

export class step2 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { getState } = this.props;
    const state = getState();
    console.log("TCL: step2 -> componentDidMount -> state", state);
  }

  nextStep = () => {
    const { next, saveState } = this.props;
    saveState({ email: "sam@test.com" });
    next();
  };

  render() {
    return (
        <View style={[styles.container, styles.step2]}>
        <Text> Step 2 </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={this.props.back}>
            <Text>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.nextStep}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default step2;
