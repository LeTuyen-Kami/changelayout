import React from 'react';
import {Button, TextInput, View, Text, Alert} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {login} from '../app/Actions/authActions';
import {connect} from 'react-redux';
import {readAccountDatabase} from '../databases/allDatabase';
import Icon from 'react-native-vector-icons/AntDesign';

const font_size = 17;
const formValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const Signin = props => (
  // !props.isLogged.isLogin ?
  <View style={{flex: 1, justifyContent: 'center'}}>
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={formValidation}
      onSubmit={values => {
        readAccountDatabase(values)
          .then(data => {
            if (data) {
              props.navigation.pop(2);
              props.login(values.email, 'NORMAL');
              // reset({
              //   index: 0,
              //   routes: [{name: 'Logged'}],
              // });
            } else {
              Alert.alert('Wrong email or password');
            }
          })
          .catch(err => {
            console.log(err);
          });
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
          <Button
            color={props.route.params.color}
            onPress={handleSubmit}
            title="Signin"
          />
          {/* <View
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
              onPress={() =>
                props.navigation.navigate('Signup', {
                  color: props.route.params.color,
                })
              }>
              Signup
            </Text>
          </View> */}
        </View>
      )}
    </Formik>
  </View>
);
// : (
//   <Logged navigation={props.navigation} />
// );
export default connect(
  state => ({
    isLogged: state.authReducers,
  }),
  dispatch => ({
    login: (name, typeLogin) => dispatch(login(true, name, typeLogin)),
  }),
)(Signin);
