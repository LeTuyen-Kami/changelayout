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
import Logged from './components/logged';
import {createStore, combineReducers} from 'redux';
import authReducers from './app/Reducers/authReducers';
import {Provider} from 'react-redux';
// import {showAccountDatabase} from './databases/allDatabase';

const store = createStore(combineReducers({authReducers}));

function Home({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        color={'#e91e63'}
        title="goBlogList"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        color={'#e91e63'}
        title="setLogin"
        onPress={() => {
          navigation.navigate('Account', {
            screen: 'Signin',
          });
        }}
      />
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
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'green',
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
function AccountStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Account1"
        component={Account}
        initialParams={{color: '#2196F3'}}
      />
      <Stack.Screen name="Logged" component={Logged} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

const bottomTab = createBottomTabNavigator();
function BotomTab() {
  return (
    <bottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarShowLabel: false,
      }}>
      <bottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
          tabBarInactiveBackgroundColor: '#e91e63',
          headerStyle: {
            backgroundColor: '#e91e63',
          },
          headerTintColor: '#fff',
          tabBarInactiveTintColor: '#fff',
        }}
      />
      <bottomTab.Screen
        name="List"
        component={ProductStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="list" color={color} size={size} />
          ),
          tabBarInactiveBackgroundColor: 'green',
          tabBarInactiveTintColor: '#fff',
        }}
      />
      <bottomTab.Screen
        name="Account"
        component={AccountStack}
        options={{
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({color, size}) => (
            <Icon name="person" color={color} size={size} />
          ),
          tabBarInactiveBackgroundColor: '#2196F3',
          tabBarInactiveTintColor: '#fff',
        }}
      />
    </bottomTab.Navigator>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BotomTab />
      </NavigationContainer>
    </Provider>
  );
}
