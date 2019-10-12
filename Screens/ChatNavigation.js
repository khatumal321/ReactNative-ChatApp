
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import Login from './Login'
import MainScreen from './Main'
import Alluser from './Alluser'
import Active from './Active'
import Allchat from './Allchat'
const TabScreens = createBottomTabNavigator({
    Allchat: {
        screen: Allchat,
    }  ,
    Active: {
        screen: Active,
    } , 
    Alluser: {
        screen: Alluser,
    }  
},
);



let AppNavigator = createStackNavigator({ Login: Login });
let AppStack = createStackNavigator({ MainScreen: MainScreen });
let SwitchNav = createAppContainer(createSwitchNavigator({ Auth: AppNavigator, Main: AppStack }))
let TabNav = createAppContainer(TabScreens)
export {
    SwitchNav,
    TabNav
};