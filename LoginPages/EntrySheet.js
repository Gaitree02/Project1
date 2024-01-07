import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Modal, ScrollView } from 'react-native';
import React, { useState } from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
// import CalendarPicker from 'react-native-calendar-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as ImagePicker from 'expo-image-picker';
import TimeSheet from './TimeSheet2';




const EntrySheet = (props) => {
    // ***********date*******************
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [selectedDate, setSelectedDate] = useState(null);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        // console.warn("A date has been picked: ", date);
        hideDatePicker();
        setSelectedDate(date);
    }
    const formatDate = (date) => {
        if (!date) return 'DOB';
    
        // Format date to display without day of the week
        const formattedDate = date.toLocaleDateString(undefined, {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        });
    
        return formattedDate;
      };
    
    //   ---------------------code for drop-down menu---------------------
    const [employeeType, setEmployeeType] = useState('');
    const data = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'];
    const handleEmployeeTypeChange = (index, value) => {

        setEmployeeType(index, value);

    }
    // ---------------------Code for Team Name--------------

    const [TeamName, setTeamName] = useState('');
    const data1 = ['Team A', 'Team B', 'Team C', 'Team D', 'Team E', 'Team F', 'Team G'];
    const handleTeamName = (index, value1) => {

        setTeamName(index, value1);

    }


    // *********************************Image picker code*****************************************

    const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (result.assets && result.assets.length > 0) {
        // Access the first selected asset's URI
        setImage(result.assets[0].uri);
      }
  };


    // ===============================return Part======================
    return (

        <View style={{ backgroundColor: 'white', height: '100%', padding: 5.8 }}>
            <View>
                <Text style={{ color: '#074B66', fontSize: 15, fontWeight: '800', marginTop: 34, marginLeft: 130 }}>Entry Time Sheet</Text>
                <View style={{ width: '100%', borderWidth: 1, borderColor: '#8B9FB7', marginTop: 5 }} />

            </View>
            <ScrollView>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: '#074B66', lineHeight: 24, marginLeft: 10, marginTop: 20 }}> Enter your details below!</Text>
                    <Text style={{ fontSize: 11, marginLeft: 14, marginTop: -7, color: '#847F7F' }}> Fill your details below for seeking admin request</Text>
                </View>
                <View>
                    <Image style={{ width: 200, height: 180,marginTop:14, marginLeft: '36%' }} source={require('./images/image2.png')} />
                </View>
                <View>
                    <Text style={{ color: '#074B66', marginTop: 14, marginLeft: 19, fontWeight: '600', fontSize: 12 }}> Employee Code </Text>
                    <TextInput style={Styles.Textbox} placeholderTextColor={'#8B9FB7'}
                        placeholder="   Type here..."
                    />
                </View>

                <View style={{ marginTop: '1%' }}>
                    <Text style={{ color: '#074B66', marginTop: 6.5, marginLeft: 20, fontWeight: '600', fontSize: 12 }}> Date of Birth</Text>
                    
                    <TouchableOpacity style={{
                        width: 310, height: 40, marginTop: 1, borderRadius: 6, borderWidth: 1, borderColor: '#8B9FB7',
                        marginLeft: '6.6%', flexDirection: 'row', alignItems: 'center'
                    }}
                       
                        onPress={showDatePicker}   
                    >
                 <Text style={{ color: '#8B9FB7', fontSize: 10, fontWeight: '500', marginTop: 1, marginLeft: 10,  }}> {formatDate(selectedDate)}</Text>
              </TouchableOpacity>
              < Image style={{ height: 20, width: 20, marginLeft: "87%", position:'relative',marginTop:'-9%' }}
                            source={require('./images/DateRange.png')} />

                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />

                    {/* <Text style={{ color: '#8B9FB7', fontSize: 10, fontWeight: '500', marginTop:1,marginLeft:10,borderwidth:1 }}>dob{DatePicker()}</Text> */}

                </View>

                <View style={{ flexDirection: 'row' ,marginTop:13}}>
                    <View>
                        <Text style={{ fontSize: 12, color: '#074B66', marginTop: 7, marginLeft: 21, fontWeight: '600' }}>Entry Time </Text>
                        <TextInput style={Styles.dates} placeholderTextColor={'#8B9FB7'}
                            placeholder=" 27.11.23"
                        />
                    </View>
                    <View>
                        <Text style={{ fontSize: 12, color: '#074B66', marginTop: 7, marginLeft: 25, fontWeight: '600' }}>Exit Time </Text>
                        <TextInput style={Styles.dates} placeholderTextColor={'#8B9FB7'}
                            placeholder=" 2.12.23"
                        />
                    </View>
                </View>

                <View>
                    <Text style={{ fontSize: 12, color: '#074B66', marginTop: 12, marginLeft: 18, fontWeight: '600' }}> Employee Type</Text>
                    <TouchableOpacity style={{ width: 320, height: 40, marginTop: 2, borderRadius: 6, borderWidth: 1, borderColor: '#8B9FB7', marginLeft: '5.5%', }}>
                        <Text style={{ fontSize: 10, fontWeight: '500', color: 'grey', marginLeft: 9, marginTop: 10 }}>{employeeType ? employeeType : 'Employee Type'}</Text>


                        <Image style={{ width: 22, height: 22, marginLeft: 283, marginTop: -22, position: 'relative' }} source={require('./images/dropdown.png')} />
                        <ModalDropdown
                            style={{ marginLeft: 10, marginTop: -17, fontWeight: '500' }}
                            options={data}
                            onSelect={(index, value) => handleEmployeeTypeChange(' ', value)}
                            defaultValue=" "

                            dropdownStyle={{ width: 315, marginTop: 2, borderRadius: 6, borderWidth: 1.5, borderColor: '#8B9FB7', }}
                        />


                    </TouchableOpacity>

                </View>
                <View>
                    <Text style={{ fontSize: 12, color: '#074B66', marginTop: 13, marginLeft: 18, fontWeight: '600' }}> Team Name</Text>
                    <TouchableOpacity style={{ width: 320, height: 40, marginTop: 2, borderRadius: 6, borderWidth: 1, borderColor: '#8B9FB7', marginLeft: '5.5%', }}>
                        <Text style={{ fontSize: 10, fontWeight: '500', color: 'grey', marginLeft: 9, marginTop: 10 }}>{TeamName ? TeamName : 'Team Name'}</Text>


                        <Image style={{ width: 22, height: 22, marginLeft: 283, marginTop: -22, position: 'relative' }} source={require('./images/dropdown.png')} />
                        <ModalDropdown
                            style={{ marginLeft: 10, marginTop: -17, fontWeight: '500' }}
                            options={data1}
                            onSelect={(index, value1) => handleTeamName(" ", value1)}
                            defaultValue=" "

                            dropdownStyle={{ width: 315, marginTop: 2, borderRadius: 6, borderWidth: 1.5, borderColor: '#8B9FB7', }}
                        />


                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View >
                        <Text style={{ fontSize: 12, color: '#074B66', marginTop: 7, marginLeft: 27, fontWeight: '600' }}>Image {""}
                            <Text style={{ fontSize: 8, marginLeft: 5, color: '#8B9FB7' }}>(optional) </Text>

                        </Text>
                        <TouchableOpacity style={Styles.dates}  onPress={pickImage }    value={image}
                      onChangeText={(img) => setImage(img)} >
                        {/* <Text>{image}</Text> */}
                        {/* {image &&
                         <Image source={{ uri:image }}
                         style={{ width: 100, height: 100 ,marginTop:-10}}  />
                         } */}
                         <Text style={{fontSize:8,color:'grey'}}>
                         {image &&
                     <Text>{image.split('/').pop()}</Text>}
                       
                       </Text>
          
                         </TouchableOpacity>
                    </View>
                    <View >
                        <Text style={{ fontSize: 12, color: '#074B66', marginTop: 7, marginLeft: 25, fontWeight: '600' }}>Location {""}
                            <Text style={{ fontSize: 8, marginLeft: 5, color: '#8B9FB7', }}>(optional) </Text>
                        </Text>
                        <TextInput style={Styles.dates} placeholderTextColor={'#8B9FB7'}
                            placeholder=" "
                        />
                    </View>

                </View>
               < TouchableOpacity onPress={()=>{ console.log("Navigating to 'TimeSheet Page'")
               props.navigation.navigate('TimeSheet')}}
                
               style={{width:320, height:43, backgroundColor:'#81CEEC',marginTop:20, borderRadius:45, marginLeft:'6%'}}
                >

                    <Text   style={{textAlign:'center',marginVertical:10,fontWeight:800, color:'#074B66',fontFamily:'normal',fontSize:12}}>Send Admin Request </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>

    )
}
export default EntrySheet;
const Styles = StyleSheet.create(
    {
        Textbox: {
            width: 310,
            height: 40,
            marginLeft: 23,
            borderRadius: 6,
            backgroundColor: 'white',
            fontSize: 15,
            borderWidth: 1,
            borderColor: '#8B9FB7',
            fontSize: 10,
            lineHeight: 10,
            padding: 3,
            // position:'absolute'



        },
        dates: {
            width: 148,
            height: 40,
            marginLeft: 22,
            borderRadius: 6,
            backgroundColor: 'white',
            fontSize: 15,
            borderWidth: 1,
            borderColor: '#8B9FB7',
            fontSize: 10,
            lineHeight: 10,
            padding: 6,
        }

    }
)


