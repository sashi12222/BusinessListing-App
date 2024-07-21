import { View, Text } from 'react-native'
import React from 'react'
import {Colors} from './../../constants/Colors'
import { collection, query,getDocs,limit } from 'firebase/firestore'
import { useEffect,useState } from 'react'
import { db } from './../../config/FirebaseConfig'
import { FlatList } from 'react-native'
import BusinessCard from './BusinessCard'

export default function BusinessList() {
    const [businessList,setBusinessList] = useState([])
    useEffect(() => {
        GetBusinessList();
    }, [])
    const GetBusinessList = async () => {
        setBusinessList([])
        const q = query(collection(db, 'BusinessList'), limit(5))
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            console.log(doc.data())
            setBusinessList(prev=>[...prev,doc.data()])
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
             
      }}>Popular Business</Text>
              <Text style={{
                  color: Colors.PRIMARY,
                  fontFamily: 'outfit-medium',
      }}>View All</Text>
            </View>
            <FlatList
                data={businessList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                <BusinessCard business={item} key={index}></BusinessCard>
                    
                )}
            >
                
    </FlatList>
    </View>
  )
}