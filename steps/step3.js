import React, { Component } from "react";
import { Image, View, TouchableOpacity, TextInput } from "react-native";

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
      <View style={[styles.container, styles.step1]}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          placeholder={"City"}
          placeholderTextColor="#fff"
        />
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          placeholder={"Country"}
          placeholderTextColor="#fff"
        />
        <View style={[styles.btnContainer, styles.marginAround]}>
          <TouchableOpacity onPress={this.props.back} style={styles.btnStyle}>
            <Image
              source={require("../assets/icons/arrow.png")}
              style={[styles.btnImage, styles.backBtn]}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.next} style={styles.btnStyle}>
            <Image
              source={require("../assets/icons/arrow.png")}
              style={styles.btnImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default step3;
