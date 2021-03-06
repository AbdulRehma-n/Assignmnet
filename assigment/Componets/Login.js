import { Linking,StyleSheet, Text, View,TextInput,SafeAreaView,TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {auth} from './Firebaseconfig'
import { signInWithEmailAndPassword } from "firebase/auth";
import Signup from './Signup';

const Login = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const move =()=>{

    navigation.navigate(Signup)
  }
  let handleLoginSubmit = (e) => {
    e.preventDefault();
    const hardcodedCred = {
        email: 'admin',
        password: 'admin'
    }
    if ((email == hardcodedCred.email) && (password == hardcodedCred.password)) {
      Linking.openURL("http://localhost:3000/");}
      else {

        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
          // Signed in 
          alert("welcome "+userCredential)
          // ...
        })


      }
    }
    

  return (
    <SafeAreaView>
    <View style={styles.main}>
        <View style={styles.home}>
      <Text style={styles.head}>WellCome TO CodeWOrld </Text>
      
      <TextInput
      value={email}  onChangeText={(email)=>setEmail(email)}
        style={styles.input}
        placeholder="Email"
        
      />
      <TextInput
        style={styles.input}
        
        value={password} onChangeText={(password)=>setPassword(password)}
        placeholder="password"
        returnKeyType='go'
        secureTextEntry
        autoCorrect={false}
      />
     <TouchableOpacity   style={styles.but1} onPress={move} >

<Text   style={styles.buq1}>
    Don't have account?
</Text>
</TouchableOpacity>

    <TouchableOpacity  onPress={handleLoginSubmit} style={styles.button} >

    <Text   style={styles.bu}>
        Login
    </Text>
</TouchableOpacity>
    </View>
    </View>
    </SafeAreaView>

  )
}

export default Login

const styles = StyleSheet.create({



    main:{
        height:"100%",
        display:"flex",
        justifyContent:"Space-between",
        paddingHorizontal:20,
        backgroundColor:"white",
        textAlign:"center",
         },
       
         home:{
       
           display:"flex",
           justifyContent:"center",
           paddingHorizontal:20,
           backgroundColor:"white",
           textAlign:"center",
            },

            head:{
marginTop:100,
                fontSize:30,
                fontWeight:"bold",
                textAlign:"center",
                color:"grey",
                marginBottom:70,
                  },
                  input: {
                   backgroundColor:"lightgrey",
                    height: 40,
                    margin: 10,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius:5,
                  },

                  button: {
        
                    alignItems: "center",
                    backgroundColor: "green",
                    padding: 5,
                    borderRadius:5,
                    marginTop:40,
                    marginLeft:160,
                  },
            
            bu:{
            
                fontSize:20,
                fontWeight:"bold",
                color:"white"},

                but1: {
        
                    alignItems: "center",
                    marginLeft:120,
                  },

                  buq1:{
            
                    fontSize:15,
                    fontWeight:"bold",
                    color:"red"},
    
})