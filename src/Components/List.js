import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import ListItem from './ListItem';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const List = props => {
  let data = props.tasks.map((data, i) => ({ ...data, key: `${i}` }));

  const onRowChange = (rowKey, rowMap, toValue) => {
    rowMap[rowKey].closeRow();
    if(toValue > 0) {
      props.swipeRight(rowKey);
    } else {
      setTimeout(() => {
        props.swipeLeft(rowKey);
      }, 1000)
    }
  };

  console.log(Dimensions.get('window').height - 350);

  return (
    <View style={styles.list_container}>
      <SwipeListView
        useFlatList={true}
        data={data}
        leftOpenValue={40}
        rightOpenValue={-40}
        previewRowKey="0"
        onRowOpen={onRowChange}
        renderItem={(data, rowMap) => (
          <TouchableWithoutFeedback onPress={() => props.onClick(data.index)}>
            <View style={styles.list_item}>
              <ListItem task={data.item} />
            </View>
          </TouchableWithoutFeedback>
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
    height: Dimensions.get('window').height - 320,
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
