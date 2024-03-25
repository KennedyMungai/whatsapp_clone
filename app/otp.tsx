import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, Text } from 'react-native'

const OTPPage = () => {
	const [loading, setLoading] = useState(false)
	const [phoneNumber, setPhoneNumber] = useState('')

	const router = useRouter()

	const keyboardPlatformOffset = Platform.OS === 'ios' ? 90 : 0

	return (
		<KeyboardAvoidingView>
			<Text>OTPPage</Text>
		</KeyboardAvoidingView>
	)
}

export default OTPPage

const styles = StyleSheet.create({})
