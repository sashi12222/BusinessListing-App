import { View, Text ,Image} from 'react-native'
import React, { useEffect,useState } from 'react'
import { collection, getDocs, query } from '@firebase/firestore'
import {db} from './../../config/FirebaseConfig'
import { FlatList } from 'react-native';

export default function Slider() {
    const [sliderList,setSliderList] =useState([]);
    useEffect(() => {
        GetSliderList();
    },[])
    const GetSliderList = async () => {
         setSliderList([]);
         const q = query(collection(db, 'Slider'))
         const querySnapshot = await getDocs(q);
         querySnapshot.forEach((doc) => {
             console.log(doc.data());
             setSliderList(prev=>[...prev,doc.data()]);
         });
        }
    return (
     
    <View>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 30,
                paddingLeft: 15,
                paddingRight: 15,
            }}>
                #special for you 
                
            </Text>
            <FlatList
                data={sliderList} horizontal={true} showsHorizontalScrollIndicator={false} renderItem={({ item }) => (
                    <Image source={{ uri: item.imageUrl }}
                        style={{
                            width: 300,
                            height: 160,
                            borderRadius: 15,
                            marginRight: 15,
                    }} />
                )}
            
            />
    </View>
  )
}