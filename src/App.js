import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Moment from 'moment';
import {database} from './Model/database';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import List from './Components/List';
import tasks from './tasks';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_details: {
        name: 'Rockin MAT',
      },
      current_date: Date.now(),
      tasks: tasks.tasks,
    };
  }

  fetchTasks = async () => {
    const tasks_collection = database.collections.get('tasks');
    const all_tasks = await tasks_collection.query().fetch();
    console.log(all_tasks);
  };

  deleteTask = () => {
    console.log('deleteTask');
  };

  markTaskAsDone = (index) => {
    console.log('markTaskAsDone');
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
        <View style={styles.name_container}>
          <Text />
          <Text style={styles.user_name}>{this.state.user_details.name}</Text>
          <Icon name="settings-outline" size={21} color="#FFFFFF" />
        </View>
        <View style={styles.card_container1}>
          <View style={styles.card_container2}>
            <View style={styles.card_container3}>
              <View style={styles.title_container}>
                <View style={styles.date_container}>
                  <Text style={styles.date}>
                    {Moment(this.state.current_date).format('D')}
                  </Text>
                  <View style={styles.date_container2}>
                    <Text style={styles.month}>
                      {Moment(this.state.current_date).format('MMMM')}
                    </Text>
                    <Text style={styles.day}>
                      {Moment(this.state.current_date).format('ddd')}
                    </Text>
                  </View>
                </View>
                <View style={styles.icon_container}>
                  <View>
                    <Icon name="menu-left" size={36} color="#B488DD" />
                  </View>
                  <View>
                    <Icon name="menu-right" size={36} color="#B488DD" />
                  </View>
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
  name_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 24,
    paddingBottom: 0,
  },
  user_name: {
    color: '#FFFFFF',
    fontSize: 24,
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
