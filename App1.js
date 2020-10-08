import React from 'react'
import { View,Text } from 'react-native'

const App=()=>{
  return(
    <View style={{flex:1,margin:20}}>
      <View style={{flex:1,backgroundColor:'lightskyblue'}}>
        <Text style={{color:'red'}}>Hello World</Text>
      </View>
      <View style={{flex:2,backgroundColor:'lightcoral'}}></View>
      <View style={{flex:3,backgroundColor:'mediumpurple'}}></View>
    </View>
  )
}
export default App;