import React, { Component } from "react";
import { View, TextInput } from "react-native";
import Header from "./Header";

export default class TaskDetail extends Component {
  constructor(props) {
    super(props);
    const { item } = this.props.navigation.state.params;
    this.state = {
      text: item.title
    };
  }

  render() {
    return (
      <View>
        <Header title="Detail" titleButton="Edit" onLeftPress={()=>{this.props.navigation.goBack()}}/>
        <TextInput
          value={this.state.text}
          underlineColorAndroid="black"
          onChangeText={this.onChangeText}
        />
      </View>
    );
  }
}
