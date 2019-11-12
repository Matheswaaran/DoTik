import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import ListItem from './ListItem';

const List = props => {
  return (
    <View style={styles.list_container}>
      <ScrollView style={styles.scroll_view}>
        <ListItem />
        <ListItem />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  list_container: {
    minHeight: 450,
  },
  scroll_view: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
});

export default List;
