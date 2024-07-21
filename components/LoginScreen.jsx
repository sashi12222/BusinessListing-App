import { View, Text, Image } from 'react-native'
import { Colors } from './../constants/Colors'
import { StyleSheet } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import { TouchableOpacity } from 'react-native'
import { useWarmUpBrowser } from './../hooks/UseWarmUpBrowser'

import { Link } from "expo-router";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking"


WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

   const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View>
          <View style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: 100,
          }}>
               <Image source={require('./../assets/images/login.png')}
                  style={{
                      width: 200,
                      height: 400,
                      borderRadius: 20,
                      borderWidth: 6,
                      borderColor: '#000',
              
          }}
          />
          </View>
          
          <View style={styles.subContainer}>
              <Text style={{
                  fontSize: 30,
                  fontFamily: 'outfit-bold',
                  textAlign: 'center'
              }}>Your  Ultimate  <Text style={{ color: Colors.PRIMARY }}>Community Bussiness Directory </Text>App </Text>
              <Text style={{
                  fontFamily: 'outfit',
                  fontSize: 20,
                  textAlign: 'center',
                  color:Colors.GRAY
                  
              }}>Find your favourite business near you and post your own bussiness community</Text>
              <TouchableOpacity style={styles.btn} onPress={onPress}>
                  <Text style={{
                      textAlign: 'center',
                      color: '#fff',
                      fontFamily: 'outfit-bold',
                  }}>
                      Let's Get Started
                  </Text>
              </TouchableOpacity>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    subContainer: {
        backgroundColor: '#fff',
        padding: 25,
        marginTop: -20,
    },
    btn: {
        backgroundColor: Colors.PRIMARY,
        padding: 10,
        borderRadius: 99,
        marginTop: 20,
      
    }
})