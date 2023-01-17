import { 
    View, 
    Text, 
    TextInput, 
    KeyboardAvoidingView, 
    Platform, 
    TouchableWithoutFeedback, 
    Keyboard, 
    TouchableHighlight 
} from 'react-native'
import React, { useState } from 'react'
import stylesheet, { colors } from '../styles.js'

export default function LoginScreen() {
    const { textPrimary, content, input, container, text, button, textDanger } = stylesheet
    const [data, setData] = useState({email: '', password: ''})
    
    const [emailError, setEmailError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)

    const handleSubmit = () => {
        Keyboard.dismiss()
        handleValidation()
        if(handleValidation()){
            console.log(data)
        }
    }

    const handleValidation = () => {
        if(data.password.trim() === '' || data.password.trim().length < 6) {
            setPasswordError('The password is too short')
            return false
        }
        if(data.email.trim() === '') {
            setEmailError('Please enter a valid email address')
            return false
        }
        return true
    }

  return (
    <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={[container, content, {
            marginBottom: 100,
            
        }]}
    >
        <TouchableWithoutFeedback onPress={()=> { Keyboard.dismiss() }} style={[container,{
            backgroundColor: '#ffeeee'
        }]}>
            <View style={content}>
                <Text style={textPrimary}>Welcome back,</Text>
                <Text style={ text }>Please login.</Text>

                {emailError && <Text style={textDanger}>{ emailError }</Text>}
                <TextInput 
                    placeholder='Email Address'
                    value={data.email} 
                    onChangeText={(val)=> setData({...data, email: val.trim()})}
                    style={[input, {
                        borderColor: emailError? colors.danger : colors.bgGreen,
                    }]} /> 

                {passwordError && <Text style={textDanger}>{ passwordError }</Text>}
                <TextInput 
                    placeholder='Password' 
                    secureTextEntry value={data.password} 
                    onChangeText={(val)=> setData({...data, password: val.trim()})} 
                    style={[input, {
                        borderColor: passwordError ? colors.danger : colors.bgGreen,
                    }]} /> 
                <TouchableHighlight onPress={handleSubmit} style={button}>
                    <Text style={{color: colors.bgPrimary, fontSize: 24}}>Login</Text>
                </TouchableHighlight>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
