import { StyleSheet } from 'react-native';

const centrailzedStyles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
      },
      loginTitleText:{
       color:'black',
       fontSize:25,
       marginBottom:20,
       marginTop:20,
       textDecorationLine: 'underline'
      },
      loginInnerContainer: {
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
      loginLabel: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
      },
      loginInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
        color:'black'
      },
      loginButton: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        borderRadius: 5,
      },
      loginButtonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      loginLogo: {
        width: 200, // Specify your desired width
        height: 200, // Specify your desired height
        marginBottom: 20,
      },
      loginImageContainer:{
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
      },
      loginFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      },
      loginFooterOption: {
        flex: 1,
        alignItems: 'center',
      },
      loginFooterOptionText: {
        color: 'white',
        textDecorationLine: 'underline',
        
      },
      // Fooditems styling starts....
      foodPlusminus: {
        backgroundColor: '#ccc', // Example style, you can customize it
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 5,
      },
});

export default centrailzedStyles;
