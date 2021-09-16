import React from 'react';
import {StyleSheet} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {UsersInfoScreen} from "../userScreens/UsersInfo.screen";
import {PostsInfoScreen} from "../postScreens/PostsInfo.screen";


const BottomTab = createBottomTabNavigator();

export function BottomTabScreen() {
    return (
        <BottomTab.Navigator screenOptions={screenOptions}>
            <BottomTab.Screen name={'UsersInfo'} component={UsersInfoScreen} options={{tabBarLabel: 'Users'}}/>
            <BottomTab.Screen name={'PostsInfo'} component={PostsInfoScreen} options={{tabBarLabel: 'Posts'}}/>
        </BottomTab.Navigator>
    );
}

const screenOptions = {
    headerShown: false,

    tabBarIconStyle: {
        display: 'none'
    },

    tabBarLabelStyle: {
        fontSize: 18,
        paddingBottom: 12
    }
};