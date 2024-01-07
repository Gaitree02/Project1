import React, { useRef, useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';

  const  LoginThird = (props) => {
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
        // <View style={{ backgroundColor: 'white',height:'100%'}}>
            <KeyboardAvoidingView  style={{backgroundColor: 'white',height:'100%',padding:'1%'}}>
            <View>
                <Text style={{ color: '#074B66', fontWeight: '800', fontSize: 15, marginTop: 60, marginLeft: 130 }}>Reset Password</Text>
                 <View style={{width:'100%',borderWidth:1,borderColor:'#8B9FB7',marginTop:5}} />

            </View>
            <ScrollView>
            <View>
                <Image style={{ width: 360, height: 360, marginLeft: 10, marginTop: 40 }} source={require('./images/image1.jpg')} />
                <View style={{marginTop:-15}}>
                <Text style={{ color: '#074B66',fontWeight:800, marginLeft:19, fontSize:16,fontStyle:'normal'}}> Reset your password </Text>
                <Text style={{color:'black',fontWeight:'400' ,fontSize:9,marginLeft:21,marginTop:-5}}> A verification code is shared on your given email - abc*****we@gmail.com</Text>
           
            </View>
            </View>
        
            
           

           <View>
            <Text  style={{ color:'#074B66',fontSize:10.2, marginLeft:19,marginTop:35,fontWeight:'600',}}> Get OTP on Email</Text>
            </View>  


                {/* get otp  */}
                <View style={{flexDirection:'row'}}>
       <TextInput  ref={et1} 
        style={Styles.OtpBox} 
        keyboardType="number-pad"
         maxLength={1}  
        value={f1}
       onChangeText={txt=>{
        setF1(txt);
        if (txt.length >= 1){
            et2.current.focus();
        }
       

       }}
       />
       <TextInput    ref={et2} style={Styles.OtpBox}  keyboardType="number-pad" maxLength={1} 

value={f2}
        onChangeText={txt=>{
            setF2(txt);
            if (txt.length>=1){
                et3.current.focus();
            }
            else if (txt.length <1){
                et1.current.focus();
            }
            
           }}
       />
       <TextInput   ref={et3} style={Styles.OtpBox}  keyboardType="number-pad" maxLength={1}   value={f3}
        onChangeText={ txt => {
            setF3(txt);
            if (txt.length>=1){
                et4.current.focus();
            }
            else if (txt.length <1){
                et2.current.focus();
            }
            
           }}
       />
       <TextInput  ref={et4}  style={[Styles.OtpBox]} keyboardType="number-pad" maxLength={1}   value={f4}
        onChangeText={txt=>{
            setF4(txt);
            if (txt.length>=1){
                et5.current.focus();
            } 
            else if (txt.length <1){
                et3.current.focus();
            }
           
        
           }}
       />
       <TextInput  ref={et5}  style={Styles.OtpBox} keyboardType="number-pad" maxLength={1}   value={f5}
        onChangeText={txt=>{
            setF5(txt);
            if (txt.length>=1){
                et5.current.focus();
            }
            else if (txt.length <1){
                et4.current.focus();
            }
           


           }}
       />
                </View>

                
        {/* ================ */}
          


            <View>
                <TouchableOpacity 
                onPress={()=>{
                    console.log("Navigating to 'LoginFourth'");
                    
                    props.navigation.navigate('loginFourth'); }}


                style={{width:320, height:43,marginTop:20, borderRadius:45, marginLeft:'5.5%', backgroundColor:f1!=='' && 
                f2!==''&& 
                f3!=='' &&
                 f4!==''&& 
                 f5!=='' ? '#41DA14':'#81CEEC'
            
            }}
                >

                    <Text   style={[Styles.button]}> Confirm</Text>
                </TouchableOpacity>
                </View>
                </ScrollView>
    {/* </View> */}
    </KeyboardAvoidingView>
    )}
export default LoginThird;
 const Styles = StyleSheet.create(
    {
  OtpBox:{
    width:45,
    height:45,
    borderWidth:1,
    borderRadius:6,
    borderColor:'#8B9FB7', 
    backgroundColor:'white',
    marginLeft:23,
    marginTop:5,
    textAlign:'center',
    fontsize:20,
    fontWeight:'700'

    
  },
   button:{
    textAlign:'center',
    marginVertical:10,
    fontWeight:800,
     color:'#074B66'

   }
    }
 ) 

