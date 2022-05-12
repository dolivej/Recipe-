import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail, sendEmailVerification} from "../services/firebase"
import {getFirestore, setDoc, doc} from "firebase/firestore"
import {returnAllDetails} from "../services/calorieCalculations"
// import {GoogleSignin} from '@react-native-google-signin/google-signin';

/*
  Auth Provider is a very simple React Context provider that provides the following:
  -> keeping track of the user logged in object
  -> keeping track of user name (for new account creation)
  -> Providing methods related to account like login, logout, reset etc. 
  The methods here rely on firebase auth, please see the docs for more details
*/

const firestore = getFirestore();

export const AuthContext = React.createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [userData, setUserData] = useState({});

  const createNewUser = (userPassed) => {
    setDoc(doc(firestore, "users", userPassed.uid), {
      accountInfo: {
        email: userPassed.email,
        isVerified: userPassed.emailVerified,
        name: userPassed.displayName
      }
    });

    setUserData({
      ...userData,
      accountInfo: {
        email: userPassed.email,
        isVerified: userPassed.emailVerified,
        name: userPassed.displayName
      }
    })
  }
 
  return (
    <AuthContext.Provider
      value={{
        loadingAuth,
        user,
        setUser,
        userData,
        setUserAsync: (user) => {
          try {
            AsyncStorage.setItem('user', JSON.stringify(user));
          } catch (error) {
            console.log('AsyncStorage Failed to set User, Reason : ' + error.message);
          }
        },
        removeUserAsync: () => {
          try {
            AsyncStorage.removeItem('user');
          } catch (error) {
            console.log('AsyncStorage Failed to remove User, Reason : ' + error.message);
          }
        },
        // loginGoogle: async () => {
        //   try {
        //     const {idToken} = await GoogleSignin.signIn();
        //     const googleCredential = auth.GoogleAuthProvider.credential(
        //       idToken,
        //     );
        //     auth().signInWithCredential(googleCredential);
        //   } catch (error) {
        //     alert(error.message);
        //   }
        // },
        loginEmailPass: (email, password) => {
          setLoadingAuth(true)
          signInWithEmailAndPassword(auth,email, password).then(user => {
            setLoadingAuth(false)
          }).catch(error => {
            setLoadingAuth(false)
            alert('Failed to login: ' + error.message);
          })
        },
        createAccount: (email, password) => {
          setLoadingAuth(true)
          createUserWithEmailAndPassword(auth, email, password).then(user => {
            setLoadingAuth(false)
            createNewUser(user.user)
          }).catch(error => {
            setLoadingAuth(false)
            alert('Failed to create account: ' + error.message);
          })
        },
        signOut: () => {
          setLoadingAuth(true)
          signOut(auth).then(user => {
            setLoadingAuth(false)
          }).catch(error => {
            setLoadingAuth(false)
            alert('Failed to sign out: ' + error.message);
          })
        },
        recoverPassword: (email) => {
          setLoadingAuth(true)
          sendPasswordResetEmail(auth,email).then(user => {
            setLoadingAuth(false)
            alert('Reset email sent!')
          }).catch(error => {
            setLoadingAuth(false)
            alert('Failed to reset account: ' + error.message);
          })  
        },
        verifyEmail: () => {
          sendEmailVerification(auth).catch(error => {
            console.log('Failed to verify account: ' + error.message);
          })
        },
        updateUserRecipeData: () => {

        },
        updateUserDailyTracking: () => {

        },
        updateUserHistoricalTracking: () => {

        },
        writeUserGoalData: (goalType, height, age, weight, bodyFatPercent, gender, dailyExcercise) => {
          let details = returnAllDetails(gender, age, height, weight, dailyExcercise, bodyFatPercent,goalType)
          setUserData({
            ...userData,
            goalData: {
              goalType,
              height,
              age,
              weight,
              bodyFatPercent,
              gender,
              dailyExcercise,
              details: {
                ...details
              }
            }
          })
          setDoc(doc(firestore, "users", user.uid), {
            ...userData,
            goalData: {
              goalType,
              height,
              age,
              weight,
              bodyFatPercent,
              gender,
              dailyExcercise,
              details: {
                ...details
              }
            }
          }).catch(error => {
            alert(error.message)
          })
        }
      }}>
      {children}
    </AuthContext.Provider>
  );
};