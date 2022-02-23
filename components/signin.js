import React from 'react';
import {Button, TextInput, View} from 'react-native';
import {Formik} from 'formik';

const Signin = props => (
  <Formik
    initialValues={{email: '', password: ''}}
    onSubmit={values => console.log(values)}>
    {({handleChange, handleBlur, handleSubmit, values}) => (
      <View>
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
        <Button onPress={handleSubmit} title="Signin" />
        <Button
          onPress={() => props.navigation.navigate('Signup')}
          title="Signup"
        />
      </View>
    )}
  </Formik>
);
export default Signin;
