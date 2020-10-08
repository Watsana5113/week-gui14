import React from 'react'
import { View,Text } from 'react-native'

const App=()=>{
  return(
    <View style={{
      flex:1,flexDirection:'row',
      justifyContent:'center',
      alignItems:'stretch',
      }}>
     <View style={{width:50,height:50,backgroundColor:'mediumpurple'}}></View>
     <View style={{width:50,height:100,backgroundColor:'mediumslateblue'}}></View>
     <View style={{width:50,height:150,backgroundColor:'rebeccapurple'}}></View>
    </View>
  )
}
export default App;