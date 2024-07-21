import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Entypo,Feather} from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {Colors} from './../../constants/Colors'
export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor:Colors.PRIMARY
      }}>
      <Tabs.Screen name='home'
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
           
           <Entypo name="home" size={25} color={color} />
            
          )
      }}
      />
       <Tabs.Screen name='explore'
       options={{
          tabBarLabel: 'explore',
          tabBarIcon: ({ color, size }) => (
           
          <Feather name="search" size={24} color={color} />
            
          )
      }}/>
      <Tabs.Screen name='profile'
       options={{
          tabBarLabel: 'profile',
          tabBarIcon: ({ color, size }) => (
           
           <Ionicons name="people-circle" size={24} color={color} />
            
          )
      }}/>
     
    </Tabs>
  )
}