import { useNavigation } from '@react-navigation/core'
import React, {useState, useEffect} from 'react'
import {StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import {brandColors} from '../../styles/globalBrandColors'
import {globalTextStyles} from '../../styles/globalTextStyles'
import {globalStructureStyles} from '../../styles/globalStructureStyles'
import Ionicons from '@expo/vector-icons/Ionicons'

const finalScreen = () => {

    const navigation = useNavigation()
    const image = { uri: 'https://images.unsplash.com/photo-1623855244697-5d8fbe9c7892?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' };

    const handleViewRecipes = () => {
        //navigation.navigate("goalSettingScreen")
    }

    const handleContinue = () => {
        //navigation.navigate("loginScreen")
    }
    
    const handleBack = () => {
        navigation.pop(1);
    }

    return (
        <View style={[globalStructureStyles.container, styles.screenWrap]}> 
            <View style={[globalStructureStyles.row, styles.imageWrap]}> 
                <ImageBackground source={image} resizeMode="cover" style={styles.image} > 
                     <TouchableOpacity 
                        onPress={() => {handleBack()}}
                        style={[styles.backArrow]}
                    >
                        <Ionicons name="chevron-back-circle-outline" size={35} color={brandColors.primary} />
                    </TouchableOpacity>

                </ImageBackground>
            </View>
            <View style={[globalStructureStyles.row, styles.optionsWrap]}> 
                <View style={[globalStructureStyles.container, styles.optionsContainer]}>
                    <View style={[globalStructureStyles.column, styles.logoWrap]}>
                        <View style={[globalStructureStyles.row, styles.subText, globalTextStyles.title]}>
                            <Text style={[globalTextStyles.title, styles.subText]}>Recipes that help you succeed.</Text>
                        </View>
                        <View style={[globalStructureStyles.row, styles.subText, globalTextStyles.title]}>
                            <Text style={[globalTextStyles.subSubTitle, styles.subSubText]}>Search for the recipes that work for you! Enjoy amazing recipes in new ways, from the creators you love.</Text>
                        </View>
                    </View>
                    <View style={[globalStructureStyles.row, styles.buttonsWrap]}>
                        <TouchableOpacity
                            onPress={() => {handleViewRecipes()}}
                            style={styles.button}
                        >
                            <Text style={[globalTextStyles.subTitle ,styles.buttonText]}>Browse Cookbooks!</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {handleContinue()}}
                            style={[styles.button, styles.buttonOutline]}
                        >
                            <Text style={[globalTextStyles.subTitle, styles.buttonOutlineText]}>Finish</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[globalStructureStyles.row, styles.circleWrapper]}>
                        <View style={[styles.circle]}></View>
                        <View style={[styles.circle]}></View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default finalScreen

const styles = StyleSheet.create({
    screenWrap: {
        backgroundColor: brandColors.white
    },
    imageWrap: {
        height: '45%'
    },
    image: {
        width: '100%',
        height: '105%'
    },
    optionsWrap: {
        height: '50%',
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
        color: brandColors.textPrimary,
        paddingTop: 10,
        paddingHorizontal: 5
    },
    subSubText: {
        color: brandColors.textPrimary,
        paddingTop: 5,
        paddingHorizontal: 5,
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
    },
    circle:{
        width:16,
        height:16,
        borderRadius: 8,
        borderColor: brandColors.primary,
        backgroundColor: brandColors.primary,
        borderWidth: 1,
        marginTop: 15,
        marginHorizontal: 5
    },
    circleOpen:{
        width:16,
        height:16,
        borderRadius: 8,
        borderColor: brandColors.primary,
        borderWidth: 1,
        marginTop: 15,
        marginHorizontal: 5
    },
    circleWrapper:{
        alignContent: 'center',
        justifyContent: 'center'
    },
    backArrow: {
        marginHorizontal: 15,
        marginVertical: 35,
        padding: 5
    },
})