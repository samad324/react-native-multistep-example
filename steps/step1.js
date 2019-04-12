import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import styles from "./styles";

class step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  nextStep = () => {
    const { next, saveState } = this.props;
    // Save state for use in other steps
    saveState({ name: "samad" });

    // Go to next step
    next();
  };

  goBack() {
    const { back } = this.props;
    // Go to previous step
    back();
  }

  render() {
    return (
      <View style={[styles.container, styles.step1]}>
        <Text> Step 1 </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={this.nextStep}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default step1;
