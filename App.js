import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import stylesheet from './app/styles';

export default function App() {
  const { container } = stylesheet
  return (
    <SafeAreaView style={[container, styles.baseContainer]}>
        <LoginScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  baseContainer: {
    justifyItems: 'center',
    alignItems: 'center'
  }
})
