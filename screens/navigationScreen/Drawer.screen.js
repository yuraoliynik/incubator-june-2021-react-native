import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from "../homeScreen/HomeScreen";
import {BottomTabScreen} from "./BottomTab.screen";


const Drawer = createDrawerNavigator();

export function DrawerScreen() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name={'Home'} component={HomeScreen}/>
            <Drawer.Screen name={'Info'} component={BottomTabScreen}/>
        </Drawer.Navigator>
    );
}