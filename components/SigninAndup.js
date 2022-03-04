import React from 'react';
import {View, Button, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {connect} from 'react-redux';
import {login} from '../app/Actions/authActions';

function SigninAndSignup(props) {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '404342675455-g9tj8bnnsnegvoitumk1ttead4capprb.apps.googleusercontent.com',
      offLineAccess: true,
      forceCodeForRefreshToken: true,
    });
    isSignIn();
  }, []);
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
      props.login(userInfo.user.email, 'GOOGLE');
      props.navigation.goBack();
    } catch (error) {
      console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available or Outdated');
      } else {
        console.log('Some Other Error Happened');
      }
    }
  };
  const isSignIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      try {
        const userInfo = await GoogleSignin.signInSilently();
        setUser(userInfo);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('not signed in');
    }
  };
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUser({});
    } catch (error) {
      console.error(error);
    }
  };
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Icon
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          position: 'absolute',
          right: 20,
          top: 20,
        }}
        name="close"
        size={30}
        color="black"
        onPress={() => props.navigation.goBack()}
      />
      <Button
        title="Signin"
        color={props.route.params.color}
        onPress={() => {
          props.navigation.navigate('Signin', {
            color: props.route.params.color,
          });
        }}
      />
      <Button
        title="Signup"
        color={props.route.params.color}
        onPress={() => {
          props.navigation.navigate('Signup', {
            color: props.route.params.color,
          });
        }}
      />
      {!user.idToken ? (
        <View style={{alignSelf: 'center'}}>
          <GoogleSigninButton
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width: 192, height: 48}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signIn}
          />
        </View>
      ) : (
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: '#fff',
              padding: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#ddd',
              alignItems: 'center',
              margin: 10,
            }}
            onPress={() => {
              signOut();
            }}>
            <Text>Sign Out</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
export default connect(
  state => ({
    isLogged: state.authReducers,
  }),
  dispatch => ({
    login: (name, typeLogin) => dispatch(login(true, name, typeLogin)),
  }),
)(SigninAndSignup);
