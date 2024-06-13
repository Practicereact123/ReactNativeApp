import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text, Button, TouchableOpacity } from 'react-native';
import centrailzedStyles from '../Styling/Styles';

function FoodItems() {
    const foodItemsList = [
        {
            "name": "Hamburger",
            "price": 5.99,
            "description": "A classic American burger.",
            "imgURL": "https://unsplash.com/photos/burger-and-fries-on-plate-Nb_Q-M3Cdzg"
        },
        {
            "name": "Nachos",
            "price": 20,
            "description": "A popular Mexican dish made with tortilla chips, cheese, and",
            "imgURL": "https://unsplash.com/photos/burger-and-fries-on-plate-Nb_Q-M3Cdzg"
        },
        {
            "name": "Samosa",
            "price": 15,
            "description": "A popular north Indian dish",
            "imgURL": "https://www.istockphoto.com/photo/punjabi-samosas-served-with-tomato-ketchup-and-mint-chutney-its-very-filling-and-gm1195143617-340569880?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffood-items-samosa&utm_medium=affiliate&utm_source=unsplash&utm_term=food+items+samosa%3A%3A%3A"
        },
        {
            "name": "Pani Puri",
            "price": 7,
            "description": "A popular Odisha dish",
            "imgURL": "https://www.gstatic.com/webp/gallery3/1.sm.png"
        },
        {
            "name": "Tiffins",
            "price": 50,
            "description": "A popular South Indian dish",
            "imgURL": "https://placebear.com/g/200/200"
        }
    ];

    return (
        <View style={styles.container}>

            <View style={styles.scrollViewContainer}>
                <ScrollView showsVerticalScrollIndicator={true} >


                    {foodItemsList.map((item, index) => (
                        <View key={index} style={styles.itemContainer}>
                            <Image
                                style={styles.image}
                                source={{ uri: item.imgURL }}

                            />
                            <View style={styles.detailsContainer}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.price}>Price: ${item.price}</Text>
                                <Text style={styles.description}>{item.description}</Text>
                                <View style = {styles.cartContainer}> 
                                    <TouchableOpacity style={centrailzedStyles.foodPlusminus}>
                                        <Text style={styles.addToCart}>+</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.addToCartContainer}>
                                        <Text style={styles.addToCart}>Add to Cart</Text>
                                        
                                    </TouchableOpacity>
                                    <TouchableOpacity style={centrailzedStyles.foodPlusminus}>
                                            <Text style={styles.addToCart}>-</Text>
                                        </TouchableOpacity>
                                </View>


                            </View>
                        </View>
                    ))}
                </ScrollView>

            </View>

            
                <TouchableOpacity style={centrailzedStyles.loginButton}>
                    <Text style={centrailzedStyles.loginButtonText}>Proceed</Text>
                </TouchableOpacity>
            

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollViewContainer: {
        height: 660
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 20,
        borderRadius: 8,

    },
    detailsContainer: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        color: '#888',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: 'black',
        marginBottom: 15
    },
    addToCart: {
        fontSize: 12,
        color: 'black',

    },
    buttonContainer: {
        backgroundColor: '#008CBA', // Customize your button color
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 10,
        alignItems: 'center',
        marginLeft: 50,
        width: '70%'

    },
    addToCartContainer: {
        backgroundColor: 'orange', // Customize your button color
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    cartContainer:{
        flexDirection:'row',
        alignContent:'center'
        
    }
});

export default FoodItems;
