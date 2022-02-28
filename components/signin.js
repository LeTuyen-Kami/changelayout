import React from 'react';
import {Button, TextInput, View, Text, Alert} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {login} from '../app/Actions/authActions';
import {connect} from 'react-redux';
import {readAccountDatabase} from '../databases/allDatabase';

const font_size = 17;
const formValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const Signin = props => (
  <Formik
    initialValues={{email: '', password: ''}}
    validationSchema={formValidation}
    onSubmit={values => {
      if (readAccountDatabase) {
        props.login();
        props.navigation.reset({
          index: 0,
          routes: [{name: 'Logged'}],
        });
      } else {
        Alert.alert('Wrong email or password');
      }
    }}>
    {({handleChange, handleBlur, handleSubmit, values, errors}) => (
      <View>
        {errors.email && <Text>{errors.email}</Text>}
        <TextInput
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          placeholder="Email"
          style={{fontSize: font_size}}
        />
        {errors.password && <Text>{errors.password}</Text>}
        <TextInput
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          placeholder="Password"
          style={{fontSize: font_size}}
        />
        <Button onPress={handleSubmit} title="Signin" />
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            fontSize: font_size,
          }}>
          <Text style={{fontSize: font_size}}>Don't have an account?</Text>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              color: 'blue',
              textDecorationLine: 'underline',
              fontSize: font_size,
            }}
            onPress={() => props.navigation.navigate('Signup')}>
            Signup
          </Text>
        </View>
      </View>
    )}
  </Formik>
);
export default connect(
  state => ({
    isLogged: state.authReducers,
  }),
  dispatch => ({
    login: () => dispatch(login(true)),
  }),
)(Signin);
