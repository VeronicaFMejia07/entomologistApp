import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {InsectRegistrationScreen} from '../screens/InsectRegistrationScreen';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import StackNavigation from './StackNavigation';

const BottomTab = createMaterialBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          let icon: string = '';

          switch (route.name) {
            case 'Home':
              icon = 'home';
              break;
            case 'Registration':
              icon = 'bug';
              break;
            case 'StackNavigation':
              icon = 'list-alt';
              break;
            default:
              break;
          }

          return <Icon name={icon} size={25} color="purple" />;
        },
      })}>
      <BottomTab.Screen
        name="Home"
        options={{title: 'Inicio'}}
        component={HomeScreen}
      />
      <BottomTab.Screen
        name="Registration"
        options={{title: 'Registro'}}
        component={InsectRegistrationScreen}
      />
      <BottomTab.Screen
        name="StackNavigation"
        options={{title: 'Insecto'}}
        component={StackNavigation}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;
