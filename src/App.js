import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback, Platform, DatePickerAndroid} from 'react-native';
import Moment from 'moment';
import {database} from './Model/database';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import List from './Components/List';
import Header from './Components/Header';
import tasks from './tasks';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_details: {
        name: 'User Name',
      },
      current_date: Moment().format("DD-M-YYYY"),
      tasks: tasks.tasks,
    };
  }

  fetchTasks = async () => {
    const tasks_collection = database.collections.get('tasks');
    const all_tasks = await tasks_collection.query().fetch();
    console.log(all_tasks);
  };

  fetchUserData = async () => {
    console.log('fetchUserData');
  };

  onChangeDate = async () => {
    if(Platform.OS === "android"){
      try {
        const {action, year, month, day} = await DatePickerAndroid.open({
          date: new Date(Moment(this.state.current_date, "DD-M-YYYY").valueOf()),
        });
        if (action !== DatePickerAndroid.dismissedAction) {
          this.setState({
            current_date: `${day}-${month + 1}-${year}`
          });
        }
      } catch ({code, message}) {
        console.warn('Cannot open date picker', message);
      }
    } else if (Platform.OS === "ios") {

    }
  };

  onChangeDateForward = () => {
    this.setState({
      current_date: Moment(this.state.current_date, "DD-M-YYYY").add(1, 'day').format("DD-M-YYYY"),
    });
  };

  onChangeDateBackward = () => {
    this.setState({
      current_date: Moment(this.state.current_date, "DD-M-YYYY").subtract(1, 'day').format("DD-M-YYYY"),
    });
  };

  deleteTask = (index) => {
    let stateCopy = { ...this.state };
    stateCopy.tasks.splice(index, 1);
    this.setState(stateCopy);
  };

  markTaskAsDone = (index) => {
    let stateCopy = { ...this.state };
    stateCopy.tasks[index].is_active = !stateCopy.tasks[index].is_active;
    this.setState(stateCopy);
  };
	
	onTaskClickHandler = (index) => {
		console.log("onTaskClickHandler", index);
	};

  componentDidMount() {
    this.fetchTasks();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          user_details={this.state.user_details}
          fetchData={this.fetchUserData}
        />
        <View style={styles.card_container1}>
          <View style={styles.card_container2}>
            <View style={styles.card_container3}>
              <View style={styles.title_container}>
                <TouchableNativeFeedback onPress={this.onChangeDate}>
                  <View style={styles.date_container}>
                    <Text style={styles.date}>
                      {Moment(this.state.current_date, "DD-M-YYYY").format('D')}
                    </Text>
                    <View style={styles.date_container2}>
                      <Text style={styles.month}>
                        {Moment(this.state.current_date, "DD-M-YYYY").format('MMMM')}
                      </Text>
                      <Text style={styles.day}>
                        {Moment(this.state.current_date, "DD-M-YYYY").format('ddd')}
                      </Text>
                    </View>
                  </View>
                </TouchableNativeFeedback>
                <View style={styles.icon_container}>
                  <TouchableNativeFeedback onPress={this.onChangeDateBackward}>
                    <Icon name="menu-left" size={36} color="#B488DD" />
                  </TouchableNativeFeedback>
                  <TouchableNativeFeedback onPress={this.onChangeDateForward}>
                    <Icon name="menu-right" size={36} color="#B488DD" />
                  </TouchableNativeFeedback>
                </View>
              </View>
              <View style={styles.list_container}>
                <List
                  tasks={this.state.tasks}
                  refresh={this.fetchTasks}
									onClick={this.onTaskClickHandler}
                  swipeLeft={this.deleteTask}
                  swipeRight={this.markTaskAsDone}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.button_container}>
          <View style={styles.button}>
            <Icon
              name="plus-circle-outline"
              size={30}
              color="#FFFFFF"
              style={styles.button_icon}
            />
            <Text style={styles.button_text}>New Task</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#373C4F',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card_container1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    width: '95%',
  },
  card_container2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    width: '95%',
    marginTop: -5,
    marginBottom: -5,
    elevation: 5,
  },
  card_container3: {
    backgroundColor: '#FFFFFF',
    width: '95%',
    marginTop: -10,
    marginBottom: -10,
    elevation: 10,
  },
  title_container: {
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  date_container2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  date: {
    color: '#B488DD',
    fontSize: 40,
    paddingRight: 6,
  },
  month: {
    color: '#B488DD',
    fontSize: 18,
    lineHeight: 19,
    marginBottom: 4,
  },
  day: {
    color: '#B488DD',
    fontSize: 18,
    lineHeight: 19,
    textTransform: 'uppercase',
  },
  icon_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list_container: {
    display: 'flex',
  },
  button_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    paddingTop: 0,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_icon: {
    color: '#FFFFFF',
    marginRight: 16,
  },
  button_text: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default App;
