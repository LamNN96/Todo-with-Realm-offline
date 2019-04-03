import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../themes/styles";

export default class Header extends Component {
  render() {
    const { title, onRightPress, titleButton, onLeftPress } = this.props;
    return (
      <View style={styles.header}>
        {onLeftPress ? (
          <TouchableOpacity onPress={onLeftPress} style={styles.headerLeft}>
            <Text style={styles.headerText}>Back</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.headerLeft} />
        )}
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}> {title} </Text>
        </View>
        <TouchableOpacity onPress={onRightPress} style={styles.headerRight}>
          <Text style={styles.headerText}>{titleButton}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
