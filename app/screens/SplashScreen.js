import { TouchableHighlight, Text, View } from 'react-native'
import React from 'react'
import styleSheet, { colors } from '../styles'
import Container from '../Components/Container'

export default function SplashScreen({ navigation }) {
    const { button, text, textPrimary, content } = styleSheet

    const goToLogin = () => {
        navigation.navigate('Login')
    }
  return (
    <Container>
      <View style={[content, {
        alignItems: 'center',
        marginTop: -100
      }]}>
      <Text style={[textPrimary, {
        width: '100%',
        textAlign: 'center'
      }]}>Welcome to Edoctorug.</Text>
      <Text style={[text, {
        textAlign: 'center',
        fontSize: 28,
        marginBottom: 30
      }]}>We are your partners in keeping your body healthy.</Text>
      <TouchableHighlight style={[button, {
        maxWidth: 200,
        marginTop: 30

      }]} onPress={goToLogin}>
        <Text style={[text, {color: colors.bgPrimary}]}>Get Started</Text>
      </TouchableHighlight>
      </View>
    </Container>
  )
}