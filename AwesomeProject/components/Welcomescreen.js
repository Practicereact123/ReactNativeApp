import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import dummyData from '../constants/dummyData';

const Welcomescreen = ({ route,navigation }) => {

  const { username } = route.params;
  console.log("usename :: "+{username});

  const handleContinue =() =>{
   navigation.navigate("FoodItems");  
  }
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.textWelcome}>Welcome! {username} </Text>
        <Text style={styles.textAboutUs}>About Us</Text>
      </View>

      <View style={styles.scrollViewContainer}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
         <Text style = {styles.content}>Sri Bhashyam Reading Room, located at in Vizianagaram, andhra pradesh, is a located in India. Situated in a bustling area, the store is known for offering a diverse range of products and services to meet the varied needs of its customers. The strategic location in Vizianagaram, a city in the state of andhra pradesh, makes it accessible and convenient for local residents and visitors. Sri Bhashyam Reading Room is committed to providing quality products and excellent customer service, making it a popular shopping destination in the region.</Text>
          {dummyData.map((item, index) => (
            <View key={index}>
              <Text style={styles.question}>{item.question}</Text>
              <Text style={styles.answer}>{item.answer}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.footerButton} onPress={handleContinue}> 
        <Text style={styles.footerButtonText}>CONTINUE</Text>
      </TouchableOpacity>

    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 0, // Adjust this value as needed
    paddingBottom: 60,
    width: '100%',

    flexGrow: 1,
    justifyContent: 'space-between'
  },
  textWelcome: {
    fontSize: 24,
    textAlign: 'center',
    color: 'gold'
  },
  textAboutUs: {
    fontSize: 18,
    alignContent: 'left',
    textDecorationLine: 'underline',
    color:'lightblue'
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
    fontSize: 15,
  },
  scrollViewContainer: {
    height: 530
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
    marginTop:20
  },
  answer: {
    fontSize: 16,
    color: 'white',
  },
  content: {
    fontSize: 16,
    color: 'white',
  },
});

export default Welcomescreen;
