import React from 'react';
import {Button, TextInput, View} from 'react-native';
import {Formik} from 'formik';

const Signup = props => (
  <Formik
    initialValues={{email: '', password: ''}}
    onSubmit={values => console.log(values)}>
    {({handleChange, handleBlur, handleSubmit, values}) => (
      <View>
        <TextInput
          onChangeText={handleChange('Username')}
          onBlur={handleBlur('Username')}
          value={values.Username}
          placeholder="Username"
        />
        <TextInput
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          placeholder="Email"
        />
        <TextInput
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          placeholder="Password"
        />
        <TextInput
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          placeholder="Confirm Password"
        />
        <Button onPress={handleSubmit} title="Signup" />
        <Button
          onPress={() => props.navigation.navigate('Signin')}
          title="Signin"
        />
      </View>
    )}
  </Formik>
);
export default Signup;
