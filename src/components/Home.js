import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";
import Realm from "realm";
import ItemTask from "./ItemTask";
import { TaskSchema } from "../realm/schema";
import styles from "../themes/styles";
import Modal from "react-native-modal";
import Header from "./Header";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isShowModal: false,
      text: ""
    };
    this.realm = new Realm({ schema: [TaskSchema] });
  }
  componentDidMount() {
    this.setState({ tasks: this.realm.objects("Task") });
  }

  onAddTaskClick = () => {
    this.setState({
      isShowModal: true
    });
  };

  onAddClick = () => {
    try {
      this.realm.write(() => {
        this.realm.create("Task", {
          title: this.state.text,
          active: true
        });
      });
    } catch (e) {
      console.log(e);
    }
    this.setState({ isShowModal: false });
    this.refreshData();
  };

  onChangeText = text => {
    this.setState({
      text
    });
  };

  onChangeValue = item => {
    console.log(item);
  };

  refreshData = () => {
    this.setState({
      tasks: this.realm.objects("Task"),
      text: "",
      isShowModal: false
    });
  };

  render() {
    const { isShowModal, tasks } = this.state;
    return (
      <View style={styles.container}>
        <Header
          title="Home"
          titleButton="Add Task"
          onRightPress={this.onAddTaskClick}
        />
        <FlatList
          style={styles.listTask}
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ItemTask
              item={item}
              index={index}
              onChangeValue={this.onChangeValue}
              navigation={this.props.navigation}
            />
          )}
        />
        <Modal
          isVisible={isShowModal}
          onBackdropPress={() => this.setState({ isShowModal: false })}
        >
          <View style={styles.modalContainer}>
            <View style={styles.inputRow}>
              <TextInput
                value={this.state.text}
                underlineColorAndroid="black"
                onChangeText={this.onChangeText}
                placeholder="Enter new task here"
              />
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={this.onAddClick} style={styles.cancelButton}>
                <Text style={styles.textAdd}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.onAddClick} style={styles.addButton}>
                <Text style={styles.textAdd}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
