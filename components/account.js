/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SwitchActions} from 'react-navigation';

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#2196F3',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginTop: 20,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
function Account(props) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 15}}>
        Please sign in to your account. If you don't have an account, please
      </Text>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('AccountStack', {
            screen: 'Signin',
          })
        }
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Signin</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Account;
