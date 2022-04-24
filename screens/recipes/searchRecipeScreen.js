import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {auth, signOut} from '../../services/firebase'
import { useNavigation } from '@react-navigation/core'
import {brandColors} from '../../styles/globalBrandColors'
import {globalTextStyles} from '../../styles/globalTextStyles'

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
                <Text style={[globalTextStyles.subTitle ,styles.buttonText]}>Sign Out</Text>
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
        backgroundColor: brandColors.primary,
        width: '60%',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: brandColors.white,
    }
})