import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ListItem = props => {
  return (
    <View style={styles.list_item_container}>
      <Text style={{ color: '#373C4F', textDecorationLine: props.task.is_active ? 'none' : 'line-through'}}>{props.task.task_name}</Text>
      <Text style={{ color: '#373C4F', textDecorationLine: props.task.is_active ? 'none' : 'line-through'}}>{props.task.task_time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  list_item_container: {
    padding: 24,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  list_item_name: {
    color: '#373C4F',
  },
  list_item_time: {
    color: '#373C4F',
  },
});

export default ListItem;
