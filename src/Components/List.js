import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import ListItem from './ListItem';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const List = props => {
  const [refresh, setRefresh] = useState(false);
  return (
    <View style={styles.list_container}>
      <SwipeListView
        useFlatList={true}
        data={props.tasks}
        leftOpenValue={40}
        rightOpenValue={-40}
        renderItem={(data, rowMap) => (
          <TouchableNativeFeedback key={data.index} onPress={() => props.onClick(data.index)}>
            <View style={styles.list_item}>
              <ListItem task={data.item} />
            </View>
          </TouchableNativeFeedback>
        )}
        renderHiddenItem={(data, rowMap) => (
          <View style={styles.hidden_container}>
            <Icon name="check-circle-outline" size={21} color="#373C4F" />
            <Icon name="delete-outline" size={21} color="#373C4F" />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list_container: {
    height: 450,
  },
  scroll_view: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  list_item: {
    backgroundColor: '#FFFFFF',
  },
  hidden_container: {
    display: 'flex',
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});

export default List;
