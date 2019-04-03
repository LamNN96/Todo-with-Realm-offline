import { createStackNavigator, createAppContainer } from "react-navigation";
import TaskDetail from "../components/TaskDeltail";
import Home from "../components/Home";

export const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  TaskDetail: {
    screen: TaskDetail
  }
}, 
{
    headerMode: 'none'
}
);

export default createAppContainer(AppNavigator);
