import * as React from 'react';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from './components/TabBar'

import Charts from './pages/Charts'
import Wallet from './pages/Wallet'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App(props) {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Wallet" tabBar={(props) => <TabBar {...props} />}>
                <Stack.Screen name="Charts" component={Charts} />
                <Stack.Screen name="Wallet" component={Wallet} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;