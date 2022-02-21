/* eslint-disable react-native/no-inline-styles */

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {Text, View, Button} from 'react-native';
import 'react-native-gesture-handler';
function Home({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Home!</Text>
      <Button
        title="goBlogList"
        onPress={() => navigation.navigate('BlogList')}
      />
    </View>
  );
}

function BlogList({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Blog List!</Text>
      <Button
        title="goBlogDetail"
        onPress={() => navigation.navigate('BlogDetail')}
      />
      <Button title="goBack" onPress={() => navigation.goBack()} />
    </View>
  );
}
function BlogDetail({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Blog Detail!</Text>
      <Button title="goBack" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BlogList" component={BlogList} />
      <Stack.Screen name="BlogDetail" component={BlogDetail} />
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
