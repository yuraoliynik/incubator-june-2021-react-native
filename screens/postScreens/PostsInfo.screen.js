import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {PostDetailsScreen} from "./PostDetails.screen";
import {PostsScreen} from "./Posts.screen";


const StackNavigator = createStackNavigator();

export function PostsInfoScreen() {
    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen name={'Posts'} component={PostsScreen} options={{headerShown: false}}/>
            <StackNavigator.Screen name={'PostDetails'} component={PostDetailsScreen}/>
        </StackNavigator.Navigator>
    );
}