import { useNavigation } from '@react-navigation/core'
import React, {useState, useEffect, useContext} from 'react'
import {AuthContext} from '../../providers/authProvider'
import {StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, ImageBackground, Picker } from 'react-native'
import {brandColors} from '../../styles/globalBrandColors'
import {globalTextStyles} from '../../styles/globalTextStyles'
import {globalStructureStyles} from '../../styles/globalStructureStyles'
import Ionicons from '@expo/vector-icons/Ionicons'
import FontAwsome5 from '@expo/vector-icons/FontAwesome5'

const goalReviewScreen = () => {

    const navigation = useNavigation()
    const image = { uri: 'https://images.unsplash.com/photo-1506106487742-2baf007edcfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' };
    const {userData} = useContext(AuthContext)

    const handleContinue = () => {
        navigation.navigate("finalScreen")
    }

    const handleBack = () => {
        navigation.navigate("goalSettingScreen")
    }

    return (
        <View style={[globalStructureStyles.container, styles.screenWrap]}> 
            <View style={[globalStructureStyles.row, styles.imageWrap]}> 
                <ImageBackground source={image} resizeMode="cover" style={styles.image}> 
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
                            <Text style={[globalTextStyles.title, styles.subText]}>Your tailored goal!</Text>
                        </View>
                    </View>
                    <View style={[globalStructureStyles.column, styles.shadow, styles.selectWrap2]}>
                        <View  style={[globalStructureStyles.row, styles.selectWrapInner]}>
                            <FontAwsome5 name="weight" size={35} color={brandColors.secondary} />
                            <Text style={[globalTextStyles.subTitle, styles.displayText2]}> {"Goal: Lose " + userData.goalData.details.poundLoss + "lb per week!"} </Text>
                            <Text style={[globalTextStyles.subSubTitle, styles.subDisplayText2]}> {"In 5 months you can lose " + userData.goalData.details.poundLoss * 20 + " pounds!"} </Text>
                        </View>
                    </View>
                    <View style={[globalStructureStyles.column, styles.shadow, styles.selectWrap]}>
                        <View  style={[globalStructureStyles.row, styles.selectWrapInner]}>
                            <FontAwsome5 name="fire" size={35} color={brandColors.primary} />
                            <Text style={[globalTextStyles.subTitle, styles.displayText]}> Calorie Breakdown: </Text>
                        </View>
                        <View  style={[globalStructureStyles.row, styles.breakdown]}>
                            <TouchableOpacity 
                                onPress={() => {alert("maintenance calories")}}
                                style={[globalStructureStyles.row, styles.breakdownContainer]}
                            >
                                <Text style={[globalTextStyles.subTitle, {color: brandColors.textPrimary}]}> {userData.goalData.details.base} </Text>
                                <FontAwsome5 name="user-alt" size={20} color={brandColors.textPrimary} />
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={() => {alert("bonues activity calories")}}
                                style={[globalStructureStyles.row, styles.breakdownContainer]}
                            >
                            <Text style={[globalTextStyles.subTitle, {color: brandColors.secondary}]}> {"+" + userData.goalData.details.activityExtra} </Text>
                                <FontAwsome5 name="shoe-prints" size={20} color={brandColors.secondary} />
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={() => {alert("calorie deficit to burn fat")}}
                                style={[globalStructureStyles.row, styles.breakdownContainer]}
                            >
                                <Text style={[globalTextStyles.subTitle, {color: brandColors.primary}]}> {"-" + userData.goalData.details.deficit} </Text>
                                <FontAwsome5 name="fire" size={20} color={brandColors.primary} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[globalStructureStyles.row, styles.buttonsWrap]}>
                        <TouchableOpacity
                            onPress={() => {handleContinue()}}
                            style={styles.button}
                        >
                            <Text style={[globalTextStyles.subTitle ,styles.buttonText]}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default goalReviewScreen

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
    breakdown:{
        paddingTop: 15
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
        height: '20%',
    },
    subText: {
        color: brandColors.textPrimary,
        paddingTop: 10,
        paddingHorizontal: 5
    },
    displayText: {
        paddingLeft: 10, 
        color: brandColors.primary
    },
    displayText2: {
        paddingLeft: 10, 
        color: brandColors.secondary
    },
    breakdownContainer: {
        paddingRight: 5,
    },
    subDisplayText2: {
        paddingTop: 15,
        marginLeft: -4,
        color: brandColors.secondary
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
        marginTop: '5%',
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
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 4,
        },
        shadowOpacity: 0.35,
        shadowRadius: 5,
        elevation: 2,
    },
    selectWrap: {
        borderRadius: 10,
        width: '100%',
        padding: 25,
        borderColor: brandColors.primary,
        borderWidth: 2,
        backgroundColor: brandColors.white,
        alignItems: 'center'
    },
    selectWrap2: {
        borderRadius: 10,
        marginBottom: 20,
        width: '100%',
        padding: 25,
        borderColor: brandColors.secondary,
        borderWidth: 2,
        backgroundColor: brandColors.white,
    },
    selectWrapInner: {
        alignItems: 'center',
    },
    backArrow: {
        marginHorizontal: 15,
        marginVertical: 35,
        padding: 5
    },
})