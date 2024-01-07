import React, { useRef, useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import EntrySheet from "./EntrySheet";

  const  LoginFourth = (props) => {
    const et1=useRef();
    const et2=useRef();
    const et3=useRef();
    const  et4=useRef();
    const  et5=useRef();
    const [f1,setF1]=useState('');
    const [f2,setF2]=useState('');
    const [f3,setF3]=useState('');
    const [f4,setF4]=useState('');
    const [f5,setF5]=useState('');



    
    return (
        // <View style={{ backgroundColor: 'white' ,height:'100%'}}>
          <KeyboardAvoidingView style={{ backgroundColor: 'white' ,height:'100%',padding:5.8}}> 
            <View>
                <Text style={{color: '#074B66', fontSize: 15,fontWeight:'800', marginTop: 60, marginLeft: 130 }}>Reset Password</Text>
                 <View style={{width:'100%',borderWidth:1,borderColor:'#8B9FB7',marginTop:5}} />

            </View>
            <ScrollView>

            <View>
                <Image style={{ width: 360, height: 360, marginLeft: 10, marginTop: 10 }} source={require('./images/image1.jpg')} />
                <View style={{marginTop:-30}}>
                <Text style={{ color: '#074B66',fontWeight:'800', marginLeft:17, fontSize:16,fontStyle:'normal'}}> Reset your password </Text>
                <Text style={{color:'black', fontSize:11,marginLeft:26,marginTop:-9}}>confirm your new password below</Text>
           
            </View>
            </View>
        <View>
            <View> 
                <Text style={{color: '#074B66',marginTop:18,marginLeft:18,fontWeight:'600'}}> Reset your new password </Text>
                <TextInput style={ Styles.Textbox } placeholderTextColor={ '#8B9FB7' }
                placeholder="   Type here..."
                />
                </View>
                <View> 
                <Text style={{color: '#074B66', marginTop:15,marginLeft:18,fontWeight:'600'}}> Confirm new password</Text>
                <TextInput style={ Styles.Textbox } placeholderTextColor={ '#8B9FB7' }
                placeholder="   Type here..."
                />
                </View>

                </View>
                <TouchableOpacity 

                onPress={()=>{  console.log("Navigating to 'EntrySheet Page'");
                props.navigation.navigate('EntrySheet')}}

                style={{width:320, height:43,marginTop:20, borderRadius:45, marginLeft:17, backgroundColor:f1!=='' && 
                f2!==''&& 
                f3!=='' &&
                 f4!==''&& 
                 f5!=='' ? '#41DA14':'#81CEEC'  }}
                >  
                 <Text   style={[Styles.button]}> Confirm</Text>
                </TouchableOpacity>
                </ScrollView>
                {/* </View> */}
    {/* </View> */}
    </KeyboardAvoidingView>
    )}
export default LoginFourth;
 const Styles = StyleSheet.create(
    {
  OtpBox:{
    width:45,
    height:45,
    borderWidth:1,
    borderRadius:6,
    borderColor:'#8B9FB7', 
    backgroundColor:'white',
    marginLeft:22,
    marginTop:5,
    textAlign:'center',
    fontsize:20,
    fontWeight:'700'

    
  },
   button:{
    textAlign:'center',
    marginVertical:10,
    fontWeight:800,
     color:'#074B66',
     fontSize:15


   },
   Textbox:{

    width:310,
     height: 40 ,
      marginLeft:23,
       borderRadius:6, 
       backgroundColor:'white' ,
       fontSize:15, 
       borderWidth:1,
       borderColor:'#8B9FB7',
       fontSize:10,
       lineHeight:10 ,
       padding:3,
       
       

}

    }
 ) 

