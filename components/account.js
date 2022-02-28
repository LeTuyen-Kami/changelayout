/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function Account(props) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 15}}>
        Please sign in to your account. If you don't have an account, please
      </Text>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('Account', {
            screen: 'Signin',
          })
        }
        style={styles(props).appButtonContainer}>
        <Text style={styles(props).appButtonText}>Signin</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = props =>
  StyleSheet.create({
    appButtonContainer: {
      elevation: 8,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 50,
      marginTop: 20,
      backgroundColor: props.color || '#2196F3',
    },
    appButtonText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
      alignSelf: 'center',
      textTransform: 'uppercase',
    },
  });
export default Account;
