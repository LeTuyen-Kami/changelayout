import React from 'react';
import {Button, TextInput, View, Text} from 'react-native';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {writeAccountDatabase} from '../databases/allDatabase';
import * as yup from 'yup';

const font_size = 17;

const formValidation = yup.object().shape({
  Username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password not match')
    .required(),
});

const Signup = props => (
  <Formik
    initialValues={{email: '', password: '', Username: '', confirmPassword: ''}}
    validationSchema={formValidation}
    onSubmit={values => {
      let a = +values.Username;
      console.log(a);
      writeAccountDatabase(values);
      props.navigation.navigate('Signin');
    }}>
    {({handleChange, handleBlur, handleSubmit, values, errors}) => (
      <View>
        {errors.Username && <Text>{errors.Username}</Text>}
        <TextInput
          onChangeText={handleChange('Username')}
          onBlur={handleBlur('Username')}
          value={values.Username}
          placeholder="Username"
        />
        {errors.email && <Text>{errors.email}</Text>}
        <TextInput
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          placeholder="Email"
        />
        {errors.password && <Text>{errors.password}</Text>}
        <TextInput
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          placeholder="Password"
        />
        {errors.confirmPassword && <Text>{errors.confirmPassword}</Text>}
        <TextInput
          onChangeText={handleChange('confirmPassword')}
          onBlur={handleBlur('confirmPassword')}
          value={values.confirmPassword}
          placeholder="Confirm Password"
        />
        <Button onPress={handleSubmit} title="Signup" />
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            fontSize: font_size,
          }}>
          <Text style={{fontSize: font_size}}>Already have an account?</Text>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              color: 'blue',
              textDecorationLine: 'underline',
              fontSize: font_size,
            }}
            onPress={() => props.navigation.navigate('Signin')}>
            Signin
          </Text>
        </View>
      </View>
    )}
  </Formik>
);
export default connect(state => ({
  isLogged: state.authReducers,
}))(Signup);
