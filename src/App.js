import React from "react";
import { View, Text } from "react-native";
import { database } from "./Model/database";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View>
        <Text>DoTik</Text>
      </View>
    );
  }
}

export default App;
