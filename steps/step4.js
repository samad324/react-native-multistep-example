import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import styles from "./styles";

export class step4 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={[styles.container, styles.step4]}>
        <Text> Step 4 </Text>
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

export default step4;
