import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'
import SendIcon from '../assets/SendIcon'

export const SendButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <SendIcon/>
    </TouchableOpacity>
  )
}

export default SendButton

const styles = StyleSheet.create({
    button:{
        height: s(46),
        width: s(46),
        borderRadius: s(23),
        backgroundColor: "#1077AF",
        justifyContent: "center",
        alignItems: "center",
    }
})