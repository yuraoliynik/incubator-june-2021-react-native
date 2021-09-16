import React from 'react';
import {NavigationContainer} from  "@react-navigation/native";
import {DrawerScreen} from "./screens/navigationScreen/Drawer.screen";


export default function App() {
  return (
      <NavigationContainer>
          <DrawerScreen/>
      </NavigationContainer>
  );
}