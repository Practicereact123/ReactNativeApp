import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity,Image } from 'react-native';
import Welcomescreen from './Welcomescreen';
import centrailzedStyles from '../Styling/Styles';
const Loginpage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic (authentication) here
    // For simplicity, let's just navigate to the welcome screen if username and password are not empty
    if (username && password) {
      console.log("Login successful.!!!");
      navigation.navigate("Welcomescreen", { username: username });
    }
  };

  return (
    <View style={styles.container}>
<Text style={styles.titleText}>BHASYAM READING ROOM</Text>
  <View style = {styles.imageContainer}> 
  <Image source = {require('../assets/images/ganesha.jpg')} 
  style ={styles.logo}/>
  </View>
   
      <View style={styles.innerContainer}>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your username"
        />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />

        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={centrailzedStyles.loginFooter}>
          <TouchableOpacity style={centrailzedStyles.loginFooterOption}>
            <Text style={centrailzedStyles.loginFooterOptionText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={centrailzedStyles.loginFooterOption}>
            <Text style={centrailzedStyles.loginFooterOptionText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  titleText:{
   color:'black',
   fontSize:25,
   marginBottom:20,
   marginTop:20,
   textDecorationLine: 'underline'
  },
  innerContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    color:'black'
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo: {
    width: 200, // Specify your desired width
    height: 200, // Specify your desired height
    marginBottom: 20,
  },
  imageContainer:{
    shadowColor: 'blue',
    borderWidth: 1,
    bottom:10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  footerOption: {
    flex: 1,
    alignItems: 'center',
  },
  footerOptionText: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

export default Loginpage;
