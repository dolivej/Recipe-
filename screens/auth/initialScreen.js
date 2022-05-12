import { useNavigation } from '@react-navigation/core'
import React, {useState, useEffect} from 'react'
import {StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import {brandColors} from '../../styles/globalBrandColors'
import {globalTextStyles} from '../../styles/globalTextStyles'
import {globalStructureStyles} from '../../styles/globalStructureStyles'
import Logo from '../../components/logo'

const initialScreen = () => {

    const navigation = useNavigation()
    const image = { uri: 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80' };

    const handleRegister = () => {
        navigation.navigate("registerScreen")
    }

    const handleLogin = () => {
        navigation.navigate("loginScreen")
    }

    return (
        <View style={[globalStructureStyles.container, styles.screenWrap]}> 
            <View style={[globalStructureStyles.row, styles.imageWrap]}> 
                <ImageBackground source={image} resizeMode="cover" style={styles.image} />
            </View>
            <View style={[globalStructureStyles.row, styles.optionsWrap]}> 
                <View style={[globalStructureStyles.container, styles.optionsContainer]}>
                    <View style={[globalStructureStyles.column, styles.logoWrap]}>
                        <View style={[globalStructureStyles.row, styles.logoWrapInner]}>
                            <Logo />
                        </View>
                        <View style={[globalStructureStyles.row, styles.subText, globalTextStyles.title]}>
                            <Text style={[globalTextStyles.title, styles.subText]}>Cook. Track. Discover.</Text>
                        </View>
                    </View>
                    <View style={[globalStructureStyles.row, styles.buttonsWrap]}>
                        <TouchableOpacity
                            onPress={() => {handleRegister()}}
                            style={styles.button}
                        >
                            <Text style={[globalTextStyles.subTitle ,styles.buttonText]}>Sign Up!</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {handleLogin()}}
                            style={[styles.button, styles.buttonOutline]}
                        >
                            <Text style={[globalTextStyles.subTitle, styles.buttonOutlineText]}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default initialScreen

const styles = StyleSheet.create({
    screenWrap: {
        backgroundColor: brandColors.white
    },
    imageWrap: {
        height: '35%'
    },
    image: {
        width: '100%',
        height: '105%'
    },
    optionsWrap: {
        height: '60%',
        backgroundColor: brandColors.white,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    optionsContainer: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: '100%',
        padding: 20
    },
    logoWrap: {
        width: '100%',
        height: '60%',
    },
    subText: {
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: brandColors.textPrimary,

    },
    buttonsWrap:{
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: brandColors.primary,
        width: '100%',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonOutline: {
        backgroundColor: brandColors.white,
        marginTop: 15,
        borderColor: brandColors.primary,
        borderWidth: 2
    },
    buttonText: {
        color: brandColors.white,
    },
    buttonOutlineText: {
        color: brandColors.primary,
    },
    logoWrapInner: {
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20
    }
})