import React, { Component } from "react";
import { View } from "react-native";
import AnimatedMultistep from "./lib";

import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import Step4 from "./steps/step4";

const allSteps = [
  { name: "step 1", component: Step1 },
  { name: "step 2", component: Step2 },
  { name: "step 3", component: Step3 },
  { name: "step 4", component: Step4 }
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  finish = state => {
    console.log("TCL: App -> state", state);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AnimatedMultistep
          steps={allSteps}
          onFinish={this.finish}
          animate={true}
        />
      </View>
    );
  }
}
