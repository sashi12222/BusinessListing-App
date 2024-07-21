import { View, Text } from 'react-native'
import React from 'react'
import { useEffect,useState } from 'react'
import {Colors} from './../../constants/Colors'
import { collection,getDocs, query } from 'firebase/firestore'
import { db } from './../../config/FirebaseConfig'
import { FlatList } from 'react-native'
import CategoryItem from './CategoryItem'
export default function Category() {
    const [categoryList,setCategorList] = useState([])
    useEffect(() => {
        GetCategoryList()
    }, [])
    const GetCategoryList = async () => {
        setCategorList([])
        const q = query(collection(db, 'Category'));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            console.log(doc.data())
            setCategorList(prev=>[...prev,doc.data()])
        })
          }
  return (
    <View>
          <View style={{
              padding: 20,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
             
          }}>
              
               <Text style={{
              paddingLeft: 15,
       
              fontSize: 20,
              fontFamily: 'outfit-bold',
             
      }}>Category</Text>
              <Text style={{
                  color: Colors.PRIMARY,
                  fontFamily: 'outfit-medium',
      }}>View All</Text>
          </View>
          <FlatList
              data={categoryList}
              horizontal={true}
              style={{
                  marginLeft: 20,
              }}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                  <CategoryItem category={item} key={index}
                  onCategoryPress={(category)=>console.log(category)}
                  />
              )}
          />
    </View>
  )}
