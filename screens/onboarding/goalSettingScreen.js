import { useNavigation } from '@react-navigation/core'
import React, {useState, useEffect, useContext} from 'react'
import {AuthContext} from '../../providers/authProvider'
import {StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, ImageBackground, Picker } from 'react-native'
import {brandColors} from '../../styles/globalBrandColors'
import {globalTextStyles} from '../../styles/globalTextStyles'
import {globalStructureStyles} from '../../styles/globalStructureStyles'
import Ionicons from '@expo/vector-icons/Ionicons'
import FontAwsome5 from '@expo/vector-icons/FontAwesome5'

const goalSettingScreen = () => {

    const navigation = useNavigation()
    const image = { uri: 'https://images.unsplash.com/photo-1534685785745-60a2cea0ec34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' };
    const image2 = { uri: 'https://images.unsplash.com/photo-1611077544170-be90a2f68add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' };
    const [goalType, setGoalType] = useState("loseWeight");
    const [isSecondPhase, setIsSecondPhase] = useState(false);
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bodyFatPercent, setBodyFatPercent] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [excerciseTime, setExcerciseTime] = useState(0);

    const {writeUserGoalData} = useContext(AuthContext)

    const handleContinue = () => {
        if(!isSecondPhase){
            setIsSecondPhase(true)
        }else{
            if (height && weight && bodyFatPercent && age && gender && excerciseTime){
                writeUserGoalData(goalType, parseFloat(height), parseFloat(age), parseFloat(weight), parseFloat(bodyFatPercent), gender, excerciseTime)
                navigation.navigate("goalReviewScreen")
            }else{
                alert("Please fill in all fields!")
            }
        }
    }

    const handleBack = () => {
        if(isSecondPhase){
            setIsSecondPhase(false)
        }else{
            navigation.navigate("introScreen")
        }
    }

    return (
        <View style={[globalStructureStyles.container, styles.screenWrap]}> 
            <View style={[globalStructureStyles.row, styles.imageWrap]}> 
                <ImageBackground source={isSecondPhase ? image2 : image} resizeMode="cover" style={styles.image}> 
                    <TouchableOpacity 
                        onPress={() => {handleBack()}}
                        style={[styles.backArrow]}
                    >
                        <Ionicons name="chevron-back-circle-outline" size={35} color={brandColors.white} />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={[globalStructureStyles.row, styles.optionsWrap]}> 
                {!isSecondPhase && <View style={[globalStructureStyles.container, styles.optionsContainer]}>
                    <View style={[globalStructureStyles.column, styles.logoWrap]}>
                        <View style={[globalStructureStyles.row, styles.subText, globalTextStyles.title]}>
                            <Text style={[globalTextStyles.title, styles.subText]}>What do you want to achieve?</Text>
                        </View>
                    </View>
                    <View style={[globalStructureStyles.row, styles.shadow, styles.selectWrap]}>
                        <Text style={[globalTextStyles.subTitle]}>I want to... </Text>
                        <View style={[styles.picker]}>
                            <Picker
                                selectedValue={goalType}
                                style={[styles.pickerInner]}
                                onValueChange={(itemValue, itemIndex) => setGoalType(itemValue)}
                            >
                                <Picker.Item label="Lose Weight" value="loseWeight" />
                                <Picker.Item label="Gain Muscle" value="gainMuscle" />
                                <Picker.Item label="Maintain Weight" value="maintainWeight" />
                            </Picker>
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
                </View>}
                {isSecondPhase && <View style={[globalStructureStyles.container, styles.optionsContainer]}>
                    <View style={[globalStructureStyles.column, styles.logoWrap2]}>
                        <View style={[globalStructureStyles.row, styles.subText, globalTextStyles.title]}>
                            <Text style={[globalTextStyles.title, styles.subText]}>Great! Tell us a bit more about you.</Text>
                        </View>
                    </View>
                    <View style={[globalStructureStyles.row, styles.inputContainer]}>
                        <FontAwsome5 name="ruler-combined" size={20} color={brandColors.tertiary} />
                        <TextInput
                            placeholder="Height (cm)"
                            value={height}
                            onChangeText={text => setHeight(text)}
                            style={[globalTextStyles.subSubTitle , styles.input]}
                        />
                        <FontAwsome5 name="hashtag" size={20} color={brandColors.tertiary} />
                        <TextInput
                            placeholder="Age"
                            value={age}
                            onChangeText={text => setAge(text)}
                            style={[globalTextStyles.subSubTitle , styles.input]}
                        />
                    </View>
                    <View style={[globalStructureStyles.row, styles.inputContainer]}>
                        <FontAwsome5 name="weight" size={20} color={brandColors.tertiary} />
                        <TextInput
                            placeholder="Weight (kg)"
                            value={weight}
                            onChangeText={text => setWeight(text)}
                            style={[globalTextStyles.subSubTitle , styles.input]}
                        />
                        <FontAwsome5 name="percentage" size={20} color={brandColors.tertiary} />
                        <TextInput
                            placeholder="Body Fat (%)"
                            value={bodyFatPercent}
                            onChangeText={text => setBodyFatPercent(text)}
                            style={[globalTextStyles.subSubTitle , styles.inputSpecial]}
                        />
                        <TouchableOpacity 
                            onPress={() => {alert('Body Fat Chat')}}
                            style={[styles.bodyFatButton]}
                        >
                            <FontAwsome5 name="question-circle" size={22} color={brandColors.primary} />
                        </TouchableOpacity>
                    </View>

                    <View style={[globalStructureStyles.row, styles.textInputContainer]}>
                        <Text style={[globalTextStyles.subTitle, styles.questionText]}>Gender:</Text>
                        <TouchableOpacity 
                        style={(gender == "Male") ? styles.circle : styles.circleOpen}
                        onPress={() => {setGender("Male")}}
                        />
                        <Text style={[globalTextStyles.subSubTitle]}>Male</Text>
                        <TouchableOpacity 
                        style={(gender == "Female") ? styles.circle : styles.circleOpen}
                        onPress={() => {setGender("Female")}}
                        />
                        <Text style={[globalTextStyles.subSubTitle]}>Female</Text>
                    </View>
                    <View style={[globalStructureStyles.column, styles.textInputContainer]}>
                        <Text style={[globalTextStyles.subTitle, styles.questionText]}>How much time per day can you excercise?</Text>
                        <View style={[globalStructureStyles.row, styles.textInputContainer]}>
                            <TouchableOpacity 
                            style={(excerciseTime == 20) ? styles.circle1 : styles.circleOpen1}
                            onPress={() => {setExcerciseTime(20)}}
                            />
                            <Text style={[globalTextStyles.subSubTitle]}>20m</Text>
                            <TouchableOpacity 
                            style={(excerciseTime == 40) ? styles.circle2 : styles.circleOpen2}
                            onPress={() => {setExcerciseTime(40)}}
                            />
                            <Text style={[globalTextStyles.subSubTitle]}>40m</Text>
                            <TouchableOpacity 
                            style={(excerciseTime == 60) ? styles.circle2 : styles.circleOpen2}
                            onPress={() => {setExcerciseTime(60)}}
                            />
                            <Text style={[globalTextStyles.subSubTitle]}>60m</Text>
                            <TouchableOpacity 
                            style={(excerciseTime == 90) ? styles.circle2 : styles.circleOpen2}
                            onPress={() => {setExcerciseTime(90)}}
                            />
                            <Text style={[globalTextStyles.subSubTitle]}>90m</Text>
                        </View>
                    </View>
                    {!isSecondPhase && <View style={[globalStructureStyles.row, styles.buttonsWrap]}>
                        <TouchableOpacity
                            onPress={() => {handleContinue()}}
                            style={styles.button}
                        >
                            <Text style={[globalTextStyles.subTitle, styles.buttonText]}>Continue</Text>
                        </TouchableOpacity>
                    </View>}
                    {isSecondPhase && <View style={[globalStructureStyles.row, styles.buttonsWrap2]}>
                        <TouchableOpacity
                            onPress={() => {handleContinue()}}
                            style={styles.button}
                        >
                            <Text style={[globalTextStyles.subTitle, styles.buttonText]}>Continue</Text>
                        </TouchableOpacity>
                    </View>}
                </View>}
            </View>
        </View>
    )
}

export default goalSettingScreen

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
        height: '38%',
    },
    logoWrap2: {
        width: '100%',
        height: '20%',
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
        marginTop: '28%',
    },
    buttonsWrap2:{
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: '8%',
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
    picker: {
        width: '60%',
        height: 50,
        borderBottomWidth: 2
    },
    pickerInner: {
        width: '100%',
        height: 50,
    },
    backArrow: {
        marginHorizontal: 15,
        marginVertical: 35,
        padding: 5
    },
    input: {
        backgroundColor: brandColors.white,
        borderBottomWidth: 2,
        width: '35%',
        borderColor: brandColors.tertiary,
        marginTop: 20,
        padding: 2,
        marginLeft: 10,
        marginRight: 13
    },
    inputSpecial: {
        backgroundColor: brandColors.white,
        borderBottomWidth: 2,
        width: '35%',
        borderColor: brandColors.tertiary,
        marginTop: 20,
        padding: 2,
        marginLeft: 10,
        marginRight: 5
    },
    inputContainer: {
        alignItems: 'center',
        marginTop: 15,
        paddingHorizontal: 10,
        backgroundColor: brandColors.white
    },
    textInputContainer: {
        alignItems: 'center',
        marginTop: 15,
        paddingHorizontal: 10
    },
    questionText:{
        color: brandColors.tertiary
    },
    circle:{
        width:26,
        height:26,
        borderRadius: 13,
        borderColor: brandColors.tertiary,
        backgroundColor: brandColors.tertiary,
        borderWidth: 2,
        marginRight: 10,
        marginLeft: 20
    },
    circleOpen:{
        width:26,
        height:26,
        borderRadius: 13,
        borderColor: brandColors.tertiary,
        borderWidth: 2,
        marginRight: 10,
        marginLeft: 20
    },
    circle1:{
        width:26,
        height:26,
        borderRadius: 13,
        borderColor: brandColors.tertiary,
        backgroundColor: brandColors.tertiary,
        borderWidth: 2,
        marginRight: 5,
    },
    circleOpen1:{
        width:26,
        height:26,
        borderRadius: 13,
        borderColor: brandColors.tertiary,
        borderWidth: 2,
        marginRight: 5,
    },
    circle2:{
        width:26,
        height:26,
        borderRadius: 13,
        borderColor: brandColors.tertiary,
        backgroundColor: brandColors.tertiary,
        borderWidth: 2,
        marginRight: 5,
        marginLeft: 20
    },
    circleOpen2:{
        width:26,
        height:26,
        borderRadius: 13,
        borderColor: brandColors.tertiary,
        borderWidth: 2,
        marginRight: 5,
        marginLeft: 20
    },
})