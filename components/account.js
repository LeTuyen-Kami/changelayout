/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Logged from './logged';
import {connect} from 'react-redux';

function Account(props) {
  return !props.data.isLogin ? (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 15}}>
        Please sign in to your account. If you don't have an account, please
      </Text>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('Signin', {
            color: '#2196F3',
          })
        }
        style={styles(props).appButtonContainer}>
        <Text style={styles(props).appButtonText}>Signin</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <Logged navigation={props.navigation} />
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
export default connect(state => ({
  data: state.authReducers,
}))(Account);
