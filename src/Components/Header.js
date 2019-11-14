import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableNativeFeedback, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = (props) => {
  const [ visible, setVisible ] = useState(false);
  const [ username, setUsername ] = useState(props.user_details.name);

  return (
    <React.Fragment>
      <View style={styles.name_container}>
        <Text />
        <Text style={styles.user_name}>{props.user_details.name}</Text>
        <TouchableNativeFeedback onPress={() => setVisible(true)}>
          <Icon name="settings-outline" size={21} color="#FFFFFF" />
        </TouchableNativeFeedback>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}
        onShow={() => setUsername(props.user_details.name)}
      >
        <View style={styles.modal_container}>
          <View style={styles.modal}>
            <View style={styles.input_container}>
              <TextInput 
                style={styles.text_input}
                placeholder="Enter a name"
                autoFocus={true}
                defaultValue={username}
                value={username}
                onChangeText={(e) => setUsername(e)}
              />
              <Text style={styles.hint_text}>Max char 25</Text>
            </View>
            <View style={styles.btn_container}>
              <TouchableNativeFeedback onPress={() => setVisible(false)}>
                <View style={styles.ok_button}>
                  <Text style={styles.ok_text}>OK</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>
      </Modal>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
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
  modal_container: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: '#FFFFFF',
    minHeight: 100,
    paddingTop: 30,
    paddingBottom: 30,
    minHeight: '20%',
    minWidth: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input_container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  text_input: {
    borderColor: '#373C4F',
    borderWidth: 1,
    borderRadius: 5,
    minWidth: '60%',
    height: 40,
    fontSize: 14,
  },
  hint_text: {
    color: '#8C8C8C',
    fontSize: 12,
    marginTop: 4,
  },
  btn_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    minWidth: '60%',
    marginTop: 8,
  },
  ok_button: {
    width: 73,
    height: 32,
    backgroundColor: '#373C4F',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ok_text: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});

export default Header;