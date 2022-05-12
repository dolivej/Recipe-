import React from 'react'
import {StyleSheet, Text, View } from 'react-native'
import {brandColors} from '../styles/globalBrandColors'
import {globalTextStyles} from '../styles/globalTextStyles'
import {globalStructureStyles} from '../styles/globalStructureStyles'
import Ionicons from '@expo/vector-icons/Ionicons';

const Logo = () => {

    const icon = "md-fast-food"

    return (
        <View style={[globalStructureStyles.column, styles.logoWrap, styles.shadow]}> 
            <View style={[globalStructureStyles.row, styles.iconWrap]}>
                <Ionicons name={icon} size={70} color={brandColors.white} />
            </View>
            <View style={[globalStructureStyles.row, styles.titleWrap]}>
                <Text style={[globalTextStyles.subTitle, styles.title]}>Recipe+</Text>
            </View>
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({
    logoWrap: {
        width: 150,
        height: 160,
        borderRadius: 10,
        backgroundColor: brandColors.primary,
        
    },
    iconWrap:{
        justifyContent: 'center',
        paddingVertical: 16
    },
    titleWrap: {
        justifyContent: 'center',
    },
    title:{
        color: brandColors.white,
        fontSize: 24
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 4,
        },
        shadowOpacity: 0.35,
        shadowRadius: 5,
        elevation: 3,
    },
})