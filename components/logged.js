import React from 'react';
import {View, StyleSheet, Image, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {login} from '../app/Actions/authActions';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '30%',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
});

function Logged(props) {
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/account1.png')}
          style={styles.logo}
        />
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <Text style={{fontSize: 20, color: 'red'}}>test</Text>
      </View>
      <Button
        title="Logout"
        onPress={() => {
          props.logout();
          if (props.isLogged.typeLogin === 'GOOGLE') {
            signOut();
          }
          props.navigation.reset({
            index: 0,
            routes: [{name: 'Account1'}],
          });
        }}
      />
    </View>
  );
}
export default connect(
  state => ({
    isLogged: state.authReducers,
  }),
  dispatch => ({
    logout: () => dispatch(login(false)),
  }),
)(Logged);
