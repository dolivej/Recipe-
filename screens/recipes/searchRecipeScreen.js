import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {auth, signOut} from '../../services/firebase'
import { useNavigation } from '@react-navigation/core'

const searchRecipeScreen = () => {
    const navigation = useNavigation();

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            navigation.replace("loginScreen")
        })
        .catch(error => {alert(error.message)})
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={handleSignOut}
            >
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default searchRecipeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    }
})