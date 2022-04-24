import { useNavigation } from '@react-navigation/core'
import React, {useState, useEffect} from 'react'
import {StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from '../../services/firebase'
import {brandColors} from '../../styles/globalBrandColors'
import {globalTextStyles} from '../../styles/globalTextStyles'

const searchRecipeScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()

    useEffect(() => {
        const unsubrscribe = onAuthStateChanged(auth, user => {
            if (user){
                navigation.replace("searchRecipeScreen")
            }
        })

        return unsubrscribe
    }, [])

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth,email,password)
        .then(userCredentials => {
            const user = userCredentials.user;
            alert('Created account ' + user.email);
        })
        .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            alert('Logged in as ' + user.email);
        })
        .catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={[globalTextStyles.subSubTitle , styles.input]}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={[globalTextStyles.subSubTitle , styles.input]}
                    secureTextEntry
                />
            </View>

            <View
                style={styles.buttonContainer}
            >
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={[globalTextStyles.subTitle ,styles.buttonText]}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={[globalTextStyles.subTitle, styles.buttonOutlineText]}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default searchRecipeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
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
        marginTop: 5,
        borderColor: brandColors.primary,
        borderWidth: 2
    },
    buttonText: {
        color: brandColors.white,
    },
    buttonOutlineText: {
        color: brandColors.primary,
    }
})