import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
const TimeSheet = () => {
    return (
       <View >

            <View style={{ backgroundColor: '#074B66' }}>
                <Text style={Styles.Heading}> Time Sheet</Text>
            </View>
           <ScrollView styles={{height:'100%', }}>
            <View  style={[Styles.division,{marginTop:15}]} >
                <View>
                    <Text style={{ fontSize: 13, marginLeft: '70%', fontWeight: '500', marginTop: '5%', color: '#074B66', fontWeight: '900' }} > View Details</Text>

                </View>
                <View>
                    <Text style={{ marginLeft: 20, marginTop: '-4%', fontSize: 12, color: '#074B66', fontWeight: '600', padding: 5 }}>Date  <Text style={{ color: '#8B9FB7' }}>- 21/02/2023</Text></Text>
                    <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 12, color: '#074B66', fontWeight: '600', padding: 5 }}>Employee Code <Text style={{ color: '#8B9FB7' }}> - 0123456 </Text></Text>
                    <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 12, color: '#074B66', fontWeight: '600',  }}>Team Name <Text style={{ color: '#8B9FB7' }}> - 0123456</Text></Text>

                </View>
                <View style={{ width: '2%', height: '100%', backgroundColor: '#81CEEC', marginTop: '-40%' }} />
             
                <TouchableOpacity  style={Styles.editButton} >
                    <Text style={{ fontSize: 12, color: '#ffffff', marginLeft: '33%', marginTop: -2 }}>Edit</Text>
                    </TouchableOpacity>
                
                   
            </View>
            

            {/*   ****************************second Division .*************************      */}
        
            
            <View style={[Styles.division,{marginTop:-17}]} >
                <View>
                    <Text style={{ fontSize: 13, marginLeft: '70%', fontWeight: '500', marginTop: '5%', color: '#074B66', fontWeight: '900' }} > View Details</Text>

                </View>
                <View>
                    <Text style={{ marginLeft: 20, marginTop: '-4%', fontSize: 12, color: '#074B66', fontWeight: '600', padding: 5 }}>Date  <Text style={{ color: '#8B9FB7' }}>- 21/02/2023</Text></Text>
                    <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 12, color: '#074B66', fontWeight: '600', padding: 5 }}>Employee Code <Text style={{ color: '#8B9FB7' }}> - 0123456 </Text></Text>
                    <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 12, color: '#074B66', fontWeight: '600',  }}>Team Name <Text style={{ color: '#8B9FB7' }}> - 0123456</Text></Text>

                </View>
                <View style={{ width: '2%', height: '100%', backgroundColor: '#FDC300', marginTop: '-40%' }} />
             
                <TouchableOpacity  style={Styles.editButton} >
                    <Text style={{ fontSize: 12, color: '#ffffff', marginLeft: '33%', marginTop: -2 }}>Edit</Text>
                    </TouchableOpacity>
                
                   
            </View>

            {/* *************************Third division***************  */}
            <View style={[Styles.division,{marginTop:-15}]} >
                <View>
                    <Text style={{ fontSize: 13, marginLeft: '70%', fontWeight: '500', marginTop: '5%', color: '#074B66', fontWeight: '900' }} > View Details</Text>

                </View>
                <View>
                    <Text style={{ marginLeft: 20, marginTop: '-4%', fontSize: 12, color: '#074B66', fontWeight: '600', padding: 5 }}>Date  <Text style={{ color: '#8B9FB7' }}>- 21/02/2023</Text></Text>
                    <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 12, color: '#074B66', fontWeight: '600', padding: 5 }}>Employee Code <Text style={{ color: '#8B9FB7' }}> - 0123456 </Text></Text>
                    <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 12, color: '#074B66', fontWeight: '600',  }}>Team Name <Text style={{ color: '#8B9FB7' }}> - 0123456</Text></Text>

                </View>
                <View style={{ width: '2%', height: '100%', backgroundColor: '#FDC300', marginTop: '-40%' }} />
             
                <TouchableOpacity style={Styles.editButton}  >
                    <Text style={{ fontSize: 12, color: '#ffffff', marginLeft: '33%', marginTop: -2 }}>Edit</Text>
                    </TouchableOpacity>
                
                   
            </View>

            
            {/* *************************fourth division***************  */}
            <View style={[Styles.division,{ marginTop:-15,}]} >
                <View>
                    <Text style={{ fontSize: 13, marginLeft: '70%', fontWeight: '500', marginTop: '5%', color: '#074B66', fontWeight: '900' }} > View Details</Text>

                </View>
                <View>
                    <Text style={{ marginLeft: 20, marginTop: '-4%', fontSize: 12, color: '#074B66', fontWeight: '600', padding: 5 }}>Date  <Text style={{ color: '#8B9FB7' }}>- 21/02/2023</Text></Text>
                    <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 12, color: '#074B66', fontWeight: '600', padding: 5 }}>Employee Code <Text style={{ color: '#8B9FB7' }}> - 0123456 </Text></Text>
                    <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 12, color: '#074B66', fontWeight: '600',  }}>Team Name <Text style={{ color: '#8B9FB7' }}> - 0123456</Text></Text>

                </View>
                <View style={{ width: '2%', height: '100%', backgroundColor: '#81CEEC', marginTop: '-40%' }} />
             
                <TouchableOpacity style={Styles.editButton} >
                    <Text style={{ fontSize: 12, color: '#ffffff', marginLeft: '33%', marginTop: -2}}>Edit</Text>
                    </TouchableOpacity>
                 </View>

                 
            {/* *************************fifth division***************  */}
                 <View style={[Styles.division,{ marginTop:-15,}]} >
                <View>
                    <Text style={{ fontSize: 13, marginLeft: '70%', fontWeight: '500', marginTop: '5%', color: '#074B66', fontWeight: '900' }} > View Details</Text>

                </View>
                <View>
                    <Text style={{ marginLeft: 20, marginTop: '-4%', fontSize: 12, color: '#074B66', fontWeight: '600', padding: 5 }}>Date  <Text style={{ color: '#8B9FB7' }}>- 21/02/2023</Text></Text>
                    <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 12, color: '#074B66', fontWeight: '600', padding: 5 }}>Employee Code <Text style={{ color: '#8B9FB7' }}> - 0123456 </Text></Text>
                    <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 12, color: '#074B66', fontWeight: '600',  }}>Team Name <Text style={{ color: '#8B9FB7' }}> - 0123456</Text></Text>

                </View>
                <View style={{ width: '2%', height: '100%', backgroundColor: '#81CEEC', marginTop: '-40%' }} />
             
                <TouchableOpacity style={Styles.editButton} >
                    <Text style={{ fontSize: 12, color: '#ffffff', marginLeft: '33%', marginTop: -2 }}>Edit</Text>
                    </TouchableOpacity>
                 </View>

                 
            {/* *************************sixth division***************  */}
                 <View style={[Styles.division,{ marginTop:-15,}]} >
                <View>
                    <Text style={{ fontSize: 13, marginLeft: '70%', fontWeight: '500', marginTop: '5%', color: '#074B66', fontWeight: '900' }} > View Details</Text>

                </View>
                <View>
                    <Text style={{ marginLeft: 20, marginTop: '-4%', fontSize: 12, color: '#074B66', fontWeight: '600', padding: 5 }}>Date  <Text style={{ color: '#8B9FB7' }}>- 21/02/2023</Text></Text>
                    <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 12, color: '#074B66', fontWeight: '600', padding: 5 }}>Employee Code <Text style={{ color: '#8B9FB7' }}> - 0123456 </Text></Text>
                    <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 12, color: '#074B66', fontWeight: '600',  }}>Team Name <Text style={{ color: '#8B9FB7' }}> - 0123456</Text></Text>

                </View>
                <View style={{ width: '2%', height: '100%', backgroundColor: '#FDC300', marginTop: '-40%' }} />
             
                <TouchableOpacity style={Styles.editButton} >
                    <Text style={{ fontSize: 12, color: '#ffffff', marginLeft: '33%', marginTop: -2 }}>Edit</Text>
                    </TouchableOpacity>
                 </View>
        
        <Text style={{height:50}}></Text>
        
            </ScrollView>
  
        </View>
     
    )
}
export default TimeSheet;
const Styles = StyleSheet.create({

    Heading: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '800',
        marginTop: 45,
        marginLeft: 130,
        paddingBottom: 10

    },
    division: {
        backgroundColor: '#ffffff',
        shadowColor: 'black',
        height: 150,
        borderRadius: 6,
        width: '83%',
        margin: '10%',
        shadowColor: '#C3C3C394',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        

    },
    editButton:{
        width: '20%', 
        height: '15%', 
        backgroundColor: '#074B66',
         padding: 2,
          marginLeft: '75%',
           marginTop: '-18%',
            borderRadius: 3 

    }

})