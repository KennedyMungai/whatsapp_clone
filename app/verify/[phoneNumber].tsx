import { useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const VerifyOTPPage = () => {
	const { phoneNumber, signIn } = useLocalSearchParams<{
		phoneNumber: string
		signIn: string
	}>()

	const [code, setCode] = useState('')

	return (
		<View>
			<Text>VerifyOTPPage</Text>
		</View>
	)
}

export default VerifyOTPPage

const styles = StyleSheet.create({})
