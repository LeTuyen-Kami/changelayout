/* eslint-disable react-native/no-inline-styles */

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {View, Button} from 'react-native';
import 'react-native-gesture-handler';
import Collections from './components/collections';
import Detail from './components/detail';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Account from './components/account';
import Signin from './components/signin';
import Signup from './components/signup';

function Home({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button title="goBlogList" onPress={() => navigation.navigate('List')} />
    </View>
  );
}

function ProductList({route, navigation}) {
  return <Collections nav={navigation} />;
}
function ProductDetail(props) {
  return <Detail {...props} />;
}

const Stack = createStackNavigator();

function ProductStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}

function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function BotomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={ProductStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AccountStack"
        component={AccountStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <BotomTab />
    </NavigationContainer>
  );
}
