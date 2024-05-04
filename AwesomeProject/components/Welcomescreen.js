import React from 'react';
import { View, Text, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';

const Welcomescreen = ({ route }) => {
  
const {username} = route.params.username;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome! {username} </Text>
      <Text style={styles.text}>About Us</Text>

    <ScrollView style={styles.contentContainer}> 
      <Text>Information</Text>

      <Text>Sri Bhashyam Reading Room, located at in Vizianagaram, andhra pradesh, is a located in India. Situated in a bustling area, the store is known for offering a diverse range of products and services to meet the varied needs of its customers. The strategic location in Vizianagaram, a city in the state of andhra pradesh, makes it accessible and convenient for local residents and visitors. Sri Bhashyam Reading Room is committed to providing quality products and excellent customer service, making it a popular shopping destination in the region.</Text>
        <Text>What type of products does Sri Bhashyam Reading Room offer?</Text>
       <Text>Sri Bhashyam Reading Room offers a wide range of services to the varied needs of our customers.</Text>

       <Text>What type of products does Sri Bhashyam Reading Room offer?</Text>
       <Text>Sri Bhashyam Reading Room offers a wide range of services to the varied needs of our customers.</Text>

       <Text>What type of products does Sri Bhashyam Reading Room offer?</Text>
       <Text>Sri Bhashyam Reading Room offers a wide range of services to the varied needs of our customers.</Text>

       <Text>What type of products does Sri Bhashyam Reading Room offer?</Text>
       <Text>Sri Bhashyam Reading Room offers a wide range of services to the varied needs of our customers.</Text>

       <Text>What type of products does Sri Bhashyam Reading Room offer?</Text>
       <Text>Sri Bhashyam Reading Room offers a wide range of services to the varied needs of our customers.</Text>

       <Text>What type of products does Sri Bhashyam Reading Room offer?</Text>
       <Text>Sri Bhashyam Reading Room offers a wide range of services to the varied needs of our customers.</Text>

       <Text>What type of products does Sri Bhashyam Reading Room offer?</Text>
       <Text>Sri Bhashyam Reading Room offers a wide range of services to the varied needs of our customers.</Text>
    </ScrollView>

    <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.footerButtonText}>Submit</Text>
      </TouchableOpacity>

    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black'
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 10, // Adjust this value as needed
  },
  text: {
    fontSize: 24,
  },
  footerButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Welcomescreen;
