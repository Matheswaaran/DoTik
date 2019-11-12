import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ListItem = props => {
  return (
    <View style={styles.list_item_container}>
      <Text style={styles.list_item_name}>React Native Frontend</Text>
      <Text style={styles.list_item_time}>13:00</Text>
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
