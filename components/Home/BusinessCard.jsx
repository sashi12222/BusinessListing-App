import { View, Text,Image } from 'react-native'
import React from 'react'
import {Colors} from './../../constants/Colors'
export default function BusinessCard({business}) {
  return (
      <View style={{
          marginLeft: 29,
          padding: 10,
          backgroundColor: 'white',
          borderRadius: 15,
    }}>
          <Image
              source={{ uri: business.imageUrl }}
              style={{
                  width: 200,
                  height: 130,
                  borderRadius: 15,
              }}
          ></Image>
          <View  style={{marginTop:7,gap:5}}>
              <Text
                  style={{
                      fontFamily: 'outfit-bold',
                      fontSize: 17,
                      textAlign: 'center',
              }}
              >{business.name}</Text> 
              <Text
                  style={{
                      fontFamily: 'outfit',
                      fontSize: 13,
                      textAlign: 'center',
                      color:Colors.GRAY
              }}
              >{business.address}</Text>
          
              <View style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  
              }}>
                      <View style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
          }}>
              <Image source={require('./../../assets/images/star.png')} style={{
                  width: 20,
                  height: 20,
              }}></Image>
              <Text style={{
                  fontFamily: 'outfit',
              }}>4.5</Text>
              
                  </View>
                  <Text style={{
                      fontFamily: 'outfit',
                      backgroundColor: Colors.PRIMARY,
                      color: 'white',
                      padding: 5,
                      fontSize: 12,
                        borderRadius:5
              }}>
                  {business.category}
                  </Text>
          </View>
          </View>
          </View>

      
  )
}