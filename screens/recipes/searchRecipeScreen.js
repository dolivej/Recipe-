import React, {useContext} from 'react'
import {StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import {AuthContext} from '../../providers/authProvider'
import {brandColors} from '../../styles/globalBrandColors'
import {globalTextStyles} from '../../styles/globalTextStyles'

const searchRecipeScreen = () => {
    const {signOut, loadingAuth} = useContext(AuthContext)
    

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {signOut()}}
            >
                {!loadingAuth && <Text style={[globalTextStyles.subTitle, styles.buttonText]}>Sign Out</Text>}
                {loadingAuth && <ActivityIndicator size="small" color={brandColors.white} />}
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