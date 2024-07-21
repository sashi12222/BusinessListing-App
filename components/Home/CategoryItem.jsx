import { View, Text,Image } from 'react-native'
import React from 'react'
import { Colors } from './../../constants/Colors'
import { TouchableOpacity } from 'react-native'

export default function CategoryItem({ category, onCategoryPress }) {
  return (
      <TouchableOpacity onPress={()=>onCategoryPress(category)}>
          
          <View style={{
              padding: 15,
              backgroundColor: Colors.ICON_BG,
              borderRadius: 99,
              marginRight: 16,
          }}>
               <Image
                 source={{uri: category.icon}}
              style={{
                  width: 40,
                  height: 40,
                  }}></Image>
              
              {/* <Text>CategoryItem</Text> */}
          </View>
          <Text style={{
                  fontSize: 14,
                  textAlign: 'center',
                  fontFamily: 'outfit-medium',

              }}>{category.name }</Text>
    
    </TouchableOpacity>
  )
}