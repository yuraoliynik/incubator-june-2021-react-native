import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {UserDetailsScreen} from "./UserDetails.screen";
import {UsersScreen} from "./Users.screen";


const StackNavigator = createStackNavigator();

export function UsersInfoScreen() {
    return (
        <StackNavigator.Navigator initialRouteName={'Users'}>
            <StackNavigator.Screen name={'UserDetails'} component={UserDetailsScreen}/>
            <StackNavigator.Screen name={'Users'} component={UsersScreen} options={{headerShown: false}}/>
        </StackNavigator.Navigator>
    );
}