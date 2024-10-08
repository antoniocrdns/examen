import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import FeedScreen from "./screens/FeedScreen";
import VideoScreen from "./screens/VideoScreens";
import ButtonsScreen from "./screens/ButtonsScreens";
import StackScreen from "./screens/StackScreen";

// Iconos
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';


const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="FeedScreen"
        >
        <HomeStackNavigator.Screen
            name="Feed Screen"
            component={FeedScreen}
        />
        <HomeStackNavigator.Screen
            name="Stack"
            component={StackScreen}
            options={{
                headerBackTitleVisible: false,
            }}
        />

        </HomeStackNavigator.Navigator>
    )
}   

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="FeedScreen"
            screenOptions={{
                tabBarActiveTintColor: "blue",
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={MyStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="feed" size={size} color={color} />
                    ),
                    headerShown: true,
                }}  
            />
            <Tab.Screen 
                name="Video" 
                component={VideoScreen}
                options={{
                    tabBarLabel: 'Video',
                    tabBarIcon: ({ color, size }) => (
                        <Octicons name="video" size={size} color={color} />
                    ),
                    headerShown: true,
                }}  
            />
            <Tab.Screen 
                name="Buttons" 
                component={ButtonsScreen}
                options={{
                    tabBarLabel: 'Buttons',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="smart-button" size={size} color={color} />
                    ),
                    headerShown: true,
                }}  
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}