import React ,{useState,useEffect}from "react";
import { View, Text, Image, StyleSheet,Dimensions, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';

// const width = Dimensions.get('window');
// const height = Dimensions.get('screen');

const Login1 = (props) => {
   
    


    return (
       
    
        //  <View style={{ backgroundColor: 'white' ,height:'100%',flex:1 }}> 
        <KeyboardAvoidingView
      style={{ backgroundColor: 'white' ,height:'100%',flex:1,padding:5.8 }}
    //   behavior="padding"
    >

       
      

       {/*  ----------------------Login1 content------------ */}


            <View>
                <Text style={{ color: '#074B66',  fontSize: 15, fontWeight:'800',marginTop: 60, marginLeft: 130 }}>Reset Password</Text>
            <View style={{width:'100%',borderWidth:1,borderColor:'#8B9FB7',marginTop:5}} />

            </View>
       <ScrollView>
            <View>
                <Image style={{ width: 360, height: 360, marginLeft: 10, marginTop: 40 }} source={require('./images/image1.jpg')} />
            </View>
        
            <View>
                <Text style={{ color: '#074B66',fontWeight:800, marginLeft:22, fontSize:15}}> Forgot password?</Text>
                <Text style={{ color: '#847F7F' ,fontSize:10,marginLeft:25,marginTop:-2}}> Enter your Registered Mobile No. or Email ID for verification</Text>

            </View>
            <View> 
                <Text style={{color: '#074B66', fontWeight:'500',marginTop:25,marginLeft:14}}>  Enter your Email ID/Mobile no. below </Text>
                <TextInput style={ Styles.Textbox } placeholderTextColor={ '#8B9FB7' }
                placeholder="   Type here..."
                />
                </View>

                <TouchableOpacity onPress={()=>props.navigation.navigate('LoginSecond')}
                

                style={{width:320, height:43, backgroundColor:'#81CEEC',marginTop:20, borderRadius:45, marginLeft:'6%'}}
                >

                    <Text   style={{textAlign:'center',marginVertical:10,fontWeight:800, color:'#074B66',fontFamily:'normal',fontSize:12}}> Get OTP</Text>
                </TouchableOpacity>
                </ScrollView>
                 {/* </View>
                  */}
                  </KeyboardAvoidingView>
                
    )}
export default Login1;
 const Styles = StyleSheet.create(
    {

Textbox:{
    

    width:310,
     height: 40 ,
      marginLeft:26,
       borderRadius:6, 
       backgroundColor:'white' ,
       fontSize:15, 
       borderWidth:1,
       borderColor:'#8B9FB7',
       fontSize:10,
       lineHeight:10 ,
       padding:3

},
// text:{
//     flex:1,
//     color:'white'

// }

    }
 ) 

