import {ScrollView,View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import Category from '../../components/Home/Category'
import BusinessList from '../../components/Home/BusinessList'


export default function home() {
  return (
    <ScrollView style={{
      height:'100'
    }}>
      {/* header */}
      <Header></Header>
      <Slider></Slider>
      <Category></Category>
      <BusinessList></BusinessList>
      
    </ScrollView>
    
  )
}