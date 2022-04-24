import { StyleSheet } from "react-native";
import { useFonts } from "@expo-google-fonts/inter"

let [fontsLoaded] = useFonts({
    'Montserrat': require('../assets/fonts/Montserrat-VariableFont_wght.ttf')
})

export const globalStyles = StyleSheet.create({
    title: {
        fontFamily: 'Montserrat',
        fontWeight: 700,
        fontSize: 32
    },
    subTitle: {
        fontFamily: 'Montserrat',
        fontWeight: 700,
        fontSize: 16
    },
    subSubTitle: {
        fontFamily: 'Montserrat',
        fontWeight: 300,
        fontSize: 14
    },
    header: {
        fontFamily: 'Montserrat',
        fontWeight: 600,
        fontSize: 14
    },
    subHeader: {
        fontFamily: 'Montserrat',
        fontWeight: 600,
        fontSize: 12
    },
    info: {
        fontFamily: 'Montserrat',
        fontWeight: 300,
        fontSize: 10
    },
    body: {
        fontFamily: 'Montserrat',
        fontWeight: 600,
        fontSize: 14
    },
    subBody: {
        fontFamily: 'Montserrat',
        fontWeight: 300,
        fontSize: 14
    }
})