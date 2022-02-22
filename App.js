/* eslint-disable react-native/no-inline-styles */

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {View, Button} from 'react-native';
import 'react-native-gesture-handler';
import Form from './components/test';
import Collections from './components/collections';
import Detail from './components/detail';

function Home({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        title="goBlogList"
        onPress={() => navigation.navigate('BlogList')}
      />
    </View>
  );
}

function BlogList({route, navigation}) {
  return <Collections nav={navigation} />;
}
function BlogDetail(props) {
  return <Detail {...props} />;
}
function Test({navigation}) {
  return <Form input="test" />;
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BlogList" component={BlogList} />
      <Stack.Screen name="BlogDetail" component={BlogDetail} />
      <Stack.Screen name="test" component={Test} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
