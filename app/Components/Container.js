import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../styles'

export default function Container({ children }) {
    const { container } = styles
  return (
    <SafeAreaView style={container}>
      {children}
    </SafeAreaView>
  )
}