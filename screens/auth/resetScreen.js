import { useNavigation } from '@react-navigation/core'
import React, {useState, useEffect, useContext} from 'react'
import {AuthContext} from '../../providers/authProvider'
import {StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, ImageBackground, Keyboard } from 'react-native'
import {brandColors} from '../../styles/globalBrandColors'
import {globalTextStyles} from '../../styles/globalTextStyles'
import {globalStructureStyles} from '../../styles/globalStructureStyles'
import Ionicons from '@expo/vector-icons/Ionicons';
import Logo from '../../components/logo'

const resetScreen = () => {
    const {recoverPassword} = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    const navigation = useNavigation()
    const image = { uri: 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80' };

    const handleBack = () => {
        navigation.pop()
    }

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          () => {
            setKeyboardVisible(true); 
          }
        );
        const keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          () => {
            setKeyboardVisible(false); 
          }
        );
    
        return () => {
          keyboardDidHideListener.remove();
          keyboardDidShowListener.remove();
        };
      }, []);

    return (
        <View style={[globalStructureStyles.container, styles.screenWrap]}> 
            <View style={[globalStructureStyles.row, styles.imageWrap]}> 
                <ImageBackground source={image} resizeMode="cover" style={styles.image} />
            </View>
            <View style={[globalStructureStyles.row, styles.optionsWrap]}> 
                <View style={[globalStructureStyles.container, styles.optionsContainer]}>
                    <View style={[globalStructureStyles.column, styles.logoWrap]}>
                        {!isKeyboardVisible && <View style={[globalStructureStyles.row, styles.logoWrapInner]}>
                            <Logo />
                        </View>}
                    </View>
                    <View style={[globalStructureStyles.row, styles.buttonsWrap]}>

                        <TextInput
                            placeholder="Account Email"
                            value={email}
                            onChangeText={text => setEmail(text)}
                            style={[globalTextStyles.subSubTitle , styles.input]}
                         />

                        <TouchableOpacity
                            onPress={() => {recoverPassword(email)}}
                            style={[styles.signUpButton]}
                        >
                            <Text style={[globalTextStyles.subTitle, styles.buttonText]}>Reset Account</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {handleBack()}}
                            style={[styles.backButton]}
                        >
                            <View style={[globalStructureStyles.row]}>
                                <Ionicons name="md-chevron-back-outline" size={25} color={brandColors.primary} />
                                <Text style={[globalTextStyles.subTitle, styles.backButtonText]}>Back</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default resetScreen

const styles = StyleSheet.create({
    screenWrap: {
        backgroundColor: brandColors.white
    },
    imageWrap: {
        height: '40%'
    },
    image: {
        width: '100%',
        height: '105%'
    },
    optionsWrap: {
        height: '60%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    optionsContainer: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: '100%',
        padding: 20,
        backgroundColor: brandColors.white
    },
    logoWrap: {
        width: '100%',
        height: '40%',
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
    },
    button: {
        backgroundColor: brandColors.primary,
        width: '100%',
        padding: 15,
        borderRadius: 5,
        marginTop: 15,
        alignItems: 'center'
    },
    signUpButton: {
        backgroundColor: brandColors.primary,
        width: '80%',
        padding: 10,
        borderRadius: 5,
        marginTop: 30,
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
        paddingLeft: 5,
    },
    buttonOutlineText: {
        color: brandColors.primary,
    },
    logoWrapInner: {
        justifyContent: 'center',
        paddingTop: 20,
    },
    backButtonText: {
        color: brandColors.primary,
        textDecorationLine: 'underline'
    },
    backButton: {
        width: '30%',
        padding: 5,
        borderRadius: 5,
        marginTop: 25,
        alignItems: 'center'
    },
    input: {
        backgroundColor: brandColors.white,
        borderBottomWidth: 2,
        width: '75%',
        borderColor: brandColors.tertiary,
        marginTop: 20,
        padding: 2
    }
})