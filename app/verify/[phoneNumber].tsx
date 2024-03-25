import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const VerifyOTPPage = () => {
    const {phoneNumber} = useLocalSearchParams()

	return (
		<View>
			<Text>VerifyOTPPage</Text>
		</View>
	)
}

export default VerifyOTPPage

const styles = StyleSheet.create({})
