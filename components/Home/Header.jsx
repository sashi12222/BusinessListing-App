import { View, Text,Image,TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons';


export default function Header() {
    const { user } = useUser();
  return (
      <View style={{
          padding: 10,
          paddingTop: 40,
          backgroundColor: Colors.PRIMARY,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
    }}>
          <View style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
          }}>
              <Image source={{ uri: user?.imageUrl }}
                  style={{
                  width: 45,
                  height: 45,
                  borderRadius: 99,
                  marginLeft: 15,
                  marginTop: 10,
              }}
              ></Image>
              <View>
                  <Text style={{
                  color: 'white',
              }}>
                  Welcome,
              </Text>
                  <Text style={{
                      fontSize1: 19,
                      fontFamily: 'outfit-medium',
                      color: 'white',
              }}>{ user?.fullName}</Text>
              </View>
            
          </View>
            <View style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 10,
                  alignItems: 'center',
                  backgroundColor: 'white',
                  padding: 10,
                  marginVertical: 10,
                  marginTop: 15,
              borderRadius: 8,

                  
              }}>
                  <Ionicons name="search" size={24} color={Colors.PRIMARY} />
              <TextInput placeholder='search...' style={{
                  fontFamily: 'outfit',
                  fontSize: 16,
                  }} />
              </View>
    </View>
  )
}