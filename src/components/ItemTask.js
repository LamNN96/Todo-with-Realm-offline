import React, { PureComponent } from "react";
import { View, Text, CheckBox, TouchableOpacity } from "react-native";
import styles from "../themes/styles";

export default class ItemTask extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.item.active
    };
    console.log("constructer");
  }

  onItemClick = () => {
    const { item, index, navigation } = this.props;
    navigation.navigate("TaskDetail", {
      item,
      index
    });
  };

  onChange = () => {
  };

  onValueChange = () => {
    this.setState({
      value: !this.state.value
    });
    this.props.onChangeValue({
      title: this.props.item.title,
      active: this.state.value
    });
  };

  render() {
    const { item } = this.props;
    const { value } = this.state;
    return (
      <View style={styles.taskItemContainer}>
        <TouchableOpacity
          style={styles.textItemContainer}
          onPress={this.onItemClick}
        >
          <Text style={value ? styles.textActiveItem : styles.textDoneItem}>
            {item.title}
          </Text>
        </TouchableOpacity>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={!value}
            onChange={this.onChange}
            onValueChange={this.onValueChange}
          />
        </View>
      </View>
    );
  }
}
